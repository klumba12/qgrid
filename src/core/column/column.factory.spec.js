import {columnFactory} from './column.factory';
import {modelFactory} from '../test/model.factory';
import {PasswordColumn} from '../column-type/password.column';
import {ColumnView as CustomColumn} from '../column-type/column.model.view';

describe('columnFactory', () => {
	let model = modelFactory();
	let body = {title: 'pass', pin: '1234'};

	it('should create a new instance of PasswordColumn', () => {
		let createColumn = columnFactory(model);

		let result = createColumn('password');
		expect(result).to.be.an.instanceOf(PasswordColumn);
	});

	it('should create a new instance of CustomColumn if there is no such type in the ColumnType list', () => {
		let createColumn = columnFactory(model);
		let result = createColumn('someColumn');
		expect(result).to.be.an.instanceOf(CustomColumn);
	});

	it('should set values to column`s model if body is specified', () => {
		let createColumn = columnFactory(model);
		let result = createColumn('password', body);
		expect(result.model.title).to.equal('pass');
		expect(result.model.pin).to.equal('1234');
	});
});
