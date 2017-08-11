import { Event } from './event';

describe('Event', () => {
	let event;

	beforeEach(() => {
		event = new Event();
		window.testValue = 0;
	});

	let foo = function (value, func) {
		func();
		++window.testValue;
	};

	describe('on/emit', () => {

		it('should return 1 in both cases', () => {
			event.on(foo);
			event.emit();
			expect(window.testValue).to.equal(1);
			event.emit();
			expect(window.testValue).to.equal(1);
		});

	});

	describe('watch', () => {

		it('should return 0 if handler was removed', () => {
			let result = event.watch(foo);
			result();
			event.emit();
			expect(window.testValue).to.equal(0);
		});

	});

});