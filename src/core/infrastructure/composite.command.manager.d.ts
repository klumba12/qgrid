import {CommandManager, IFunc} from "./command.manager";

export declare class CompositeCommandManager {
	constructor(public manager: CommandManager);

	keyDown(f: IFunc): void;

	canExecute(): boolean;

	execute(commands): boolean;
}