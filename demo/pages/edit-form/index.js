import angular from 'angular';

Controller.$inject = ['$http', 'qgrid'];

export default function Controller($http, qgrid) {
	const ctrl = this;
	const isUndef = angular.isUndefined;
	ctrl.gridModel = qgrid.model();

	const columns = [
		{
			key: 'itemSettings',
			type: 'item-settings',
			canEdit: false
		},
		{
			key: 'name.last',
			title: 'Last Name',
			value: function (item, value) {
				if (arguments.length == 2) {
					item.name.last = value;
					return;
				}
				return item.name.last;
			}
		},
		{
			key: 'name.first',
			title: 'First Name',
			value: function (item, value) {
				if (arguments.length == 2) {
					item.name.first = value;
					return;
				}
				return item.name.first;
			}
		},
		{
			key: 'gender',
			title: 'Gender'
		},
		{
			key: 'birthday',
			title: 'Birthday',
			type: 'date'
		},
		{
			key: 'contact.address.zip',
			title: 'Zip',
			type: 'id',
			value: item => item.contact.address.zip
		},
		{
			key: 'contact.address.state',
			title: 'State',
			value: item => item.contact.address.state
		},
		{
			key: 'contact.address.city',
			title: 'City',
			value: item => item.contact.address.city
		},
		{
			key: 'contact.phone.primary',
			title: 'Primary Phone',
			value: item => item.contact.phone[0]
		},
		{
			key: 'contact.email.primary',
			title: 'Primary Email',
			value: item => item.contact.email[0]
		},
		{
			key: 'teammates',
			title: 'Teammates',
			type: 'reference',
			value: (item, value) => isUndef(value) ? item.teammates || [] : item.teammates = value,
			label: (item) => (item.teammates || [])
				.map(teammate => `${ctrl.gridModel.data().rows[teammate].name.last} ${ctrl.gridModel.data()[teammate].name.first}`)
				.join(', '),
			editorOptions: {
				modelFactory: () => {
					const model = qgrid.model();
					model
						.selection({
							mode: 'multiple',
							unit: 'row',
							key: {row: row => ctrl.gridModel.data().findIndex(r => r.name.last === row.name.last)}
						})
						// .scroll({
						// 	mode: 'virtual'
						// })
						.columnList({
							generation: 'deep'
						})
						.data({
							pipe: [(data, context, next) => {
								$http.get('data/people/10.json')
									.then(function (response) {
										return next(response.data);
									});
							}]
								.concat(qgrid.pipeUnit.default)
						});
					return model;
				}
			}
		},
		{
			key: 'likes',
			title: 'Likes',
			value: item => item.likes.join(', ')
		},
		{
			key: 'memberSince',
			title: 'Member Since',
			type: 'date'
		}
	];

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.gridModel.data({
				rows: response.data,
				columns: columns
			});
		});
}