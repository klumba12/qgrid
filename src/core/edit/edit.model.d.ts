import {Resource} from '../resource/resource';
import {Command} from '../infrastructure/command';
import {Cell} from "../cell/cell";
import {Row} from "../row/row";

export declare interface ICommitShortcuts {
	'$default': string,
	'date': string,
	'array': string,
	'reference': string,
	'email': string,
	'file': string,
	'image': string
}

export declare class EditModel {
	constructor();

	resource: Resource;
	mode: string;// cell | row
	state: string; // view | edit
	enter: Command;
	commit: Command;
	cancel: Command;
	reset: Command;
	commitShortcuts: ICommitShortcuts;
}