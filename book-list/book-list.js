value = location.search.split("=")[1];
//解决传过来中文乱码问题
classify=decodeURIComponent(value)
console.log(classify)

Ajax=function(){
    $.getJSON("book-list.json",function(data){
        displayData(data);
    })
}();

var displayData=function(data){                                                                                                                                         
    console.log(data);
    var parentDiv = document.getElementById("container");
    for(var i=0;i<data.length;i++)
    {
        if(data[i].a[0].bookClassifyOne==classify){
            for(var j=0;j<data[i].a.length;j++){
            console.log(data[i].a[j].bookName)
            var div = document.createElement("div");//声明第一个div的实例
            div.className = 'book';        //设置css样式
            parentDiv.appendChild(div);
            var img=document.createElement("img");
            div.appendChild(img);
            img.src=data[i].a[j].bookImageBig;
            img.className="bookimg";
             //动态生成书籍信息
            var p=document.createElement("p");
            div.appendChild(p);
            p.className="info";
            p.id=data[i].bookId
            p.innerHTML="书名："+data[i].a[j].bookName+'<br>'
            +"作者："+data[i].a[j].bookAuthor+'<br>'
            +"类别："+data[i].a[j].bookClassifyOne+'<br/>';
            }
        }
        else{
            continue;
        }
    }
}