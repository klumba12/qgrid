import {FakeElement, IBoundingObj} from './fake/element';

export declare const fakeElement: FakeElement;

export declare type ReturnFakeElemOrNull = FakeElement | null;

export declare class Unit {
	constructor();

	rect(): IBoundingObj;

	addClass(name: string): void;

	removeClass(name: string): void;

	hasClass(name: string): boolean;

	width(): number;

	height(): number;

	getElement(): ReturnFakeElemOrNull;

	addClassCore(name: string): void;

	removeClassCore(name: string): void;

	hasClassCore(name: string): boolean;

	getElementCore(): any;
}