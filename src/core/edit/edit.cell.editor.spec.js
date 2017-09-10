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
		it('should return a column', () => {
			const column = cellEditor.column;
			expect(column.pin).to.equal(null);
			expect(column.path).to.equal(null);
			expect(column.title).to.equal('testTitle');
			expect(column.value).to.equal(null);
			expect(column.width).to.equal(null);
			expect(column.origin).to.equal('specific');
			expect(column.type).to.equal('text');
			expect(column.minWidth).to.equal(20);
			expect(column.maxWidth).to.equal(null);
			expect(column.label).to.equal(null);
			expect(column.key).to.equal(null);
			expect(column.isVisible).to.equal(true);
			expect(column.index).to.equal(-1);
			expect(JSON.stringify(column.editorOptions)).to.equal(JSON.stringify(options));
			expect(column.editor).to.equal(null);
			expect(column.class).to.equal('data');
			expect(column.canSort).to.equal(true);
			expect(column.canResize).to.equal(true);
			expect(column.canMove).to.equal(true);
			expect(column.canHighlight).to.equal(true);
			expect(column.canFocus).to.equal(true);
			expect(column.canFilter).to.equal(true);
			expect(column.canEdit).to.equal(true);
			expect(column.$label).to.equal(null);
			expect(column.$value).to.equal(null);
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
