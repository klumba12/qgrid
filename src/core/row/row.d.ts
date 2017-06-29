import {Model} from "../infrastructure/model";

export declare class Row {
	constructor(public row: any);

	index: number;

	get model(): Model;

	static equals(x: any, y: any): boolean;
}