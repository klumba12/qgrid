import {ColumnModel} from '../column-type/column.model';

export declare interface IGetFactoryResult{
	(row: any): IGetFactory;
}

export declare interface IGetFactory{
	(row: any, column: ColumnModel): IGetResult;
}

export declare interface IGetResult{
	(row: any, value?: any): any;
}

export declare interface IValueFactory{
	(column: ColumnModel): any;
}

export declare function get(row: any, column: ColumnModel): IGetResult;

export declare function getFactory(column: ColumnModel): IGetFactoryResult;

export declare function set(row: object, column: ColumnModel, value: string): void;
