import Resource from '../resource/resource';

export default class PinModel {
	constructor() {
		this.resource = new Resource();
		this.by = [];
		this.mode = 'multiple';
	}
}