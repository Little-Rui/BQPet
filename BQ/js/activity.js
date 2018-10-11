// 置顶
var oTop = document.querySelector("#Top");
oTop.onclick = function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}

// 所有的 a标签 不刷新
var oA = document.querySelectorAll("a");
for (var i = 0 ;i <= oA.length-1 ; i ++){
    oA[i].href = "javascript:;"
}

// 侧栏的个人账户登录
var oUser =document.querySelector("#iUser");
oUser.onclick = function(){
    var oUlogin =document.querySelector("#uLogin");
    oUser.className= "user active";
    oUlogin.className = "usr_login active";
    var oNo = document.querySelector("#no");
    oNo.onclick = function(){
        oUser.className= "user"
        oUlogin.className = "usr_login"  
    }
}

