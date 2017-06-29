import {Cell} from "../cell/cell";
import {ColumnModel} from "../column-type/column.model";
import {Model} from "../infrastructure/model";

export declare interface ICellObj{
	column: ColumnModel;
	row: any;
}

export declare interface IBuildRows{
	(startCell: Cell, endCell: Cell): any[];
}

export declare interface IBuildColumns{
	(startCell: Cell, endCell: Cell): ColumnModel[];
}

export declare interface IBuildCells{
	(startCell: Cell, endCell: Cell): ICellObj;
}

export declare interface IBuildMix{
	(startCell: Cell, endCell: Cell): any[];
}

export declare interface IRangeMapObj {
	'row': IBuildRows;
	'column': IBuildColumns;
	'cell': IBuildCells;
	'mix': IBuildMix;
}

export declare interface IBuildResult<K>{
	(args: K): IRangeMapObj[K];
}

export declare class SelectionRange {
	constructor(public model: Model);

	build(): IBuildResult;

	buildRows(startCell: Cell, endCell: Cell): any[];

	buildColumns(startCell: Cell, endCell: Cell): ColumnModel[];

	buildCells(startCell: Cell, endCell: Cell): ICellObj;

	buildMix(startCell: Cell, endCell: Cell): any[];
}