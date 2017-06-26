import {Unit} from './unit';
import {IBoundingObj} from "./fake/element";


export declare interface IMarkup{
	document: object;
	view: object;
	head: object;
	body: object;
	table: object;
	foot: object;
}

export declare interface IContext{
	layer(name: string): any;
}

export declare interface IFunc{
	(): void;
}

export declare class View extends Unit {
	constructor(public markup: IMarkup, public context: IContext);

	layers: Map;

	focus(): boolean;

	blur(): void;

	isFocused(): boolean;

	keyDown(f: IFunc ): void;

	addLayer(name: string): any;

	removeLayer(name: string): boolean;

	scrollLeft(value?: any): number;

	scrollTop(value?: any): number;

	canScrollTo(element: Element, direction: string): boolean;

	rect(): IBoundingObj;

	getElementCore(): object;

	isFocusedCore(target: HTMLElement): boolean;

	getElementsCore(key: string): any[];
}