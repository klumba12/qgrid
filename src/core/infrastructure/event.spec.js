import { Event } from './event';

describe('Event', () => {
	let event;
	let count;

	beforeEach(() => {
		event = new Event();
		count = 0;
	});

	let foo = function (value, func) {
		func();
		++count;
	};

	describe('on/emit', () => {

		it('should return 1 in both cases', () => {
			event.on(foo);
			event.emit();
			expect(count).to.equal(1);
			event.emit();
			expect(count).to.equal(1);
		});

	});

	describe('watch', () => {

		it('should return 0 if handler was removed', () => {
			let result = event.watch(foo);
			result();
			event.emit();
			expect(count).to.equal(0);
		});

	});

});