({ 

    SaveRecord:function(component,event,helper) 

    {         

        var con=component.get('v.RecordList'); 

        var action1 = component.get("c.saveContact"); 

        action1.setParams({ 

        c : con 

       }); 

          action1.setCallback(this,function(a){ 

                var state = a.getState();            

                 if(state === "SUCCESS"){ 

                     var navEvt = $A.get("e.force:navigateToSObject"); 

                     navEvt.setParams({ 

                         "recordId": a.getReturnValue() 

                     }); 

                     navEvt.fire(); 

                     //alert(a.getReturnValue()); 

                 }else{ 

                     alert("fail"); 

                 } 

          }); 

        $A.enqueueAction(action1);   

    } 

}) 