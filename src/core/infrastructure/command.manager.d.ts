import {Command} from "./command";

export declare interface IFunc{
	(f: any): void;
}

export declare class CommandManager {
	constructor(public apply: IFunc);

	execute(commands: Command[]): boolean;
}