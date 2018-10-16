// 置顶
$(".go_top").click(function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
});
$(".last").click(function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
});

// 所有的 a标签 不刷新
var oA = document.querySelectorAll("a");
for (var i = 0 ;i <= oA.length-1 ; i ++){
    oA[i].href = "javascript:;"
}

// 两侧菜单的隐藏出现
$(".nav_menu").hide();
window.onscroll = function(){
    var docTop = $(document).scrollTop();
    if (docTop > 500) {
        $(".nav_menu").show();
    } else {
        $(".nav_menu").hide();
    }
}

// 侧栏登录的隐藏
$("#uLogin").hide();
$("#iUser").click( function(){
    $("#uLogin").show();
    this.style.background = "#e53";
    $("#no").click(function(){
        var oUlogin = document.querySelector("#iUser");
        $("#uLogin").hide();
        oUlogin.style.background = "#0c0c0c"
    })

})



// 瀑布流

function WaterFall(){}
$.extend(WaterFall.prototype,{
    init:function(){
        this.page = 1;
        this.main = $("#wrap2 ul");
        this.loading = false;
        this.loadJson()
        .done(function(res){
            this.renderPage(res);
        })

        this.bindEvent();
    },
    loadJson:function(){
        var opt = {
            url:"http://www.wookmark.com/api/json/popular",
            dataType:"jsonp",
            data:{page:this.page},
            context:this
        }
        return $.ajax(opt);
    },
    renderPage:function(json){
        var html = "";
        for(var i = 0 ; i < json.length ; i ++){
            html += `
                    <li class="goods_list">
                        <a href="#"><img src="${json[i].image}" alt=""></a>
                        <div class="goodstxt">
                            <a href="#">${json[i].descrip}</a>
                            <p class="discription">${json[i].pname}</p>
                            <p class="price clearfix">
                                <span class="curer">卖萌价</span>
                                <em></em>
                                <span class="real">${json[i].price}</span>
                                <span class="old">￥${json[i].cast}</span>  
                            </p>
                            <a class="buynow" href="#">立即购买</a>
                        </div>
                    </li>
                    `   
        }
        this.main.html(this.main.html() + html);
    },
    bindEvent(){
        $(window).on("scroll",this.ifLoad.bind(this));
    },
    ifLoad(){
        var scrollTop = $("html,body").scrollTop();
        var clientHeight = $("html")[0].clientHeight;
        var lastBox = this.main.children(":last");
        if(scrollTop + clientHeight > lastBox.offset().top){
            if(this.loading){
                return 0;
            }
            this.loading = true;
            this.page ++;
            this.loadJson()
            .done(function(res){
                this.renderPage(res);
            })
        }
    }
})
var waterfall = new WaterFall();
waterfall.init();
