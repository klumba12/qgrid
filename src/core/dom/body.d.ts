import {VirtualBox} from './virtual/box';
import {Box} from './box';

export declare interface IMarkup{
	['head-left']: string;
	['head']: string;
	['head-right']: string;
	['body-left']: string;
	['body']: string;
	['body-right']: string;
	['foot-left']: string;
	['foot']: string;
	['foot-right']: string;
}

function getElements(markup: IMarkup): string[];

export declare class Body extends Box {
	constructor(public markup: IMarkup);
}

export declare class VirtualBody extends VirtualBox {
	constructor(public markup: IMarkup);
}