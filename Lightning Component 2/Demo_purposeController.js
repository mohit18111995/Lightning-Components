({ 

    init:function(cmp, event, helper) { 

        helper.simulateServerRequest(cmp,event);         

    }, 

    DisplayRecord:function(cmp,event,helper){ 

        //alert(cmp.find('colorId').get('v.value') + ' pie is good.'); 

        helper.Records(cmp,event); 

    }, 

    openModal:function(cmp,event,helper){ 

        var createRecordEvent = $A.get("e.force:createRecord"); 

        createRecordEvent.setParams({ 

            "entityApiName": cmp.find('colorId').get('v.value') 

        }); 

        createRecordEvent.fire();        

    }    

}) 