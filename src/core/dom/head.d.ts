import {Box, IContext} from './box';
import {IMarkup} from "./body";

export declare class Head extends Box {
	constructor(public markup: IMarkup);

	getElementsCore(): string[];
}