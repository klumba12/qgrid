import { AppError } from '@grid/core/infrastructure';
import { VIEW_CORE_NAME } from '../definition';
import { Layer } from './layer';
import { FakeLayer } from '@grid/core/dom/fake/layer';
import { GRID_PREFIX } from '@grid/core/definition';
import * as css from '@grid/core/services/css';

export class LayerFactory {
	constructor(markup, template, model) {
		this.markup = markup;
		this.template = template;
		this.model = model;
	}

	create(name) {
		const resource = this.model.layer().resource;
		if (!resource.data.hasOwnProperty(name)) {
			return new FakeLayer();
		}

		const markup = this.markup;
		const node = markup.document.createElement('div');
		node.classList.add(css.escapeAttr(name));
		node.classList.add(`${GRID_PREFIX}-layer`);
		markup.view.appendChild(node);

		const ctrl = angular.element(markup.view).controller(VIEW_CORE_NAME);
		if (!ctrl) {
			throw new AppError('layer.factory', 'Controller for box is not found');
		}

		if (!ctrl.$scope) {
			throw new AppError('layer.factory', 'Controller scope for box is not found');
		}

		return new Layer(
			ctrl.$scope,
			node,
			this.template,
			name,
			resource
		);
	}
}
