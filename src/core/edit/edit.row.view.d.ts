import {Shortcut} from '../infrastructure/shortcut';
import {RowEditor} from './edit.row.editor';
import {Model} from "../infrastructure/model";
import {Table} from "../dom/table";
import {CommandManager} from "../infrastructure/command.manager";

export declare interface IContextFactory{
	row: any,
	current: any,
	unit: string
}

export class EditRowView {
	constructor(public model: Model, public table: Table, public commandManager: CommandManager);

	editor: RowEditor;
	shortcut: Shortcut;
	commands: Map;
	shortcutOff: boolean;
   enter: string;
	commit: string;
	cancel: string;
	reset: string;

	get commands() : Map;

	contextFactory(row: any): IContextFactory;

	commitShortcut(): string;

	destroy(): void;
}
