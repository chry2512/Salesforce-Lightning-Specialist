/**
 * @description       :  This is a child component that will be used in the parent component.
 * @author            : Christian Niro
 * @group             : 
 * @last modified on  : 04-09-2024
 * @last modified by  : 
**/
import { LightningElement, api } from "lwc";
import LightningAlert from "lightning/alert";
export default class Child extends LightningElement {
      @api
      async sayHi() {
            await LightningAlert.open({
                  message: "Hello Trailblazer!",
                  theme: "success",
                  label: "Greetings"
      });  
        console.log("Alert modal has been closed");
     }
}