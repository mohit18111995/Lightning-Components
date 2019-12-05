({ 

    getObjects:function(component,event){       

        var action=component.get("c.getAllObjectName");        

        var self=this;  

        action.setCallback(this,function(response){  

            component.set('v.options',response.getReturnValue());  

            component.find("colorId").set("v.value", "--None--");  

        });  

        $A.enqueueAction(action); 

    }, 

    getRecordTypes : function(component,event,helper){ 

        var action = component.get("c.GetAvailableRecordTypeAccount"); 

        action.setParams({ 

            "sobj": component.find('colorId').get('v.value') 

        }); 

         action.setCallback(this,function(response){  

            component.set('v.RecordTypeAvailable',response.getReturnValue());  

               });          

        $A.enqueueAction(action);  

    } 

}) 