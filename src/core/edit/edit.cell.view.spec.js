import {Command} from '../command';
import {EditCellView} from './edit.cell.view';
import {modelFactory} from '../test/model.factory';
import {CommandManager} from '../command/command.manager';
import {ColumnModel} from '../column-type/column.model';
import {identity} from '../utility';

describe('EditCellView', function () {
	let column = new ColumnModel();
	column.editor = 'reference';
	column.editorOptions.fetch = value => value;
	let commandManager = new CommandManager();
	let model = modelFactory();

	let table = {
		view: {
			focus: () => true
		}
	};
	let cell = {
		value: 'value',
		label: 'label',
		row: 'row',
		column: column,
		commandManager: commandManager,
		columnIndex: 1,
		rowIndex: 2,
		mode: () => null
	};

	let options = {
		trigger: 'click',
		label: null,
		value: identity,
		commit: new Command(),
		cancel: new Command(),
		actions: []
	};

	let editCellView = new EditCellView(model, table, commandManager);

	describe('get commands', function () {
		it('should return enter, commit, cancel, reset commands', () => {
			let map = editCellView.commands;
			expect(map.get('enter')).to.be.an.instanceOf(Command);
			expect(map.get('commit')).to.be.an.instanceOf(Command);
			expect(map.get('cancel')).to.be.an.instanceOf(Command);
			expect(map.get('reset')).to.be.an.instanceOf(Command);
		});
	});

	describe('contextFactory', function () {
		it('should return object if passed 1 argument', () => {
			let context = editCellView.contextFactory(cell);
			expect(context.column).to.be.an.instanceOf(ColumnModel);
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
			expect(context.column).to.be.an.instanceOf(ColumnModel);
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
			let result = editCellView.fetch;
			expect(result.name).to.equals('noop');
		});
	});

	describe('get/set value', function () {
		it('set and get `value` ', () => {
			editCellView.value = 'value';
			let result = editCellView.value;
			expect(result).to.equals('value');
		});
	});

	describe('get/set label', function () {
		it('set and get `label` ', () => {
			editCellView.label = 'label';
			let result = editCellView.label;
			expect(result).to.equals('label');
		});
	});

	describe('get column', function () {
		it('get column', () => {
			let enter = editCellView.commands.get('enter');
			enter.execute(cell);
			let result = editCellView.column;
			expect(result).to.be.an.instanceOf(ColumnModel);
		});
	});

	describe('canEdit', function () {
		it('should return true if cell.column.canEdit && model.edit().mode === cell', () => {
			model.edit({
				mode: 'cell'
			});
			let result = editCellView.canEdit(cell);
			expect(result).to.equals(true);
		});
		it('should return false if model.edit().mode !== cell', () => {
			model.edit({
				mode: null
			});
			let result = editCellView.canEdit(cell);
			expect(result).to.equals(false);
		});
		it('should return false if no argument passed in', () => {
			let result = editCellView.canEdit(null);
			expect(result).to.equals(false);
		});
	});

	describe('get options', function () {
		it('get options', () => {
			let result = editCellView.options;
			expect(JSON.stringify(result)).to.equals(JSON.stringify(options));
		});
	});

	describe('shortcutFactory', function () {
		it('should return shortcut based on column.editor or column.type values', () => {
			let factory = editCellView.shortcutFactory('commit');
			let result = factory();
			expect(result).to.equals('ctrl+s');
		});
		it('should return optional shortcut', () => {
			delete column.editor;
			let factory = editCellView.shortcutFactory('commit');
			let result = factory();
			expect(result).to.equals('tab|shift+tab|enter');
		});
	});
});
