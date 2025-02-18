var Ajax=function(){
    $.getJSON("book-detail.json", function (data) {
        displayData(data)//传入一个函数
    });
    $.getJSON("book-recommend.json", function (data) {
        displayRecommendData(data)//传入一个函数
    });
}();

//获取点击书本id
bookId = location.search.split("=")[1];
console.log(bookId)

function displayData(data) {
    //获取书本信息
    for (var i = 0; i < data.length; i++) {
        if (data[i].bookId == bookId) {
            console.log(i)
            //展示书本信息
            var parentDiv = document.getElementById("container");
            var img = document.createElement("img");
            parentDiv.appendChild(img);
            img.src = data[i].bookImageBig;
            img.className = "img"

            var p = document.createElement("p");
            parentDiv.appendChild(p);
            p.className = "msg"
            if(data[i].bookAuthor=="") data[i].bookAuthor="数据正在更新中";
            if(data[i].bookPress=="") data[i].bookPress="数据正在更新中";
            if(data[i].bookDesc==null) data[i].bookDesc="数据正在更新中";
            p.innerHTML = "书名：" + data[i].bookName + '<br/>' +
                "作者：" + data[i].bookAuthor + '<br/>' +
                "类别：" + data[i].bookClassifyOne + '<br/>' +
                "出版社：" + data[i].bookPress + '<br/>' +
                "库存：" + data[i].bookResidue + '<br/>'
            var div = document.createElement("div");
            parentDiv.appendChild(div);
            div.className = "intro";
            // div.innerHTML = "内容简介：" + '<br/>' + data[i].bookDesc + '<br/>' + "喜欢本书的人还喜欢：";
            div.innerHTML =  data[i].bookDesc;

             //设置借书按钮
    //         var bottom = document.createElement("bottom");
    //         parentDiv.appendChild(bottom);
    //         bottom.className = "btn";
    //         bottom.innerHTML = "在线阅读";
    //         bottom.addEventListener("click",function(e){
    //         window.open("/text/a.txt")
    // })

    var read=document.getElementById("read");
            read.addEventListener("click",function(e){
            open=window.open("/text/a.pdf");
            open.document.charset = "UTF-8";
    })
    
    

        } else {
            continue
        }
    }
}


//随机推荐6本书
function displayRecommendData(data) {
    var num = Math.floor(Math.random() * (5));
    console.log(num+"num")
    //展示推荐书籍
    var parentDiv = document.getElementById("container");
    var div2 = document.createElement("div");
    parentDiv.appendChild(div2);
    div2.className = "recommend";
    for (var i = 0; i < 6; i++) {
        var img = document.createElement("img");
        div2.appendChild(img);
        img.src = data[num].re[i].bookImageBig
        img.className = "img2"
        img.id=data[num].re[i].bookId
        img.addEventListener("click",function(e){
            window.location.href='/book-detail/book-detail.html?bookId='+e.target.id
            console.log(e.target.id)
        })
    }
}



