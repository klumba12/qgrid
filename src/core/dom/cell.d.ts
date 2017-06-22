import {Element} from './element';
import {Cell as CellModel} from '../cell/cell';

export declare class IContext{
	model: (elem: Element) => any;
}

export declare class Cell extends Element {
	constructor(public context: IContext, public rowIndex: number, public columnIndex: number);

	get model(): CellModel;
}