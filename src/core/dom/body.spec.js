import {Body} from './body';
import {VirtualBody} from './body';

let column = {
	model: {
		pin: 'left'
	}
};

let model = {
	view: () => model,
	columns: [[column, column, column]]
};

let context = {};
let markup = {};
let body = new Body(context, model, markup);

describe('Body', () => {

	describe('columnCount', () => {
		it('should count columns', () => {
			expect(body.columnCount()).to.equal(3);
		});
	});
});

describe('VirtualBody', () => {

	describe('columnCount', () => {
		it('should count columns', () => {
			expect(body.columnCount()).to.equal(3);
		});
	});
});
