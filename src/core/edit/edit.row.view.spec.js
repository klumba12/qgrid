import {Command} from '../command';
import {EditRowView} from './edit.row.view';
import {modelFactory} from '../test/model.factory';
import {CommandManager} from '../command/command.manager';

describe('EditRowView', function () {
	let commandManager = new CommandManager();
	let model = modelFactory();
	let table = {
		view: {
			focus: () => true
		}
	};
	let editRowView = new EditRowView(model, table, commandManager);

	describe('get commands', function () {
		it('should return enter, commit, cancel, reset commands', () => {
			let map = editRowView.commands;
			expect(map.get('enter')).to.be.an.instanceOf(Command);
			expect(map.get('commit')).to.be.an.instanceOf(Command);
			expect(map.get('cancel')).to.be.an.instanceOf(Command);
			expect(map.get('reset')).to.be.an.instanceOf(Command);
		});
	});

	describe('contextFactory', function () {
		it('', () => {
			let enter = editRowView.commands.get('enter');
			enter.execute('row');
			let context = editRowView.contextFactory('row');
			expect(context['row']).to.equals('row');
			expect(context['current']).to.equals(undefined);  // !!!!!!!!!!!!!!
			expect(context['unit']).to.equals('row');
		});
	});

	describe('shortcutFactory', function () {
		it('should return shortcut', () => {
			let factory = editRowView.shortcutFactory('commit');
			let result = factory();
			expect(result).to.equals('ctrl+s');
		});
	});
});
