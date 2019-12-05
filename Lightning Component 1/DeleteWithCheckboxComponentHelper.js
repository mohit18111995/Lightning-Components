({ 

    onLoad : function(component,event){ 

         var action =component.get("c.AccountResult"); 

        var self=this; 

        action.setCallback(this,function(response){ 

            component.set('v.AccountList',response.getReturnValue()); 

            component.find("cbox").set("v.value", false); 

        }); 

        $A.enqueueAction(action); 

    }, 

    DeleteRecordById : function(component,event,delById) { 

         console.log(delById+"  sdf"); 

        var action=component.get('c.deleteRecord'); 

        action.setParams({ 

            "DelID": delById 

        }); 

        action.setCallback(this,function(response){ 

            var state=response.getState(); 

            if(state==="SUCCESS"){ 

                      console.log(state); 

                      this.onLoad(component,event);    

            }              

        });          

        $A.enqueueAction(action); 

        component.set('v.CountSelect',0); 

    } 

}) 