import {Element} from './element';
import {Row as RowModel} from '../row/row';
import {IContext} from "./box";
import {ColumnModel} from "../column-type/column.model";
import {ReturnFakeElemOrNull} from "./unit";

export declare interface IBox{
	context: IContext
	rowCellsCore: IRowCellCore;
	cellCore: ICellCore;
}

export declare interface IRowCellCore{
	(index: number): any[];
}

export declare interface ICellCore{
	(index: number, columnModel: ColumnModel): any;
}

export declare class Row extends Element {
	constructor(public box: IBox, public index: number, element: HTMLElement);

	get model(): RowModel;

	cells(): any[]

	cell(columnIndex: number): ICellCore;

	getKeyElementCore(): ReturnFakeElemOrNull;
}