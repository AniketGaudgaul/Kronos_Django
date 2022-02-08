var displa=document.getElementById("disp");

class Watch{
    price:number;
    Model:string;
    Type:string;

    constructor(price:number,Model:string,Type:string){
        this.price=price;
        this.Model=Model;
        this.Type=Type;
    }
    display(){
        displa.innerHTML += `Price: ${this.price}<br>Model: ${this.Model}<br>Type: ${this.Type}<br><hr>`
    }
}

var Tissot: Watch = new Watch(500,"Tissot","Luxury");
var Oyster_Perpetual:Watch=new Watch(600,"Oyster Perpetual","Luxury");
var Aura:Watch=new Watch(450,"Aura","Luxury");

var Aquarius:Watch=new Watch(380,"Aquarius","Smart Watch");
var Raspberry:Watch=new Watch(350,"Raspberry","Smart Watch");
var Fossil:Watch=new Watch(320,"fossil","Smart Watch");

var Golden_Dial:Watch=new Watch(285,"Golden Dial","Vintage");
var Platinum_Frost:Watch=new Watch(260,"Platinum Frost","Vintage");
var Daytona:Watch=new Watch(230,"Daytona","Vintage");

var Vega:Watch=new Watch(290,"Vega","Women's Watches");
var Krystal:Watch=new Watch(340,"Krystal","Women's Watches");
var Olive:Watch=new Watch(325,"Olive","Women's Watches");

var Xplorer:Watch=new Watch(150,"Xplorer","Kid's Watches");
var Celestia:Watch=new Watch(180,"Celestia","Kid's Watches");
var Genesys:Watch=new Watch(130,"Genesys","Kid's Watches");

function filter1(){
    displa.innerHTML = "";
    Xplorer.display();
    Celestia.display();
    Genesys.display();
}
function filter2(){
    displa.innerHTML = "";
    Golden_Dial.display();
    Platinum_Frost.display();
    Daytona.display();
}
function filter3(){
    displa.innerHTML = "";
    Vega.display();
    Krystal.display();
    Olive.display();
}
function filter4(){
    displa.innerHTML = "";
    Aquarius.display();
    Raspberry.display();
    Fossil.display();
}
function filter5(){
    displa.innerHTML = "";
    Tissot.display();
    Oyster_Perpetual.display();
    Aura.display();
}