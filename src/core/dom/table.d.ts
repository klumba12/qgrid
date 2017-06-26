import {IMarkup, View} from './view';
import {Data} from './data';
import {Head} from './head';
import {Body} from './body';
import {Foot} from './foot';
import {IContext} from "./box";
import {Model} from "../infrastructure/model";

export declare class Table {
	constructor(public model: Model, public markup: IMarkup, public context: IContext);

	get head(): Head;

	get body(): Body;

	get foot(): Foot;

	get view(): View;

	get data(): Data;

}