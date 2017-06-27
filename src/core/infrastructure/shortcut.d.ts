import {Command} from './command';
import {CommandManager} from './command.manager';
import {Table} from "../dom/table";

export declare interface IOff{
	(): void;
}

export declare class Shortcut {

	constructor(public table: Table, public manager: CommandManager);

	manager: CommandManager;
	commands: Command[];
	shortcuts: Map;
	codeMap: Map;
   canExecute(): boolean;
	off(): IOff;

	translate(e: KeyboardEvent): string;

	onKeyDown(e: KeyboardEvent): void;

	register(id: number, commands: Command[]): boolean;

	find(code: string): string[];

	test(shortcut: any, code: string): boolean;

	onDestroy(): void;
}