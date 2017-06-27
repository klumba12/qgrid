import {Unit} from './unit';
import {IBoundingObj} from "./fake/element";
import {IContext} from "../infrastructure/command";
import {IContext} from "./box";


export declare interface IMarkup{
	document: HTMLElement;
	view: HTMLElement;
	head: HTMLElement;
	body: HTMLElement;
	table: HTMLElement;
	foot: HTMLElement;
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

	scrollLeft(value: number): number;

	scrollTop(value: number): number;

	canScrollTo(element: Element, direction: string): boolean;

	rect(): IBoundingObj;

	getElementCore(): object;

	isFocusedCore(target: HTMLElement): boolean;

	getElementsCore(key: string): any[];
}