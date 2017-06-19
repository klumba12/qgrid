import {ColumnModel} from '../column-type/column.model';
import {ColumnView} from "./column.view";
import {Model} from "../infrastructure/model";

export declare type ReturnStringOrNull = string | null;
export declare type ReturnColumnModelOrNull = ColumnModel | null;

export declare class IMapResult{
	[key: string]: ColumnModel;
}

export declare function map(columns: ColumnModel[]): IMapResult;

export declare function getValue(column: ColumnModel): ReturnStringOrNull;

export declare function find(columns: ColumnModel[], key: string): ReturnColumnModelOrNull;

export declare function findIndex(columns: ColumnModel[], key: string): number;

export declare function findView(columns: ColumnModel[], key: string): ColumnModel[];

export declare function dataView(columns: ColumnModel[], model: Model): ColumnModel[];

export declare function lineView(columnRows: ColumnView[]): any[];

export declare function widthFactory(model: Model, form: object): any;