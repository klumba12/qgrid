# qgrid 
## markup
```html
<q-grid rows='data'></q-grid>
```
## script
```javascript
//export API:

var export = function (settings) {
	var settings = _.defaults({
		autoDownload: false,
		format: 'xlsx',
		removeTags: false, //removing html tags (for tables with rich text editors)
		type: 'straight' //straight or 'cluster'
		//...?
	}, settings);
	
	if (!settings.hasOwnProperty('data'))
		throw 'Need to pass property "data"';
	if (!settings.hasOwnProperty('columns'))
		throw 'Need to pass property "columns"';
	
	var toCsv = function (data, columns) {
		//...
		
		return {
			link: "...",
			element: {/*...*/},
			download: function () { element.click(); },
			destroy: function () { /*destroy link and element*/ }
		}
	};
	
	var toXlsStaight = function (data, columns) {
		//same result as for toCsv function
	};
	
	//We use *Cluster methods for creating multi page files. Each page represent data for selected group
	//E.g.: we can show data for single Country/Month/Year/.. per one excel page
	var toXlsCluster = function (data, columns, groupField) {
		//same result as for toCsv function
	};
	
	var toXlsxStaight = function (data, columns) {
		//same result as for toXlsStaight function
	};
	
	var toXlsxCluster = function (data, columns, groupField) {
		//same result as for toXlsCluster function
	};
	
	var result = null;
	switch(settings.format)
	case 'csv':
		result = toCsv(settings.data, settings.columns);
	break;
	case 'xls':
		if (settings.type == 'straight') 
			result = toXlsStaight(settings.data, settings.columns);
		if (settings.type == 'cluster') 
			result = toXlsCluster(settings.data, settings.columns, settings.type);
	break;
	case 'xlsx':
		if (settings.type == 'straight') 
			result = toXlsxStaight(settings.data, settings.columns);
		if (settings.type == 'cluster') 
			result = toXlsxCluster(settings.data, settings.columns, settings.type);
	break;
	default:
	throw 'Property "format" can be only "csv", "xls" or "xlsx"';
	
	if (settings.autoDownload)
		result.download();
	
	return result; //feature: make this whole method async
}
```
