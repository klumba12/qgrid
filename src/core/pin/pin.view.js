import View from 'core/view/view';
import * as pinService from 'core/pin/pin.service';
import Command from 'core/infrastructure/command';
import * as columnService from 'core/column/column.service';

export default class PinView extends View {
	constructor(model) {
		super(model);

		this.toggle = new Command({
			canExecute: key => {
				const map = columnService.map(model.data().columns);
				return map.hasOwnProperty(key);
			},
			execute: key => {
				console.log(columnService.map(model.data().columns));
				console.log('here should be pin for column with key', key);
			}
		});
	}

	state(key) {
		const state = this.model.pin();
		const by = state.by;
		return pinService.index(by, key);
	}

	direction(key) {
		const state = this.model.pin();
		const by = state.by;
		return pinService.map(by)[key];
	}
}