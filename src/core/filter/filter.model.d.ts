import {Resource} from '../resource/resource';
import {match} from './match';
import {noop} from '../utility';
import {INoopResult} from "../utility/utility";

export class FilterModel {
	constructor();

	resource: Resource;
	by: object;
	match: match;
	fetch: INoopResult;
}