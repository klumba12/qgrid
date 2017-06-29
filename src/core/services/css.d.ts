export declare interface IEscapeResult{ //css.escape.js
	(value: string): string;
}

export declare const escape: IEscapeResult;

export declare function sheet(id: string): HTMLElement;

export declare function escapeClass(name: string): IEscapeResult;