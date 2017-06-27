import {View} from '../view/view';
import {Model} from "../infrastructure/model";

export declare class PaginationView extends View {
	constructor(model: Model);

	get current(): number;

	get size(): number;
}