menuListArray = ["Pizza Vegetariana","Pizza Extravaganza","Pizza Quatro Queijo", "Pizza Portuguesa", "Pizza Calabresa",
 "Pizza de Frango","Pizza Napolitana" ];

function getMenu(){
var htmldata ="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags='<img id=img1 src="pizzaImg.png">'
var item=document.getElementById("addItem1").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+menuListArray[i]+ '<br>'
}


}

function addTop(){
var item=document.getElementById("addItem1").value;
menuListArray.push(item);
addItem();
}