import {Resource} from '../resource/resource';

export declare interface IToolbarObj {
	top: boolean;
	bottom: boolean;
	right: boolean;
	left: boolean;
}

export declare interface IPinObj {
	left: boolean;
	right: boolean;
}

export declare class VisibilityModel {
	constructor();

	resource: Resource;
	head: boolean;
	foot: boolean;
	body: boolean;
	toolbar: IToolbarObj;
	pin: IPinObj;
	plugin: object;
}