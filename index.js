import { getStockData } from "./api.js";

setInterval(function(){
    const stockdata= getStockData()
    render(stockdata);

},1500)
let preprice = null
function render(g){
    const stockn=document.getElementById('e')
    const stocks=document.getElementById('f')
    const stockp=document.getElementById('b')
    const stockt=document.getElementById('c')
    const {name,sym,price,time} =g
    stockn.textContent= g.name
    stocks.textContent= sym
    stockp.textContent= price
    stockt.textContent= g.time
    const ni = document.getElementById('n')
    price>preprice? ni.textContent='📈' : price<preprice ? ni.textContent='📉':ni.textContent='➖';
    preprice=price

}