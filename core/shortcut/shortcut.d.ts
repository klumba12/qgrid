import {CommandManager} from '../command/command.manager';
import {ShortcutDispatcher} from './shortcut.dispatcher';

export interface IKeyCode {
	code: string;
	key: string;
}

export declare class Shortcut {
	constructor(manager: ShortcutDispatcher);

	static isControl(keyCode: IKeyCode): boolean;

	static isPrintable(keyCode: IKeyCode): boolean;

	static stringify(keyCode: IKeyCode): string;

	static translate(e: any): string;

	factory(commandManager: CommandManager): object;

	keyDown(e: any, source?: string): boolean;

	register(commandManager: CommandManager, commands: any[]);
}
