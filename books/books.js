
var Ajax=function(){
    $.getJSON("/books/book.json", function (data) {
        displayData(data)//传入一个函数
    });
}();

var displayData=function(data){
    console.log(data)
    console.log(data[4])
    var parentDiv = document.getElementById("container");
    var ul = document.createElement("ul");
    ul.className = 'ul2';            //设置css样式
    parentDiv.appendChild(ul);
    for(var i=0;i<data.length;i++){
        var li=document.createElement("li");
        li.className='classify';
        ul.appendChild(li);
        var a=document.createElement("a");
        li.appendChild(a);
        a.innerHTML=data[i];
        a.className="a2";
        // var hr=document.createElement("hr");
        // ul.appendChild(hr);
    }
}