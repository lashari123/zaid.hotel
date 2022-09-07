import { LightningElement } from 'lwc';
 
export default class MyFirstLwc extends LightningElement {
    testingcall = "hello"
   
    connectedCallback()
    {
        var name = "testign alert windows ";
        if(this.testingcall) {
        window.alert(name+"test");
         }
    }
}