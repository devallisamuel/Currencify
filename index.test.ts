import {Currencify} from "./index";

describe("instantiation of the Currencify class", () => {
    let instance:Currencify;
    beforeEach(() => instance = new Currencify("Nigeria",))
    test("equality of country",() => {
    
      expect(instance.currency.country).toEqual("Nigeria");
    });
    test("equality of start and end properties",() => {
      expect(instance.currency.start).toEqual("₦");
      expect(instance.currency.end).toEqual("k");
    });

    test("format of inputted amount", () => {
        const result = instance.formatCurrency("1000.00");
        expect(result).toEqual("₦1,000.00k");
    });
})