export declare interface IFunc{
	f: () => void;
}

export declare class EventListener {

	constructor(context: object, element: object);

	on(name: string, f: IFunc): void;

	off(): void;
}