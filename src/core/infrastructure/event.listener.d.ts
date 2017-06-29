export declare interface IFunc{
	(): void;
}

export declare interface IOnResult{
	(): void;
}

export declare class EventListener {

	constructor(context: object, element: HTMLElement);

	on(name: string, f: IFunc): IOnResult;

	off(): void;
}