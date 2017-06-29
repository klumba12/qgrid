export declare interface IMapResult{
	(pairs: object[]): object;
}

export declare interface IIndexResult{
	(pairs: object[], pairKey: string): number;
}

export declare interface IValueResult{
	(pair: object): string;
}

export declare interface IKeyResult{
	(pair: object): string;
}

export declare const key: IKeyResult;
export declare const index: IIndexResult;
export declare const direction: IValueResult;
export declare const map: IMapResult;