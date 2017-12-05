import {UnitFactory} from './unit.factory';
import {Selector} from './selector'

export declare interface ICell {
	element: object;
	rowIndex: number;
	columnIndex: number;
}

export declare interface IRow {
	element: object;
	index: number;
}

export declare class SelectorMediator {
	constructor(factory: UnitFactory);
	factory: UnitFactory;
	columnCount(rowIndex: number): number;
	columnCells(columnIndex: number): ICell[];
	rowCount(columnIndex: number): number;
	rows(columnIndex: number): IRow[];
	rowCells(rowIndex: number): ICell[];
	row(rowIndex: number): IRow[];
	cell(rowIndex: number, columnIndex: number): ICell[];
}
