import {View} from '../view/view';
import {EditCellView} from './edit.cell.view';
import {EditRowView} from './edit.row.view';
import {Table} from "../dom/table";
import {CommandManager} from "../infrastructure/command.manager";

export class EditView extends View {
	constructor(public table: Table, public commandManager: CommandManager);

	cell: EditCellView;
	row: EditRowView;

	onDestroy(): void;
}