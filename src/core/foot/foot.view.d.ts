import {View} from '../view/view';
import * as columnService from '../column/column.service';
import {Aggregation} from '../services';
import {Log, AppError} from '../infrastructure';
import {getFactory as valueFactory} from '../services/value';
import {Table} from "../dom/table";
import {ColumnModel} from "../column-type/column.model";

export declare class FootView extends View {
	constructor(public table: Table);

	rows: any[];
	columns: ColumnModel[];
	valueFactory: valueFactory;
	model.viewChanged.watch(() => this.invalidate(model));


	invalidate(model) {
		Log.info('view.foot', 'invalidate');

		const columns = model.view().columns;
		this.columns = columnService.lineView(columns);
		this.rows = new Array(this.count);
	}

	get count() {
		const model = this.model;
		const columns = model.data().columns;
		const resourceCount = model.foot().resource.count;

		for (let i = 0, length = columns.length; i < length; i++) {
			if (columns[i].aggregation) {
				return Math.max(resourceCount, 1);
			}
		}

		return resourceCount;
	}

	value(column) {
		if (column.aggregation) {
			const aggregation = column.aggregation;
			const	aggregationOptions = column.aggregationOptions;
			
			if (!Aggregation.hasOwnProperty(aggregation)) {
				throw new AppError(
					'foot',
					`Aggregation ${aggregation} is not registered`);
			}

			const rows = this.model.data().rows;
			const getValue = this.valueFactory(column);

			return Aggregation[aggregation](rows, getValue, aggregationOptions);
		}
		return null;
	}
}