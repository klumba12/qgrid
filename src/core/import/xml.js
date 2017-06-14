// const schema = require('raw-loader!@grid/core/export/schema.xml');

const KEY_DELIMETER = '-';

function flatView(xml, separator = ', ') {
	const result = {};
	if (xml.nodeType === 1 && xml.hasChildNodes()) {
		for (let child of xml.childNodes) {
			const children = xml.getElementsByTagName(child.tagName);
			if (children.length > 1) {
				const items = [];
				for (let i = 0; i < children.length; i++) {
					items.push(children.item(i).textContent);
					if (i) {
						children.item(i).remove();
					}
				}
				result[child.nodeName] = items.join(separator);
			} else if (child.nodeType === 1) {
				const flatObject = flatView(child, separator);
				for (let [flatProp, flatValue] of Object.entries(flatObject)) {
					const name = flatProp === '#text' ? child.nodeName : child.nodeName + KEY_DELIMETER + flatProp;
					result[name] = flatValue;
				}
			} else if (child.nodeType === 3) {
				result[child.nodeName] = child.textContent;
			}
		}
	} else if (xml.nodeType === 3) {
		result[xml.nodeName] = xml.textContent;
	}
	return result;
}

function parseLight(root) {
	const rows = root.getElementsByTagName('row');
	const result = [];
	for (let row of rows) {
		result.push(flatView(row));
	}
	return result;
}

export class Xml {
	read(data) {
		const parser = new DOMParser();
		const root = parser.parseFromString(data, 'text/xml').documentElement;
		// const xsd = parser.parseFromString(schema, 'text/xml').firstChild;
		// const dataXsd = root.getElementsByTagNameNS('*', 'schema').item(0);

		// if (xsd.isEqualNode(dataXsd)) {
		// 	parseLight(root);
		// }

		return parseLight(root);
	}
}