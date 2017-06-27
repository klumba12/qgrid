import {Log, Shortcut, Command} from '../infrastructure';
import {RowEditor} from './edit.row.editor';

export class EditRowView {
	constructor(model, table, commandManager) {
		this.model = model;
		this.table = table;
		this.editor = RowEditor.empty;

		const shortcut = new Shortcut(commandManager);
		const commands = this.commands;
		this.shortcutOff = shortcut.register('editRowNavigation', commands);

		this.enter = commands.get('enter');
		this.commit = commands.get('commit');
		this.cancel = commands.get('cancel');
		this.reset = commands.get('reset');
	}

	get commands() {
		const model = this.model;
		const commands = {
			enter: new Command({
				shortcut: 'F2|Enter',
				canExecute: row => {
					row = row || model.navigation().row;
					return row
						&& model.edit().mode === 'row'
						&& model.edit().state === 'view'
						&& model.edit().enter.canExecute(this.contextFactory(row));
				},
				execute: (row, e) => {
					Log.info('row.edit', 'edit mode');
					if (e) {
						e.stopImmediatePropagation();
					}

					const columns = this.model.data().columns;
					this.editor = new RowEditor(row, columns);
					model.edit({state: 'edit'});
				}
			}),
			commit: new Command({
				shortcut: this.commitShortcut.bind(this),
				// TODO: add validation support
				canExecute: row => {
					row = row || model.navigation().row;
					return row
						&& model.edit().mode === 'row'
						&& model.edit().state === 'edit'
						&& model.edit().commit.canExecute(this.contextFactory(row));
				},
				execute: (cell, e) => {
					Log.info('row.edit', 'commit');
					if (e) {
						e.stopImmediatePropagation();
					}

					this.editor.commit();
					this.editor = RowEditor.empty;
					model.edit({state: 'view'});
				}
			}),
			cancel: new Command({
				shortcut: 'Escape',
				canExecute: row => {
					row = row || model.navigation().row;
					return row
						&& model.edit().mode === 'row'
						&& model.edit().state === 'edit'
						&& model.edit().cancel.canExecute(this.contextFactory(row));
				},
				execute: (row, e) => {
					Log.info('cell.edit', 'cancel');
					if (e) {
						e.stopImmediatePropagation();
					}

					this.editor.reset();
					this.editor = RowEditor.empty;
					model.edit({state: 'view'});
				}
			}),
			reset: new Command({
				canExecute: row => {
					row = row || model.navigation().row;
					return row
						&& model.edit().mode === 'row'
						&& model.edit().state === 'edit'
						&& model.edit().reset.canExecute(this.contextFactory(row));
				},
				execute: (row, e) => {
					Log.info('row.edit', 'reset');
					if (e) {
						e.stopImmediatePropagation();
					}

					if (row && model.edit().reset.execute(this.contextFactory(row)) !== false) {
						this.editor.reset();
						return false;
					}
				}
			})
		};
		return new Map(
			Object.entries(commands)
		);
	}

	contextFactory(row) {
		return {
			row: row,
			current: this.editor.current,
			unit: 'row'
		};
	}

	commitShortcut() {
		const model = this.model;
		const commitShortcuts = model.edit().commitShortcuts;
		const cell = model.navigation().cell;
		if (cell && commitShortcuts.hasOwnProperty(cell.column.type)) {
			return commitShortcuts[cell.column.type];
		}

		return commitShortcuts['$default'];
	}

	destroy() {
		this.shortcutOff();
	}
}
