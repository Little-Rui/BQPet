function Tab(){}
$.extend(Tab.prototype,{
    init: function(options){
        this.aBtn = $(options.abtn);
        this.aItem = $(options.aItem);
        // console.log(this.aBtn)
        this.aItem_num = this.aItem.length;
        this.bindEvent();
    },
    bindEvent : function(){
        this.aBtn.click($.proxy(this.getindex , this));
    },
    getindex : function(event){
        var target = event.target || event.srcElement;
        this.nowIndex = $(target).index();
        this.show()
    },
    show : function(){
        this.aBtn.eq(this.nowIndex).addClass("cur")
        .siblings("a").removeClass();
        this.aItem.eq(this.nowIndex).show()
        .siblings(".l_list").hide()   
    }
})
var tab6 = new Tab();
tab6.init({
    abtn : "#l_method a",
    aItem: "#method_con .l_list"
})

// 所有的 a标签 不刷新
var oA = document.querySelectorAll("a");
for (var i = 0 ;i <= oA.length-1 ; i ++){
    oA[i].href = "javascript:;"
}