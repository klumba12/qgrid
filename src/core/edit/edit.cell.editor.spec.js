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

	const column = new ColumnModel();
	column.title = 'testTitle';
	const commandManager = new CommandManager();
	commandManager.label = row => row;

	const cell = {
		value: 'value',
		label: 'label',
		row: 'row',
		column: column,
		commandManager: commandManager
	};

	const cellEditor = new CellEditor(cell);
	const options = {
		trigger: 'click',
		label: null,
		value: identity,
		commit: new Command(),
		cancel: new Command(),
		actions: []
	};

	describe('fetchFactory', function () {
		it('should return a new instance of Fetch if there is no options.fetch', () => {
			const fetch = cellEditor.fetchFactory();
			expect(fetch.select).to.equals('value');
		});
	});

	describe('fetchFactory', function () {
		it('should return a new instance of Fetch if there is options.fetch', () => {
			cellEditor.cell.column.editorOptions.fetch = 'fetch';
			const fetch = cellEditor.fetchFactory();
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
			const title = cellEditor.title;
			expect(title).to.equals('testTitle');
		});
	});

	describe('get options', function () {
		it('should return an options', () => {
			const cellOptions = cellEditor.options;
			expect(JSON.stringify(cellOptions)).to.equals(JSON.stringify(options));
		});
	});

	describe('get column', function () {
		it('should return Cell`s column', () => {
			const column = cellEditor.column;
			expect(column).to.be.an.instanceOf(ColumnModel);
			expect(column.title).to.equal('testTitle');
		});
	});

	describe('get commandManager', function () {
		it('should return a commandManager', () => {
			const cm = cellEditor.commandManager;
			expect(cm).to.equal(commandManager);
		});
	});

	describe('static get empty', function () {
		it('should return a new instance of CellEditorCore', () => {
			const result = CellEditor.empty;
			expect(result.constructor.name).to.equal('CellEditorCore');
		});
	});
});
