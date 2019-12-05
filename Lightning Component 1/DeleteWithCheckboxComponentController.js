

({ 

    LoadAccountList : function(component, event, helper) { 

        helper.onLoad(component,event); 

    }, 

    checkboxSelect : function(component,event,helper){ 

        var selectedRec = event.getSource().get("v.value"); 

        var getSelectedNumber = component.get("v.CountSelect"); 

        if(selectedRec==true) 

            getSelectedNumber++; 

        else 

            getSelectedNumber--; 

        component.set("v.CountSelect", getSelectedNumber); 

    } , 

    selectAll : function(component,event,helper){ 

        var selectHeaderCheckbox=event.getSource().get("v.value"); 

        var getAllId = component.find("boxpack");// Return the Component by ID 

        if(selectHeaderCheckbox==true){ 

            for(var i=0;i<getAllId.length;i++){ 

                component.find("boxpack")[i].set("v.value",true);                 

            }  

            component.set("v.CountSelect",getAllId.length); 

        }else  

            if(selectHeaderCheckbox==false){ 

            for(var i=0;i<getAllId.length;i++){ 

                component.find("boxpack")[i].set("v.value",false);                 

            }  

            getAllId.length=0; 

            component.set("v.CountSelect",getAllId.length); 

        }          

    }, 

    DeleteRecord : function(component,event,helper){ 

        var delID=[]; 

        var getAllId=component.find("boxpack"); 

        if(! Array.isArray(getAllId)){ 

            if (getAllId.get("v.value") == true) { 

                delID.push(getAllId.get("v.text")); 

            } 

        } else { 

            for(var i=0;i<getAllId.length;i++){ 

                if(getAllId[i].get("v.value")==true){ 

                    delID.push(getAllId[i].get("v.text")); 

                }     

            } 

        } 

        console.log(delID); 

        //alert(getAllId[0].get("v.text")); 

        helper.DeleteRecordById(component,event,delID); 

    } 

}) 