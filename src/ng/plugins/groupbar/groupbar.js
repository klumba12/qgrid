import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command'
import {TH_CORE_NAME} from 'ng/definition';
import {GROUPBAR_NAME} from '../definition';
import TemplatePath from 'core/template/template.path';

TemplatePath
	.register(GROUPBAR_NAME, () => {
		return {
			model: 'group',
			resource: 'content'
		};
	});

class Groupbar extends PluginComponent('groupbar') {
	constructor() {
		super(...arguments);

		this.newGroup = null;
		this.add = new Command({
				execute: key => {
					const group = this.model.group;
					const state = group();
					group({
						by: state.by.concat(key)
					});

					this.newGroup = null;
				},
				canExecute: () => this.columns.length > 0
			}
		);

		this.remove = new Command({
			execute: key => {
				const group = this.model.group;
				const state = group();
				const index = state.by.findIndex(g => g === key);
				if (index >= 0) {
					const temp = Array.from(state.by);
					temp.splice(index, 1);
					group({
						by: temp
					});
				}
			}
		});

		this.drop = new Command({
			canExecute: e => e.source && e.source.key === TH_CORE_NAME && this.add.canExecute(e.source.value),
			execute: e => this.add.execute(e.source.value)
		});
	}

	get resource() {
		return this.model.group().resource;
	}

	get columns() {
		return this.model.data().columns;
	}

	get groups() {
		return this.model.group().by;
	}

	title(key) {
		const columns = this.columns;
		const index = columns.findIndex(c => c.key === key);
		return index >= 0 ? columns[index].title : '';
	}
}

export default Groupbar.component({
	controller: Groupbar,
	controllerAs: '$groupbar'
});