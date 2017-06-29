import {Row} from './row';
import {Column} from './column';
import {Cell} from './cell';
import {FakeElement} from './fake/element';
import {ColumnModel} from "../column-type/column.model";
import {Model} from "../infrastructure/model";

export declare interface IIsDataRow{
	(row: any): boolean;
}

export declare interface IContext{
	mapper: IMapper;
	layer: any;
	model: (elem: Element) => any;
	isDataRow: IIsDataRow;
}

export declare interface IMapper{
	row: any;
	column: IColumn;
	rowBack: any;
	columnBack: any;
}

export declare interface IColumn{
	(columnIndex: number): ColumnModel;
}

export declare interface IRowCore {
	(index: number): IRowFactory;
}

export declare interface IRowFactory{
	(index: number, fakeElem: FakeElement): any;
}

export declare interface IColumnFactory{
	(index: number): ColumnModel;
}

export declare interface ICellCore{
	(rowIndex: number, columnIndex: number): any;
}

export declare class Box {
	constructor(public context: IContext , public model: Model);

	cell(rowIndex: number, columnIndex: number): ICellCore;

	column(index: number): IColumnFactory;

	row(index: number): IRowCore;

	rows(): any[];

	rowCount(): number;

	columnCount(): number;

	getElements(): any[];

}