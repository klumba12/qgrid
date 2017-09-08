import {SelectorFactory} from './selector.factory';
import {SelectorMark} from './selector.mark';
import {Bag} from '../bag';
import {modelFactory} from '../../test/model.factory';
import {ColumnModel} from '../../column-type/column.model';

describe('SelectorFactory', () => {
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
	const markup = {
		'q': 'q',
		'q-grid': 'q-grid',
		'q-left': 'q-left',
		'q-right': 'q-right'
	};

	const selectorMark = new SelectorMark(model, markup, name);
	const bag = new Bag();
	const selectorFactory = new SelectorFactory(bag, selectorMark);
	const foo = (selector, indexA, indexB) => {
		return {
			selector: selector,
			indexA: indexA,
			indexB: indexB
		};
	};
	describe('create', () => {
		it('', () => {
			const selectorMediator = selectorFactory.create();
			const build = selectorMediator.buildSelectors;
			const invokes = build({row: 2, column: 2});
			const f = invokes[0];
			const func = f.invoke;
			const result1 = func(foo);
			expect(result1.selector.element).to.equal('q');
			expect(result1.selector.bag.rows.size).to.equal(0);
			expect(result1.selector.bag.cells.size).to.equal(0);
			expect(result1.selector.bag.models.size).to.equal(0);
			expect(result1.selector.factory.columnRange.start).to.equal(1);
			expect(result1.selector.factory.columnRange.end).to.equal(2);
			expect(result1.selector.factory.rowRange.start).to.equal(0);
			expect(result1.selector.factory.rowRange.end).to.equal(3);
			const f2 = invokes[1];
			const func2 = f2.invoke;
			const result2 = func2(foo);
			expect(result2.selector.element).to.equal('q-right');
			expect(result2.selector.bag.rows.size).to.equal(0);
			expect(result2.selector.bag.cells.size).to.equal(0);
			expect(result2.selector.bag.models.size).to.equal(0);
			expect(result2.selector.factory.columnRange.start).to.equal(2);
			expect(result2.selector.factory.columnRange.end).to.equal(3);
			expect(result2.selector.factory.rowRange.start).to.equal(0);
			expect(result2.selector.factory.rowRange.end).to.equal(3);
		});
	});
});
