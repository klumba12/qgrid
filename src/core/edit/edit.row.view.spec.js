import {Command} from '../command';
import {EditRowView} from './edit.row.view';
import {modelFactory} from '../test/model.factory';
import {CommandManager} from '../command/command.manager';

describe('EditRowView', function () {
	const commandManager = new CommandManager();
	const model = modelFactory();
	const table = {
		view: {
			focus: () => true
		}
	};
	const editRowView = new EditRowView(model, table, commandManager);

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
			let map = editRowView.commands;
			expect(JSON.stringify(map.get('enter'))).to.equal(JSON.stringify(enter));
			expect(JSON.stringify(map.get('commit'))).to.equal(JSON.stringify(commit));
			expect(JSON.stringify(map.get('cancel'))).to.equal(JSON.stringify(cancel));
			expect(JSON.stringify(map.get('reset'))).to.equal(JSON.stringify(reset));
		});
	});

	describe('contextFactory', function () {
		it('', () => {
			const enter = editRowView.commands.get('enter');
			enter.execute('row');
			const context = editRowView.contextFactory('row');
			expect(context['row']).to.equals('row');
			expect(context['unit']).to.equals('row');
		});
	});

	describe('shortcutFactory', function () {
		it('should return shortcut', () => {
			const factory = editRowView.shortcutFactory('commit');
			const result = factory();
			expect(result).to.equals('ctrl+s');
		});
	});
});
