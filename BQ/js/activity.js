// 置顶
$("#Top").on("click",function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
});

// 所有的 a标签 不刷新
var oA = document.querySelectorAll("a");
for (var i = 0 ;i <= oA.length-1 ; i ++){
    oA[i].href = "javascript:;"
}

// 1小时
$("#onehour li").on("click",function(){
    this.className = "cur active";
    this.siblings(
        this.className = "cur"
    );
})


