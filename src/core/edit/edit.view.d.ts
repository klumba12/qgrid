import {View} from '../view/view';
import {EditCellView} from './edit.cell.view';
import {EditRowView} from './edit.row.view';

export declare class EditView extends View {
	constructor(public table: any, public commandManager: any);

	cell: EditCellView;
	row: EditRowView;

	onDestroy(): void;
}