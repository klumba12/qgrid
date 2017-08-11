import { Event } from './event';

describe('Event', () => {

	let event;
	let foo = chai.spy(() => {});

	beforeEach(() => {
		event = new Event();
	});

	describe('on/emit', () => {

		it('should be called', () => {
			event.on(foo);
			event.emit();

			expect(foo).to.have.been.called();
		});

	});

	describe('watch', () => {

		it('should not be called if handler was removed', () => {
			let result = event.watch(foo);
			result();
			event.emit();

			expect(foo).to.not.have.been.called.exactly(0);
		});

	});

});
