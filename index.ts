import { store } from "./store";
import { Currency } from "./type";


  const Currencify = (country:string) => {
    // @ts-ignore
    this.invalid = false;
    // @ts-ignore
    this.prefix = "";
    // @ts-ignore
    this.suffix = "";
    // @ts-ignore
    this.amount = "";
    // @ts-ignore
    this.regex = /^[A-Za-z !@#$%^&*()_+={}[\]:;<>,?~\\/-]+$/;
    // @ts-ignore
    this.country = country;
    // @ts-ignore
    this.currency = {
      start: "",
      end: "",
      country: "",
    };

    store.forEach((val) => {
      if (
        // @ts-ignore
        val.country.toLocaleLowerCase() === this.country.toLocaleLowerCase()
      ) {
        // @ts-ignore
        this.currency = val;
      }
    });
  }

  Currencify.prototype.formatCurrency = function (
    amount: string
  ) {
    try {
      this.amount = amount;
      if (!this.currency?.country || this.regex.test(this.amount)) {
        this.invalid = true;
        throw Error("Invalid Input Format");
      } else {
        const regexp = /\B(?=(\d{3})+(?!\d))/g;
        this.amount = this.amount.replace(regexp, ",");
        this.prefix = this.currency?.start ?? "";
        this.suffix = this.currency?.end ?? "";
        return this.prefix + this.amount + this.suffix;
      }
    } catch (error) {
      let err = "Currencify " + error;
      console.log(err);
      return err;
    }
  };


//  class Currencify {
//   invalid: boolean = false;
//   prefix: string = "";
//   suffix: string = "";
//   amount: string = "";
//   currency: Currency = {
//     start: "",
//     end: "",
//     country: "",
//   };

//   regex = /^[A-Za-z !@#$%^&*()_+={}[\]:;<>,?~\\/-]+$/;

//   constructor(private country: string) {
//     store.forEach((val) => {
//       if (
//         val.country.toLocaleLowerCase() === this.country.toLocaleLowerCase()
//       ) {
//         this.currency = val;
//       }
//     });
//   }

//   formatCurrency(amount:string) {
//     try {
//         this.amount = amount;
//       if (!this.currency?.country || this.regex.test(this.amount)) {
//         this.invalid = true;
//         throw Error("Invalid Input Format");
//       } else {
//         const regexp = /\B(?=(\d{3})+(?!\d))/g;
//         this.amount = this.amount.replace(regexp, ",");
//         this.prefix = this.currency?.start ?? "";
//         this.suffix = this.currency?.end ?? "";
//         return this.prefix + this.amount + this.suffix;
//       }
//     } catch (error) {
//       let err = "Currencify " + error;
//       console.log(err);
//       return err;
//     }
//   }
// }


export default Currencify;