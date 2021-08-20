Ext.onReady(function(){
    Ext.create('Ext.form.Panel',{
        title : 'Login',
        renderTo:Ext.getBody(),
        floating : true,
        items:[
            {
                xtype:'textfield',
                fieldLabel : 'Username'
            },{
                xtype:'textfield',
                fieldLabel : 'Password',
               inputType : 'password',
               margin : '10 10 10 10'
    
            },
            {
                xtype:'button',
                text : 'Login'
            }
        ]
    })
    });