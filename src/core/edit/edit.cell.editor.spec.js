import {CellEditor} from './edit.cell.editor';
import {ColumnModel} from '../column-type/column.model';
import {identity} from '../utility';
import {Command} from '../command';
import {CommandManager} from '../command/command.manager';

describe('CellEditor', function () {

	afterEach(function() {
		if (cellEditor.cell.column.editorOptions.fetch) {
			delete cellEditor.cell.column.editorOptions.fetch;
		}
	});

	let column = new ColumnModel();
	column.title = 'testTitle';
	let commandManager = new CommandManager();
	commandManager.label = row => row;

	let cell = {
		value: 'value',
		label: 'label',
		row: 'row',
		column: column,
		commandManager: commandManager
	};

	let cellEditor = new CellEditor(cell);
	let options = {
		trigger: 'click',
		label: null,
		value: identity,
		commit: new Command(),
		cancel: new Command(),
		actions: []
	};

	describe('fetchFactory', function () {
		it('should return a new instance of Fetch if there is no options.fetch', () => {
			let fetch = cellEditor.fetchFactory();
			expect(fetch.select).to.equals('value');
		});
	});

	describe('fetchFactory', function () {
		it('should return a new instance of Fetch if there is options.fetch', () => {
			cellEditor.cell.column.editorOptions.fetch = 'fetch';
			let fetch = cellEditor.fetchFactory();
			expect(fetch.select).to.equals('fetch');
		});
	});

	describe('getLabel', function () {
		it('should return a label', () => {
			let label = cellEditor.getLabel(cell.row);
			expect(label).to.equals('row');
		});
	});

	describe('get title', function () {
		it('should return a title', () => {
			let title = cellEditor.title;
			expect(title).to.equals('testTitle');
		});
	});

	describe('get options', function () {
		it('should return an options', () => {
			let cellOptions = cellEditor.options;
			expect(JSON.stringify(cellOptions)).to.equals(JSON.stringify(options));
		});
	});

	describe('get column', function () {
		it('should return a column', () => {
			let column = cellEditor.column;
			expect(column).to.be.an.instanceOf(ColumnModel);
		});
	});

	describe('get commandManager', function () {
		it('should return a commandManager', () => {
			let commandManager = cellEditor.commandManager;
			expect(commandManager).to.be.an.instanceOf(CommandManager);
		});
	});

	describe('static get empty', function () {
		it('should return a new instance of CellEditorCore', () => {
			let result = CellEditor.empty;
			expect(result.constructor.name).to.equal('CellEditorCore');
		});
	});
});
