Ext.define('MyExt.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
items: [{
		xtype: 'panel',
		viewModel: {
			type: 'test'
		},
		fullscreen: true,
		// layout: 'hbox',
		defaultType: 'textfield',
		defaults: {
			flex: 1
		},
		items: [{
			html: 'User Form',
			style: 'background-color: white'
		},
		{
			fieldLabel: 'First Name',
			name: 'firstName',
			bind: '{firstName}'
		},
		{
			fieldLabel: 'Last Name',
			name: 'lastName'
		},
		{
			xtype: 'datefield',
			fieldLabel: 'Date of Birth',
			name: 'birthDate',
			msgTarget: 'under', // location of the error message
			invalidText: '"{0}" bad. "{1}" good.' // custom error message text
		},
		{
			xtype: 'button',
			text: 'Save',
			handler: function () {
				//DELETE
				// Ext.Ajax.request({
				// 	url: 'http://localhost:3000/posts/3',
				// 	method: 'DELETE',
				// 	success: function (response) {
				// 		Ext.Msg.alert(response);
				// 	},
				// 	failure: function (response) {
				// 		Ext.Msg.alert(response);
				// 	}
				// });
				Ext.Ajax.request({
					url: 'http://localhost:3000/posts',
					method: 'POST',
					jsonData: {
						name: 'Pariwesh'
					},
					success: function (response) {
						Ext.Msg.alert(response);
					},
					failure: function (response) {
						Ext.Msg.alert(response);
					}
				});

				// Ext.Ajax.request({
				// 	url: 'http://localhost:3000/posts',
				// 	success: function (response){
				// 		const responseBody = Ext.decode(response.responseText)
				// 		console.log(responseBody);
				// 	}
				// })
			}
		}
		]
	}]
});
