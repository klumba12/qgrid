import {VirtualRow} from './row';
import {Row as RowModel} from '../../row';

describe('VirtualRow', () => {
	let column = {
		model: {
			pin: 'left'
		}
	};
	let row = {};
	let box = {
		context: {
			mapper: {
				rowToView: (value) => value,
				viewToRow: (value) => value,
				columnToView: (value) => value,
				viewToColumn: (value) => value
			}
		},
		model: {
			view: () => box.model,
			data: () => box.model,
			columns: [[column, column, column],[column, column, column],[column, column, column]],
			rows: [[row, row, row], [row, row, row], [row, row, row]]
		},
		addRowClass: (value) => null,
		removeRowClass: (value) => null
	};

	let virtualRow = new VirtualRow(box, 2);
	let spyAddClass = chai.spy.on(box, 'addRowClass');
	let spyRemoveClass = chai.spy.on(box, 'removeRowClass');

	describe('should return new RowModel instance', () => {
		it('', () => {
			let model = virtualRow.model;
			expect(model instanceof RowModel).to.equal(true);
		});
	});

	describe('addClass', () => {
		it('should be called', () => {
			virtualRow.addClass('name');
			expect(spyAddClass).to.have.been.called();
		});
	});

	describe('removeClass', () => {
		it('should be called', () => {
			virtualRow.removeClass('name');
			expect(spyRemoveClass).to.have.been.called();
		});
	});
});
