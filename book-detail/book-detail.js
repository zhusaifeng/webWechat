var Ajax=function(){
    $.getJSON("book-detail.json", function (data) {
        displayData(data)//传入一个函数
    });
}();


function displayData(data){
var parentDiv = document.getElementById("container");
var img=document.createElement("img");
parentDiv.appendChild(img);
img.src=data[1].bookImageBig;
img.className="img"

var p=document.createElement("p");
parentDiv.appendChild(p);
p.className="msg"
p.innerHTML="书名："+data[1].bookName+'<br/>'
+"作者："+data[1].bookAuthor+'<br/>'
+"类别："+data[1].bookClassifyOne+'<br/>'
+"出版社："+data[1].bookPress+'<br/>'
+"库存："+data[1].bookResidue+'<br/>'
var div=document.createElement("div");
parentDiv.appendChild(div);
div.className="intro";
div.innerHTML="内容简介："+'<br/>'+data[1].bookDesc+'<br/>'+"喜欢本书的人还喜欢：";


var div2=document.createElement("div");
parentDiv.appendChild(div2);
div2.className="recommend";

for(var i=0;i<6;i++){
    var img=document.createElement("img");
    div2.appendChild(img);
    img.src=data[i].bookImageBig
    img.className="img2"
}

var bottom=document.createElement("bottom");
parentDiv.appendChild(bottom);
bottom.className="btn";
bottom.innerHTML="借书"

// var img1=document.createElement("img");
// div2.appendChild(img1);
// img1.src=data[1].bookImageBig
// img1.className="img2"

// var img2=document.createElement("img");
// div2.appendChild(img2);
// img2.src=data[2].bookImageBig
// img2.className="img2"

// var img3=document.createElement("img");
// div2.appendChild(img3);
// img3.src=data[3].bookImageBig
// img3.className="img2"



}



