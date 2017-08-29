import {Resource} from '../resource';
import {Command} from '../command';
import {GroupModel} from './group.model';

describe('Group Model', () => {
	it('testing constructor', () => {
		let groupModel = new GroupModel();
		expect(groupModel.resource).to.be.an.instanceOf(Resource);
		expect(JSON.stringify(groupModel.by)).to.equal('[]');
		expect(JSON.stringify(groupModel.shortcut)).to.equal('{"toggle":"space"}');
		expect(groupModel.toggle).to.be.an.instanceOf(Command);
	});
});
