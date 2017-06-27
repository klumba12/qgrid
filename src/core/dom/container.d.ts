import {IBoundingObj} from "./fake/element";

export declare interface IClassListResult{
	add: (name: string) => void;
	remove: (name: string) => void;
	contains: (name: string) => boolean;
}

export declare class Container {
	constructor(public elements: Element[]);

	getBoundingClientRect(): IBoundingObj;

	addClass(name: string): void;

	removeClass(name: string): void;

	hasClass(name: string): boolean;

	get clientWidth(): number;

	get clientHeight(): number;

	get classList(): IClassListResult;
}