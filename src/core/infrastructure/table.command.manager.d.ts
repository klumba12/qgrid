import {CommandManager, IFunc} from './command.manager';
import {Table} from "../dom/table";

export declare class TableCommandManager extends CommandManager {
	constructor(apply: IFunc, public table: Table);

	keyDown(f: IFunc): void;
	
	canExecute(): boolean;
}