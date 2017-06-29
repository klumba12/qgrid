import {Cell} from "../cell/cell";
import {ColumnModel} from "../column-type/column.model";

export declare class NavigationModel {
	constructor();

	cell: Cell;

	get rowIndex(): number;

	get columnIndex(): number;

	get row(): any;

	get column(): ColumnModel;
}