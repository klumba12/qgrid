import {Bag} from '../bag';
import {SelectorMark} from './selector.mark';
import {SelectorMediator} from './selector.mediate';

export declare class SelectorFactory {
	constructor(bag: Bag, selectorMark: SelectorMark);
	bag: Bag;
	selectorMark: SelectorMark;
	create(): SelectorMediator;
}