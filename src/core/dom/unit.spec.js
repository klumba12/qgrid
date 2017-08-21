import {Unit} from './unit';
import {FakeElement} from './fake';

describe('Unit', () => {
	let unit = new Unit();
	let testRect = {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		width: 0,
		height: 0
	};

	describe('getElement', () => {
		let elem = unit.getElement();
		it('should return FakeElement', () => {
			expect(elem instanceof FakeElement).to.equal(true);
		});
	});
	describe('rect', () => {
		let rect = unit.rect();
		it('should return rect', () => {
			expect(JSON.stringify(rect)).to.equal(JSON.stringify(testRect));
		});
	});
	describe('height', () => {
		it('should return height = 0', () => {
			expect(unit.height()).to.equal(0);
		});
	});
	describe('width', () => {
		it('should return width = 0', () => {
			expect(unit.width()).to.equal(0);
		});
	});
});
