export declare interface ISettings{
	factory: () => object;
	selector: (param: any) => any;
	name: string;
	value: any;
}

export  declare interface IPivotResult{
	(settings: ISettings , plan: Plan): object;
}

declare class Plan {
	constructor(schema: object);

	isRoot: boolean;
	current: any;

	branch(): Plan;

	cursor(name: string): void;

	compile(data: object): object;
}

declare function factory(plan: Plan): IPivotResult;

export declare function pivot(settings: ISettings , plan: Plan): object;