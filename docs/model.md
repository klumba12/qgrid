# qgrid model
## markup
```html
<q-grid model="gridModel"
		  rows="rows"
		  columns="columns"
		  selection="selection"
		  on:selectionChanged="selectionChanged">
  <q-grid:head sticky="false"></q-grid:head>
</q-grid>
```
## user script
```javascript
controller.$inject = ['qgrid'];
function controller(qgrid){
	var gridModel = qgrid.model();
	$scope.gridModel = gridModel;
	$scope.selection = [];
	$scope.rows = [];
	$scope.columns = [];
	$scope.selectionChanged = function(e) {
	};

	gridModel
		.data({
			rows: [], // ?? another way?
			columns: [] // ?? should be there?
		})
		.header({sticky: false})
		.vscroll({threshold: 40})
		.hscroll({threshold: 30})
		.selection({
			mode: 'row',
			selection: $scope.selection // ??
			selectionChanged: $scope.selectionChanged
		});
		// etc.
}
```
## component script
```javascript
import GridModel from './grid.model';

export default {
	templateUrl: 'qgrid.html',
	controller: Controller,
	bindings: {
		model: '<',
		rows: '<',
		columns: '<',

	}
};

Controller.$inject = [];
function Controller() {
	if(!this.model) {
		this.model = new GridModel();
	}

	this.model
		.data({
			rows: this.rows,
			columns: this.columns || this.generateColumns()
		})
		.selection(this.selection)
		.vscroll(this.vscroll)
		.hscroll(this.hscroll);

	// [http://stackoverflow.com/questions/35534479/angularjs-1-5-component-does-not-support-watchers-what-is-the-work-around]

}
```