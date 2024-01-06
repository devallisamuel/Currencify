import Currencify from ".";

test("instantiation of the library class",() => {
    const instance = new Currencify("Nigeria","100");

    expect(instance.formatCurrency()).toEqual("₦1,000.00k")
});