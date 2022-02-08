var displa = document.getElementById("disp");
class Watch {
    constructor(price, Model, Type) {
        this.price = price;
        this.Model = Model;
        this.Type = Type;
    }
    display() {
        displa.innerHTML += `Price: ${this.price}<br>Model: ${this.Model}<br>Type: ${this.Type}<br><hr>`;
    }
}
var Tissot = new Watch(500, "Tissot", "Luxury");
var Oyster_Perpetual = new Watch(600, "Oyster Perpetual", "Luxury");
var Aura = new Watch(450, "Aura", "Luxury");
var Aquarius = new Watch(380, "Aquarius", "Smart Watch");
var Raspberry = new Watch(350, "Raspberry", "Smart Watch");
var Fossil = new Watch(320, "fossil", "Smart Watch");
var Golden_Dial = new Watch(285, "Golden Dial", "Vintage");
var Platinum_Frost = new Watch(260, "Platinum Frost", "Vintage");
var Daytona = new Watch(230, "Daytona", "Vintage");
var Vega = new Watch(290, "Vega", "Women's Watches");
var Krystal = new Watch(340, "Krystal", "Women's Watches");
var Olive = new Watch(325, "Olive", "Women's Watches");
var Xplorer = new Watch(150, "Xplorer", "Kid's Watches");
var Celestia = new Watch(180, "Celestia", "Kid's Watches");
var Genesys = new Watch(130, "Genesys", "Kid's Watches");
function filter1() {
    displa.innerHTML = "";
    Xplorer.display();
    Celestia.display();
    Genesys.display();
}
function filter2() {
    displa.innerHTML = "";
    Golden_Dial.display();
    Platinum_Frost.display();
    Daytona.display();
}
function filter3() {
    displa.innerHTML = "";
    Vega.display();
    Krystal.display();
    Olive.display();
}
function filter4() {
    displa.innerHTML = "";
    Aquarius.display();
    Raspberry.display();
    Fossil.display();
}
function filter5() {
    displa.innerHTML = "";
    Tissot.display();
    Oyster_Perpetual.display();
    Aura.display();
}
//# sourceMappingURL=watches.js.map