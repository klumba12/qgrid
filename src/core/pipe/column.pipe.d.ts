import {Model} from "../infrastructure/model";

export declare interface IPivot{
	heads: any[];
	rows: any[];
}

export declare interface IMemo{
	rows: any[];
	pivot: IPivot;
	nodes: any[];
}

export declare interface IContext{
	model: Model;
}

export declare interface INext{
	(param: IMemo): void;
}

export declare function columnPipe(memo: IMemo, context: IContext, next: INext): void;
