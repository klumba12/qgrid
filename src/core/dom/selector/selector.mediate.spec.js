import {FakeElement} from '../fake';
import {SelectorFactory} from './selector.factory';
import {ColumnModel} from '../../column-type/column.model';
import {modelFactory} from '../../test/model.factory';
import {Bag} from '../bag';
import {SelectorMark} from './selector.mark';

describe('SelectorMediator', () => {
	window.ENV = {
		PRODUCTION: false
	};

	const column1 = new ColumnModel();
	column1.pin = 'grid';
	const column2 = new ColumnModel();
	column2.pin = 'left';
	const column3 = new ColumnModel();
	column3.pin = 'grid';
	const column4 = new ColumnModel();
	column4.pin = 'right';
	const column5 = new ColumnModel();
	column5.pin = null;
	const columns = [column1, column2, column3, column4, column5];

	const model = modelFactory();
	model.view({
		rows: ['row1','row2','row3'],
		columns: columns
	});

	const name = 'q';

	const	row1 = {cells: [{colSpan: 2, rowSpan: 2}]};
	const row2 = {cells: [{colSpan: 5, rowSpan: 5}]};
	const row3 = {cells: [{colSpan: 6, rowSpan: 6}]};
	const row4 = {cells: [{colSpan: 7, rowSpan: 7}]};
	const bag = new Bag();
	const bagMap = bag.models;
	bagMap.set(row1, row1);
	bagMap.set(row2, row2);
	bagMap.set(row3, row3);
	bagMap.set(row4, row4);

	const markup = {
		'q': {
			rows: [row1],
			cells: ['cell1']
		},
		'q-grid': {
			rows: [row2],
			cells: ['cell2', 'cell3']
		},
		'q-left': {
			rows: [row3],
			cells: ['cell1','cell3']
		},
		'q-right': {
			rows: [row4],
			cells: ['cell1', 'cell2', 'cell3', 'cell4']
		}
	};

	const selectorMark = new SelectorMark(model, markup, name);
	const selectorFactory = new SelectorFactory(bag, selectorMark);
	const selectorMediator = selectorFactory.create();

	describe('cell', () => {
		it('creates new cell', () => {
			const cell = {
				element: {
					colSpan: 6,
					rowSpan: 6
				},
				rowIndex: 0,
				columnIndex: 0
			};

			const result = selectorMediator.cell(0, 0);
			expect(JSON.stringify(result)).to.equal(JSON.stringify(cell));
		});
		it('if element is instance of FakeElement case', () => {
			const cell = {
				element: new FakeElement,
				rowIndex: 5,
				columnIndex: 5
			};

			const result = selectorMediator.cell(5, 5);
			expect(JSON.stringify(result)).to.equal(JSON.stringify(cell));
		});
	});

	describe('row', () => {
		const row = {
			element: {
				elements: [
					{cells: [{colSpan: 6, rowSpan: 6}]},
					{cells: [{colSpan: 2, rowSpan: 2}]},
					{cells: [{colSpan: 7, rowSpan: 7}]}
				]
			},
			index: 0
		};
		it('creates row', () => {
			const result = selectorMediator.row(0);
			expect(JSON.stringify(result)).to.equal(JSON.stringify(row));
		});
	});

	describe('rowCells', () => {
		const cell1 = {
			element: {colSpan: 6, rowSpan: 6},
			rowIndex: 0,
			columnIndex: 0
		};
		const cell2 = {
			element: {colSpan: 2, rowSpan: 2},
			rowIndex: 0,
			columnIndex: 1
		};
		const cell3 = {
			element: {colSpan: 7, rowSpan: 7},
			rowIndex: 0,
			columnIndex: 2
		};
		const cells = [cell1, cell2, cell3];
		it('array of rowCells', () => {
			const result = selectorMediator.rowCells(0);
			expect(JSON.stringify(result)).to.equal(JSON.stringify(cells));
		});
	});

	describe('rows', () => {
		const row = {
			element: {
				cells: [{colSpan: 6, rowSpan: 6}]
			},
			index: 0
		};
		const rows = [row];
		it('creates array of rows', () => {
			const result = selectorMediator.rows(0);
			expect(JSON.stringify(result)).to.equal(JSON.stringify(rows));
		});
	});

	describe('rowCount', () => {
		it('counts rows', () => {
			const result = selectorMediator.rowCount(0);
			expect(result).to.equal(6);
		});
		it('if there are no selectors, returns 0', () => {
			const result = selectorMediator.rowCount(123);
			expect(result).to.equal(0);
		});
	});

	describe('columnCount', () => {
		it('counts columns', () => {
			const result = selectorMediator.columnCount(0);
			expect(result).to.equal(3);
		});
		it('if there are no selectors, returns 0', () => {
			const result = selectorMediator.columnCount(123);
			expect(result).to.equal(0);
		});
	});

	describe('columnCells', () => {
		const cell = {
			element: {colSpan: 6, rowSpan: 6},
			rowIndex: 0,
			columnIndex: 0
		};
		const cells = [cell];
		it('creates array of cells', () => {
			const result = selectorMediator.columnCells(0);
			expect(JSON.stringify(result)).to.equal(JSON.stringify(cells));
		});
	});
});
