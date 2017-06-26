import {Resource} from '../resource/resource';

export declare class RowModel {
	constructor();

	resource: Resource;
	mode: string; //single|multiple
	unit: string; //data|details
	height: number;
	status: Map;
}