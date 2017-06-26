import {FakeClassList} from './class.list';

export declare interface IBoundingObj {
	left: number;
	right: number;
	top: number;
	bottom: number;
	width: number;
	height: number;
}

export declare class FakeElement {
	constructor();

	classList: FakeClassList;

	getBoundingClientRect(): IBoundingObj;

	get clientWidth(): number;

	get clientHeight(): number;
}