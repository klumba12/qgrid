import {Shortcut} from '../infrastructure/shortcut';
import {CellEditor} from './edit.cell.editor';
import {getFactory as valueFactory} from '../services/value';
import {getFactory as labelFactory} from '../services/label';
import {Model} from "../infrastructure/model";
import {Table} from "../dom/table";
import {CommandManager} from "../infrastructure/command.manager";
import {ICell} from "../cell/cell";
import {INoopResult} from "../utility/utility";
import {IEditorOptions} from "../column-type/column.model";

export declare interface IContextFactory{
	column: ICell.column,
	row: ICell.row,
	columnIndex: ICell.columnIndex,
	rowIndex: ICell.rowIndex,
	oldValue: ICell.value,
	newValue: ICell.value | any,
	oldLabel: ICell.label,
	newLabel: ICell.label | any,
	unit: string,
	tag: any,
	valueFactory: valueFactory,
	labelFactory: labelFactory
}

export declare class EditCellView {
	constructor(public model: Model, public table: Table, public commandManager: CommandManager);

	editor: CellEditor;
	shortcut: Shortcut;
	commands: Map;
	shortcutOff: boolean;
	enter: string;
	commit: string;
	cancel: string;
	reset: string;

	get commands(): Map;

	contextFactory(cell: ICell, value: any, label: any, tag: any): IContextFactory;

	get fetch(): INoopResult;

	get value(): any;

	set value(value: any);

	get label(): any;

	set label(label: any);

	canEdit(cell: ICell): boolean;

	commitShortcut(): string;

	get options(): IEditorOptions;

	destroy(): void;
}