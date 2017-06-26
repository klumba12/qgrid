import {Model} from "../infrastructure/model";
import {Table} from "../dom/table";
import {ColumnModel} from "../column-type/column.model";
import {Cell} from "../cell/cell";

export declare interface IPositionResult{
	row: number;
	offset: number;
}

export declare type ReturnColumnOrNumber = ColumnModel | number;

export declare class Navigation {
	constructor(public model: Model, public table: Table);

	positon(y: number, direction: string): IPositionResult;

	goTo(row: any, column: ColumnModel, source: string): void;

	get columns(): ColumnModel[];

	get rows(): any[];

	get currentColumn(): ReturnColumnOrNumber;

	get nextColumn(): ReturnColumnOrNumber;

	get prevColumn(): ReturnColumnOrNumber;

	get lastColumn(): ReturnColumnOrNumber;

	get firstColumn(): ReturnColumnOrNumber;

	get currentRow(): any;

	get nextRow(): any;

	get prevRow(): any;

	get firstRow(): any;

	get lastRow(): any;

	cell(row: any, column: ColumnModel): Cell;

	get commands(): Map;
}