import {Node} from './node';
import {IMapResult} from "../column/column.service";
import {IValueFactory} from "../services/value";

export declare function nodeBuilder(columnMap: IMapResult, groupBy, valueFactory: IValueFactory, level: number): Node[];