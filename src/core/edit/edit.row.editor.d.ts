import {CellEditor} from './edit.cell.editor';
import {IGetResult} from '../services/value';
import {ColumnModel} from "../column-type/column.model";


declare class RowEditorCore {
	constructor();

	editors: CellEditor[];

	commit(): void;

	reset(): void
}

declare class CellView {
	constructor(public row: any, public column: ColumnModel);

	get value(): IGetResult;

	set value(value: any);

	get label(): any;

	set label(value: any);
}

declare const empty: RowEditorCore;

export declare class RowEditor extends RowEditorCore {
	constructor(public row: any, public columns: ColumnModel[]);

	value: any;

	commit(): void;

	reset(): void;

	static get empty(): RowEditorCore;
}