
    // document.getElementById('1').innerHTML='text'
    console.log("你好朱赛峰")
    var d=new Date() ;
    var t=new Date("2022-07-01T09:00:00")
    document.getElementById("demo1").innerHTML=t
    document.getElementById('demo2').innerHTML=d.getMonth()+1;
    document.getElementById("demo3").innerHTML = d.getTime();
    document.getElementById("demo4").innerHTML=d.getSeconds();
    document.getElementById("demo5").innerHTML=d.getDay();
    switch(new Date().getDay()){
        case 0:{
            dd="星期天";
            break;
        }
        case 1:{
            dd="星期一";
            break;
        }
        case 2:{
            dd="星期二";
            break;
        }
        case 3:{
            dd="星期三";
            break;
        }
        case 4:{
            dd="星期四";
            break;
        }
        case 5:{
            dd="星期五";
            break;
        }
        case 6:{
            dd="星期六";
            break;
        }
        default:{
            dd="出错了";
            break;
        }
    }
document.getElementById("demo6").innerHTML=dd
document.getElementById("demo7").innerHTML=String(123+4);
document.getElementById("demo8").innerHTML=(123+9).toString()

var parentDiv = document.getElementById("main");//parentDiv既为mian的实例
for (var i = 0; i <8; i++) {
    var div1 = document.createElement("div");//声明第一个div的实例
    div1.className = 'CssClass0';            //设置css样式
    parentDiv.appendChild(div1);             //将div1添加到父div（parentDiv）当中
    var div2 = document.createElement("div");//声明第二个div的实例
    div2.className = 'CssClass1';            //设置css样式
    div1.appendChild(div2);                  //将div2添加到div1当中
    var spanAV12 = document.createElement("span");//声明一个span的实例
    spanAV12.innerHTML = "输入的内容:";           //往span中写入内容，也可以是变量的值
    div2.appendChild(spanAV12);                    //将span添加到div2中
    div2.appendChild(document.createElement("br"));//添加换行
}


// var img=document.createElement("img");
// parentDiv.appendChild(img);
// img.src="/images/1.jpg";
// img.className="bookimg";



var xmlhttp=new XMLHttpRequest();
var url="https://fang.transfigure.cn:1852/book/api-book-classifyone-all";
var type="GET";//方法
xmlhttp.open(type,url,true);//方法，接口，异步
xmlhttp.send();//发送请求
xmlhttp.onreadystatechange=function(){
if(xmlhttp.status==200&&xmlhttp.readyState==4){
    var result=JSON.parse(xmlhttp.response); //获取到的json数据
    console.log(result)
}
}
