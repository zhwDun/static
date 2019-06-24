/*url后加时间戳消除缓存*/
function timestamp(url){
    //  var getTimestamp=Math.random();
    var getTimestamp=new Date().getTime();
    if(url.indexOf("?")>-1){
        url=url+"&timestamp="+getTimestamp
    }else{
        url=url+"?timestamp="+getTimestamp
    }
    console.log(url);
    return url;
}