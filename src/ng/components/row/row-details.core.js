import Directive from 'ng/directives/directive';
import TemplateLink from '../template/template.link';
import { VIEW_CORE_NAME, ROW_DETAILS_CORE_NAME} from 'ng/definition';

class RowDetailsCore extends Directive(ROW_DETAILS_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateLink($compile, $templateCache);
	}

	onInit() {
		const state = this.model.rowDetails();
		
		if (state.isVisible) {
			const link = this.template.link(
				`qgrid.body.row.details.tpl.html`,
				state.resource
			);

			link(this.$element, this.$scope);
		}
	}

	get row() {
		return this.$scope.$row;
	}

	get model() {
		return this.view.model;
	}
}

RowDetailsCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$details',
	controller: RowDetailsCore,
	require: RowDetailsCore.require,
	link: RowDetailsCore.link
};