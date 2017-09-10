import {Command} from '../command';
import {EditCellView} from './edit.cell.view';
import {modelFactory} from '../test/model.factory';
import {CommandManager} from '../command/command.manager';
import {ColumnModel} from '../column-type/column.model';
import {identity} from '../utility';

describe('EditCellView', function () {
	const column = new ColumnModel();
	column.editor = 'reference';
	column.editorOptions.fetch = value => value;
	const commandManager = new CommandManager();
	const model = modelFactory();

	const table = {
		view: {
			focus: () => true
		}
	};

	const cell = {
		value: 'value',
		label: 'label',
		row: 'row',
		column: column,
		commandManager: commandManager,
		columnIndex: 1,
		rowIndex: 2,
		mode: () => null
	};

	const options = {
		trigger: 'click',
		label: null,
		value: identity,
		commit: new Command(),
		cancel: new Command(),
		actions: []
	};

	const editCellView = new EditCellView(model, table, commandManager);

	describe('get commands', function () {
		const enter = {
			'enter': Command
		};
		const commit = {
			'commit': Command
		};
		const cancel = {
			'cancel': Command
		};
		const reset = {
			'reset': Command
		};
		it('should return enter, commit, cancel, reset commands', () => {
			const map = editCellView.commands;
			expect(JSON.stringify(map.get('enter'))).to.equal(JSON.stringify(enter));
			expect(JSON.stringify(map.get('commit'))).to.equal(JSON.stringify(commit));
			expect(JSON.stringify(map.get('cancel'))).to.equal(JSON.stringify(cancel));
			expect(JSON.stringify(map.get('reset'))).to.equal(JSON.stringify(reset));
		});
	});

	describe('contextFactory', function () {
		it('should return object if passed 1 argument', () => {
			let context = editCellView.contextFactory(cell);
			expect(context.column.editor).to.equals('reference');
			expect(context.row).to.equals('row');
			expect(context.columnIndex).to.equals(1);
			expect(context.rowIndex).to.equals(2);
			expect(context.oldValue).to.equals('value');
			expect(context.newValue).to.equals('value');
			expect(context.oldLabel).to.equals('label');
			expect(context.newLabel).to.equals('label');
			expect(context.unit).to.equals('cell');
			expect(context.tag).to.equals(undefined);
			expect(context.valueFactory.name).to.equals('getFactory' );
			expect(context.labelFactory.name).to.equals('getFactory' );
		});
		it('should return object if passed 4 arguments argument', () => {
			let context = editCellView.contextFactory(cell, 'someValue', 'someLabel', 'tag');
			expect(context.column.editor).to.equals('reference');
			expect(context.row).to.equals('row');
			expect(context.columnIndex).to.equals(1);
			expect(context.rowIndex).to.equals(2);
			expect(context.oldValue).to.equals('value');
			expect(context.newValue).to.equals('someValue');
			expect(context.oldLabel).to.equals('label');
			expect(context.newLabel).to.equals('someLabel');
			expect(context.unit).to.equals('cell');
			expect(context.tag).to.equals('tag');
			expect(context.valueFactory.name).to.equals('getFactory' );
			expect(context.labelFactory.name).to.equals('getFactory' );
		});
	});

	describe('get fetch', function () {
		it('returns noop function', () => {
			const result = editCellView.fetch;
			expect(result.name).to.equals('noop');
		});
	});

	describe('get/set value', function () {
		it('set and get `value` ', () => {
			editCellView.value = 'value';
			const result = editCellView.value;
			expect(result).to.equals('value');
		});
	});

	describe('get/set label', function () {
		it('set and get `label` ', () => {
			editCellView.label = 'label';
			const result = editCellView.label;
			expect(result).to.equals('label');
		});
	});

	describe('get column', function () {
		it('get column', () => {
			const enter = editCellView.commands.get('enter');
			enter.execute(cell);
			const result = editCellView.column;
			expect(result.pin).to.equal(null);
			expect(result.path).to.equal(null);
			expect(result.title).to.equal(null);
			expect(result.value).to.equal(null);
			expect(result.width).to.equal(null);
			expect(result.origin).to.equal('specific');
			expect(result.type).to.equal('text');
			expect(result.minWidth).to.equal(20);
			expect(result.maxWidth).to.equal(null);
			expect(result.label).to.equal(null);
			expect(result.key).to.equal(null);
			expect(result.isVisible).to.equal(true);
			expect(result.index).to.equal(-1);
			expect(JSON.stringify(result.editorOptions)).to.equal(JSON.stringify(options));
			expect(result.editor).to.equal('reference');
			expect(result.class).to.equal('data');
			expect(result.canSort).to.equal(true);
			expect(result.canResize).to.equal(true);
			expect(result.canMove).to.equal(true);
			expect(result.canHighlight).to.equal(true);
			expect(result.canFocus).to.equal(true);
			expect(result.canFilter).to.equal(true);
			expect(result.canEdit).to.equal(true);
			expect(result.$label).to.equal(null);
			expect(result.$value).to.equal(null);
		});
	});

	describe('canEdit', function () {
		it('should return true if cell.column.canEdit && model.edit().mode === cell', () => {
			model.edit({
				mode: 'cell'
			});
			const result = editCellView.canEdit(cell);
			expect(result).to.equals(true);
		});
		it('should return false if model.edit().mode !== cell', () => {
			model.edit({
				mode: null
			});
			const result = editCellView.canEdit(cell);
			expect(result).to.equals(false);
		});
		it('should return false if no argument passed in', () => {
			const result = editCellView.canEdit(null);
			expect(result).to.equals(false);
		});
	});

	describe('get options', function () {
		it('get options', () => {
			const result = editCellView.options;
			expect(JSON.stringify(result)).to.equals(JSON.stringify(options));
		});
	});

	describe('shortcutFactory', function () {
		it('should return shortcut based on column.editor or column.type values', () => {
			const factory = editCellView.shortcutFactory('commit');
			const result = factory();
			expect(result).to.equals('ctrl+s');
		});
		it('should return optional shortcut', () => {
			delete column.editor;
			const factory = editCellView.shortcutFactory('commit');
			const result = factory();
			expect(result).to.equals('tab|shift+tab|enter');
		});
	});
});
