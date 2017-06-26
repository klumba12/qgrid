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

export declare interface ICellFactory{
	(rowIndex: number, columnIndex: number, fakeElem: FakeElement): any;
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

	getElementsCore(): any[];

	rowCore(index: number): IRowFactory;

	cellCore(rowIndex: number, columnIndex: number): ICellFactory;

	rowsCore(element: object): any[];

	rowCellsCore(index: number): any[];

	columnCellsCore(index: number): any[];

	findColumnCore(index: number): any;

	createRowCore(index: number, element: object): Row;

	createColumnCore(index: number): Column;

	createCellCore(rowIndex: number, columnIndex: number, element: object): Cell;
}