function ajax(method,url,postStr,dataType="json") {
    return new Promise((resolve,reject)=>{
        //获取 xhr
        var xhr=(()=>{
            if(window.XMLHttpRequest){
                return new XMLHttpRequest();
            }else{
                return new ActiveXobject("Microsoft.XMLHttp");
            }
        })();
        //创建请求
        xhr.open(method,url,true);
        //设置响应消息头
        if(method=="post"){
            xhr.setRequestHeader(
                "Content-Type",
                "applicaiton/x-www-form-urlencoded"            );
        }
        //设置回调
        xhr.onreadystatechange=()=>{
            if(xhr.readyState==4)
                if(xhr.status==200){
                    if(dataType.toLowerCase()=="json") {
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        resolve(xhr.responseText);
                    }
                }else
                    reject("ajax出错啦！"+xhr.status);
        }
        //发送
        try{
            xhr.send(postStr);
        }
        catch (err){
            reject(err)
        }
    })
}