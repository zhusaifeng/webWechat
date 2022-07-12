

var Ajax=function(){
    $.getJSON("/hotbook.json", function (hotbook) {
        displayData(hotbook,1)//传入一个函数
    });

    $.getJSON("/recommendbook.json",function(recommendbook){
        displayData(recommendbook,2);
    });

    $.getJSON("/newbook.json", function (newbook) {
        displayData(newbook,3)//传入一个函数
    });

}();

var displayData= function(data,t){
    var parentDiv = document.getElementById("container");
    for(var i=0;i<data.length;i++){
    console.log(t);
    console.log(data[i].bookName)
    var div = document.createElement("div");//声明第一个div的实例
    div.className = 'newbook';        //设置css样式
    parentDiv.appendChild(div);
    div.addEventListener("click",function(){
        window.location.href='/book-detail/book-detail.html'
    })
    // 动态生成书籍图片
    var img=document.createElement("img");
    div.appendChild(img);
    img.src=data[i].bookImageBig;
    img.className="bookimg";
    //动态生成书籍信息
    var p=document.createElement("p");
    div.appendChild(p);
    p.className="info";
    p.innerHTML="书名："+data[i].bookName+'<br/>'
    +"作者："+data[i].bookAuthor+'<br>'
    +"类别："+data[i].bookClassifyOne+'<br/>'
    +"出版社："+data[i].bookPress+'<br/>'
    +"库存："+data[i].bookResidue;
    var tag=document.createElement("div");
    div.appendChild(tag);
    if(t==1){
    tag.className="tag1"
    tag.innerHTML="热门"
    }
    else if(t==2){
    tag.className="tag2"
    tag.innerHTML="推荐"
    }
    else{
    tag.className="tag3"
    tag.innerHTML="新书"
    }
}
}

