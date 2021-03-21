let first = [];
for(var i=0;i<10;i++){
    first[i]=Number(0);
}

var orders=[]
var total_sum=0;
var total_cash=0;
var model=false;
var pages=false;
var isEdit = function () {
    if (model==false){
    $('.ret2').show();
    model=true;}
    else {
    $('.ret2').hide();
    model=false;
    }
}
var changethePage = function () {
    if (pages==false){
    $('.page2').show();
    $('.page1').hide();
    pages=true;}
    else {
    $('.page1').show();
    $('.page2').hide();
    pages=false;
    }
}
function dcW(variable) {
    document.write(variable);
}



function firstPlus(n){
    g=Number(n);
    price_1=(document.getElementById("price-"+g).innerText);
    var price_1 = Number(price_1.replace(" ", ""));
    first[g]+=1;
    total_sum+=1;
    total_cash+=price_1;
    document.getElementById("total_sum").innerText=total_sum;
    document.getElementById("total_cash").innerText=total_cash;
    document.getElementById("input-"+g).innerText=first[g];

    
    toBasket();

}
function firstMinus(n){
    if(first[Number(n)]>0){
    g=Number(n);
    price_1=(document.getElementById("price-"+g).innerText);
    var price_1 = Number(price_1.replace(" ", ""));
    first[g]-=1;
    total_sum-=1;
    total_cash-=price_1;
    document.getElementById("total_sum").innerText=total_sum;
    document.getElementById("total_cash").innerText=total_cash;
    document.getElementById("input-"+g).innerText=first[g];
    
    toBasket();
    }
}
function firstPlus_2(n){
    g=Number(n);
    price_1=(document.getElementById("price-"+g).innerText);
    var price_1 = Number(price_1.replace(" ", ""));
    first[g]+=1;
    total_sum+=1;
    total_cash+=price_1;
    document.getElementById("total_sum").innerText=total_sum;
    document.getElementById("total_cash").innerText=total_cash;
    document.getElementById("input-"+g).innerText=first[g];
    document.getElementsByClassName("blue_count"+n).innerText=first[g];

    
    toBasket();

}
function firstMinus_2(n){
    if(first[Number(n)]>0){
    g=Number(n);
    price_1=(document.getElementById("price-"+g).innerText);
    var price_1 = Number(price_1.replace(" ", ""));
    first[g]-=1;
    total_sum-=1;
    total_cash-=price_1;
    document.getElementById("total_sum").innerText=total_sum;
    document.getElementById("total_cash").innerText=total_cash;
    document.getElementById("input-"+g).innerText=first[g];
    document.getElementsByClassName("blue_count"+n).innerText=first[g];
    
    toBasket();
    }
}
function deleteResult(){
    orders=[];
}

function toBasket(){
    deleteResult();
    var result='';
    for(var i=0;i<10;i++){
        if (first[i]>0){
            var g = String(i);
            var img1 = (document.querySelector('#img-'+g)).getAttribute('src');
            var input1 = Number((document.getElementById('input-'+g)).innerText);
            var price1 = (document.getElementById('price-'+g)).innerText;
            var desc1 = (document.getElementById('desc-'+g) ).innerText;
            var name1 = (document.getElementById('name-'+g)).innerText;
            var Order={
                img:img1,
                count:input1,
                name:name1,
                desc:desc1,
                price:price1
            }
            orders.push(Order);
        }
    }
    var DisplayMessage = '';
    orders.forEach(function(item,i){
    
    
    DisplayMessage += ` 
      <li>
        <div class='order_2''>
          <div class='order_words'>
            <h6 class="item-name1 str_order">${item.name}   <span id='blue_count${i}'>x${item.count}</span>  
            <p class="item_desc1 str_order" font-size='1px' !important;>${item.desc}</p>
            <label class="item-price1 str_order">${item.price}</label>
            <div class='newbutton'><button class='new-button' type="button" onclick=firstMinus_2(${i})>-</button><button class='new-button' type="button" onclick=firstPlus_2(${i})>+</button></div>
            
          </div>
          
            <img class="col-xs-5" id="img_1" src='${item.img}' alt="789123">
          
        </div>
        <svg height="2" width="600">
        <line x1="0" y1="0" x2="600" y2="0" style="stroke:rgba(230, 230, 230, 1);stroke-width:88" />
        </svg>
      </li>
      `
    });
    result=DisplayMessage;
    var mycontainer = document.querySelector('#orderss');
    mycontainer.innerHTML=result;

}
