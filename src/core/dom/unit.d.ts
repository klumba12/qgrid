import {FakeElement, IBoundingObj} from './fake/element';

declare const fakeElement: FakeElement;

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
}