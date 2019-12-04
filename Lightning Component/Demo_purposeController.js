({ 

     init:function(cmp, event, helper) { 

        helper.simulateServerRequest(cmp,event);         

    }, 

    handleClick:function(cmp,event,helper){ 

        //alert(cmp.find('colorId').get('v.value') + ' pie is good.'); 

        helper.Records(cmp,event); 

    }     

}) 