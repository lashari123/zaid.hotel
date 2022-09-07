import { LightningElement } from 'lwc';
import bootstrap from '@salesforce/resourceUrl/bootstrap';
import images from '@salesforce/resourceUrl/images';
import jquery from '@salesforce/resourceUrl/jquery';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
export default class My1lwc extends LightningElement {

    img1 = images + '/img/hero-bg.jpg';
     
    renderedCallback() {
         Promise.all([
            loadScript(this, bootstrap + '/js/bootstrap.js'),
            loadScript(this, jquery),
            loadStyle(this, bootstrap + '/css/bootstrap.min.css')
         ])
         .then(() => {
            console.log("bootstrap is working")
         })
     } 

    mytitle = " zaid";

}