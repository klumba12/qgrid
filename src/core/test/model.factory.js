import {Model} from '../infrastructure/model';
import {setup} from '../index';

let isClose = true;
export function modelFactory() {
	if (isClose) {
		setup(Model);
		isClose = false;
	}

	return new Model();
}