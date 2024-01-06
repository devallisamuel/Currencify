import { store } from "./store";

class Currencify {
    invalid:boolean = false;
    constructor (private country:string,private amount:string) {
        try {
            if(!(country in store)) {
                this.invalid = true;
            } else if () {
    
            }
            
        } catch (error) {
          console.log("Currencify Error: " + error)  
        }

    }

    formatCurrency () {
        return "₦1,000.00k";
    }
}

export default Currencify;

