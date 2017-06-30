import {FakeClassList} from './class.list';

export declare interface IRect{
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

	getBoundingClientRect(): IRect;

	get clientWidth(): number;

	get clientHeight(): number;
}