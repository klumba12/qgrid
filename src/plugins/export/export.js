import PluginComponent from '../plugin.component';
import {EXPORT_NAME} from '../definition';
import {GRID_NAME} from '@grid/view/definition';
import {Command} from '@grid/core/infrastructure';
import {TemplatePath} from '@grid/core/template';
import {Csv} from '@grid/core/export/csv';
import {Json} from '@grid/core/export/json';
import {Xml} from '@grid/core/export/xml';
import {Xlsx} from '@grid/core/export/xlsx';
import {Pdf} from '@grid/core/export/pdf';
import {download} from '@grid/core/services/download';

TemplatePath
	.register(EXPORT_NAME, () => {
		return {
			model: 'export',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('export');
class Export extends Plugin {
	constructor() {
		super(...arguments);
		this.csv = new Command({
			canExecute: () => this.type === 'csv',
			execute: () => {
				const csv = new Csv();
				const data = csv.write(this.rows, this.columns);
				download(this.id, data, `text/${this.type}`);
			}
		});
		this.json = new Command({
			canExecute: () => this.type === 'json',
			execute: () => {
				const json = new Json();
				const data = json.write(this.rows, this.columns);
				download(this.id, data, `text/${this.type}`);
			}
		});
		this.xml = new Command({
			canExecute: () => this.type === 'xml',
			execute: () => {
				const xml = new Xml();
				const data = xml.write(this.rows, this.columns);
				download(this.id, data, `application/${this.type}`);
			}
		});
		this.xlsx = new Command({
			canExecute: () => this.type === 'xlsx',
			execute: () => {
				const xlsx = new Xlsx();
				const data = xlsx.write(this.rows, this.columns);
				download(this.id, data, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'xlsx');
			}
		});
		this.pdf = new Command({
			canExecute: () => this.type === 'pdf',
			execute: () => {
				const pdf = new Pdf();
				pdf.write(this.rows, this.columns, this.id);
			}
		});
	}

	get id() {
		return this.model.grid().id;
	}

	get rows() {
		return this.model.data().rows;
	}

	get columns() {
		return this.model.data().columns;
	}
}

export default Export.component({
	controller: Export,
	require: {
		root: `^^${GRID_NAME}`,
	},
	controllerAs: '$export',
	bindings: {
		'type': '@'
	}
});