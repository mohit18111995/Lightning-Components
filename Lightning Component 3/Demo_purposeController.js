({     

    Init:function(component,event,helper){ 

        helper.getObjects(component,event); 

    }, 

    CreateRecord : function(component,event,helper){ 

        component.set("v.isModalOpen", true); 

       helper.getRecordTypes(component,event,helper);  

    }, 

    closeModel: function(component, event, helper) {    

      component.set("v.isModalOpen", false); 

   }, 

    NextModel:function(component, event, helper) { 

        var RecordTypeId = component.find("recordId").get("v.value"); 

        console.log(component.find('colorId').get('v.value')); 

        console.log("jhjk"+RecordTypeId);         

        var createRecordEvent = $A.get("e.force:createRecord"); 

        createRecordEvent.setParams({ 

            "entityApiName": component.find('colorId').get('v.value'), 

            "recordTypeId": RecordTypeId 

        }); 

        createRecordEvent.fire(); 

        console.log(getAllId); 

    }      

}) 