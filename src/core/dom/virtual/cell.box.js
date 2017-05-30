export class CellBox {
	constructor(box) {
		this.box = box;
		this.entries = new Map();
	}

	addClass(cell, name) {
		const key = this.key(cell);
		const model = cell.model;
		if (model) {
			let entry = this.entries.get(key);
			if (!entry) {
				entry = {
					classList: new Set([name]),
					viewRowIndex: cell.rowIndex,
					viewColumnIndex: cell.columnIndex,
					dataRowIndex: model.rowIndex,
					dataColumnIndex: model.rowIndex
				};
				this.entries.set(key, entry);
			}

			entry.classList.add(name);
		}
	}

	removeClass(cell, name) {
		const key = this.key(cell);
		let entry = this.entries.get(key);
		if (entry) {
			entry.classList.delete(name);
			if (!entry.classList.size) {
				this.entries.delete(key);
			}
		}
	}

	invalidate() {
		const box = this.box;
		for (let entry of this.entries.values()) {
			const viewCell = box.cellCore(entry.viewRowIndex, entry.viewColumnIndex);
			const dataCell = box.cell(entry.dataRowIndex, entry.dataColumnIndex);
			for (let cls of entry.classList) {
				viewCell.removeClassCore(cls);
				dataCell.addClassCore(cls);
				entry.viewRowIndex = dataCell.rowIndex;
				entry.viewColumnIndex = dataCell.columnIndex;
			}
		}
	}

	key(model) {
		return `${model.rowIndex}x${model.columnIndex}`;
	}
}