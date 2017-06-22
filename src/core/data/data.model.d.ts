import {PipeUnit} from '../pipe/units/pipe.unit';
import {ColumnModel} from "../column-type/column.model";

export declare interface ITrigger{
	data: string[],
	pagination: string[],
	sort: string[],
	filter: string[];
	group: string[],
	pivot: string[]
}

export declare class DataModel {
	constructor();

	rows: any[];
	columns: ColumnModel[];
	pipe: PipeUnit;
	triggers: ITrigger;
}