({ 

    simulateServerRequest: function (cmp,event) { 

        var action=cmp.get("c.getAllObjectName");       

        var self=this; 

        action.setCallback(this,function(response){ 

            cmp.set('v.options',response.getReturnValue()); 

            cmp.find("colorId").set("v.value", "--None--"); 

        }); 

        $A.enqueueAction(action);        

    },     

    Records:function(cmp,event){ 

        cmp.set("v.Columns", [ 

            {label:"Id", fieldName:"Id", type:"Id"}, 

            {label:"Name", fieldName:"Name", type:"text"}     

        ]);         

        var SelectedObj=cmp.find('colorId').get('v.value'); 

        var action=cmp.get("c.getRecord"); 

        action.setParams({ 

            "obj": SelectedObj 

        }); 

        var self=this; 

        action.setCallback(this,function(response){ 

            cmp.set('v.Records',response.getReturnValue()); 

            //cmp.find("reco").set("v.value", "--None--"); 

        }); 

        $A.enqueueAction(action);           

    } 

}) 