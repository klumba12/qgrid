import {VirtualCell} from './cell';
import {Cell} from '../../cell';

describe('VirtualCell', () => {
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
		}
	};
	let virtualCell = new VirtualCell(box, 2, 2);

	describe('get model', () => {
		it('should return new Cell instance', () => {
			let model = virtualCell.model;
			expect(model instanceof Cell).to.equal(true);
		});
	});

});
