import { store } from "./store";
import { Currency } from "./type";

export class Currencify {
  invalid: boolean = false;
  prefix: string = "";
  suffix: string = "";
  currency: Currency = {
    start: "",
    end: "",
    country: "",
  };

  regex = /^[A-Za-z !@#$%^&*()_+={}[\]:;<>,?~\\/-]+$/;

  constructor(private country: string, private amount: string) {
    store.forEach((val) => {
      if (
        val.country.toLocaleLowerCase() === this.country.toLocaleLowerCase()
      ) {
        this.currency = val;
      }
    });
  }

  formatCurrency() {
    try {
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
  }
}
