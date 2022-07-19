//测试
var xmlhttp=new XMLHttpRequest();
var url="http://localhost:3001/hotbook";
var type="GET";//方法
xmlhttp.open(type,url,true);//方法，接口，异步
xmlhttp.send();//发送请求
xmlhttp.onreadystatechange=function(){
if(xmlhttp.status==200&&xmlhttp.readyState==4){
    var data=JSON.parse(xmlhttp.response); //获取到的json数据
    console.log(data)
}
}