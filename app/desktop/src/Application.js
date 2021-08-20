Ext.define('MyExt.Application', {
	extend: 'Ext.app.Application',
	name: 'MyExt',
	requires: ['MyExt.*'],
	defaultToken: 'homeview',

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()
		var whichView = 'mainview'
		Ext.Viewport.add([{xtype: whichView}])
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}

});
// Ext.onReady(function(){
//     Ext.create('Ext.form.Panel',{
//         title : 'Login',
//         renderTo:Ext.getBody(),
//         floating : true,
//         items:[
//             {
//                 xtype:'textfield',
//             label : 'Username',
// 				name: 'username',
// 				id:'userid'
// 				//bind: '{username}'
//             },{
//                 xtype:'textfield',
//                label : 'Password',
//                inputType : 'password',
// 			   name: 'password',
// 			   id:'passid',
//                margin : '10 10 10 10',
// 			 //  bind: '{username}'
    
//             },
//             {
// 				xtype: 'button',
// 				text: 'Login',
// 				handler: function () {
// 				//console.log(username);
// 					var uname=Ext.getCmp('userid').getValue();
// 					var pass=Ext.getCmp('passid').getValue();
					
// 					Ext.Ajax.request({
// 						url: 'http://localhost:3000/posts',
// 						method: 'POST',
// 						jsonData: {
// 							name:  uname,
// 							password :pass
							
// 						},
// 						success: function (response) {
// 							Ext.Msg.alert(response);
// 							console.log(posts);
// 						},
// 						failure: function (response) {
// 							Ext.Msg.alert(response);
// 						},
						
							
						
// 					});
// 				}
//             }
//         ]
//     })
//     });