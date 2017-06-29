import {IFunc} from "./command.manager";

export declare interface IEventShape{
	(): void;
}

export declare interface IReturn{
	(): void;
}

export declare class Event {

	constructor(e: IEventShape);

	on(f: IFunc): IReturn;

	watch(f: IFunc): void;

	emit(e: IEventShape): void;
}