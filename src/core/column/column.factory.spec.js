import {columnFactory} from './column.factory';
import {modelFactory} from '../test/model.factory';
import {PasswordColumn} from '../column-type/password.column';
import {ColumnView as CustomColumn} from '../column-type/column.model.view';

describe('columnFactory', () => {
	let model = modelFactory();

	it('should create a new instance of PasswordColumn', () => {
		let foo = columnFactory(model);
		let result = foo('password');
		expect(result).to.be.an.instanceOf(PasswordColumn);
	});

	it('should create a new instance of CustomColumn if there is no such type in the ColumnType list', () => {
		let foo = columnFactory(model);
		let result = foo('someColumn');
		expect(result).to.be.an.instanceOf(CustomColumn);
	});
});
