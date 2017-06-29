import {Command} from "./command";

export declare interface IFunc{
	(): void;
}

export declare class CommandManager {
	constructor(public apply: IFunc);

	execute(commands: Command[]): boolean;

	keyDown(f: IFunc): void;

	canExecute(): boolean;
}