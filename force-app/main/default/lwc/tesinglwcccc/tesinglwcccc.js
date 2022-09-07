import { LightningElement } from 'lwc';
import DATAVIEW_OBJECT from '@salesforce/schema/dataview__c';
import NAME_FIELD from '@salesforce/schema/dataview__c.Name';
import EMAIL_FIELD from '@salesforce/schema/dataview__c.email__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';

export default class Contact_form extends NavigationMixin(LightningElement) {
    name='';
    email='';
    handlechange(event){
        console.log("input")
       if(event.target.label=='name'){
        this.name = event.target.value;
       }
       if(event.target.label=='email'){
        this.email = event.target.value;
       }

    }
    CreateContact()
    {
        console.log("sent"); 
      const fields = {};
      fields[NAME_FIELD.fieldApiName] = this.name;
      fields[EMAIL_FIELD.fieldApiName] = this.email;
      const recordInput = {apiName: DATAVIEW_OBJECT.objectApiName,fields }
      createRecord (recordInput)    
      
      .then(dataview =>{
           this.dataviewId = dataview.id;
           this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'message sent successfully',
                variant: 'Success',
            }),
           );
           this[NavigationMixin.Navigate]({
                type:'standard__recordPage',
                attributes: {
                recordId: account.id,
                objectApiName: "Account",
                actionName: "view"
            },
           });

        })

         .catch(error =>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'error Creating Record',
                    message: error.body.message,
                    variant: 'error',
                }),
               );

         })

            
        




     
    }

}