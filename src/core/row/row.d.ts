import {AppError} from '../infrastructure';

export declare class Row {
	constructor(row: any);

	entry: any;
	index: number;

	get model() {
		if (!Row.equals(this, this.entry)) {
			throw new AppError('row', 'Internal model doesn\'t match container');
		}

		return this.entry.model;
	}

	static equals(x: any, y: any): boolean;
}