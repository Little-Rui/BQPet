// 置顶
$(".go_top").click(function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
});


// // 所有的 a标签 不刷新
// var oA = document.querySelectorAll("a");
// for (var i = 0 ;i <= oA.length-1 ; i ++){
//     oA[i].href = "javascript:;";
// }

// 城市的隐藏出现
$(".st_city").hide();
$(".address").on({
    "mouseenter":function(){
        $(".st_city").show();
        $(".select"). addClass("active");
    },
    "mouseleave":function(){
        $(".st_city").hide();
    $(".select"). removeClass("active");

    }
})

var oPet = document.querySelectorAll(".pet");
var oCondiv0 = document.querySelectorAll(".condiv0");
for(let i = 0 ; i < oPet.length ; i++){
    oPet[i].onmouseenter = function(){
        oCondiv0[i].style.display = "block";
        oPet[i].className = "pet out";
    }
    oPet[i].onmouseleave = function(){
        oCondiv0[i].style.display = "none";
        oPet[i].className = "pet";
    }
}

// 手机版
$(".tel_select").hide();
$(".has").on({
    "mouseenter":function(){
        $(".tel_select").show();
        $(".has").addClass("up")
    },
    "mouseleave":function(){
        $(".tel_select").hide();
        $(".has").removeClass("up")
    }
})

// 波奇首页分页
$(".r_select").hide();
$(".last").on({
    "mouseover":function(){
        $(".r_select").show();
        $(".last").addClass("cur")
    },
    "mouseleave":function(){
        $(".r_select").hide();
        $(".last").removeClass("cur")
    }
})

// 购物车
$(".shop_cart").hide();
$(".nav3").on({
    "mouseover":function(){
        $(".shop_cart").show();
        $(".nav3").addClass("cur")
    },
    "mouseleave":function(){
        $(".shop_cart").hide();
        $(".nav3").removeClass("cur")
    }
})
// 关注我们
$(".gz_select").hide();
$(".konw").on({
    "mouseenter":function(){
        $(".gz_select").show();
        $(".konw").addClass("up")
    },
    "mouseleave":function(){
        $(".gz_select").hide();
        $(".konw").removeClass("up")
    }
})

// 轮播图
function Banner(){}
$.extend(Banner.prototype,{
    // 写法是兼容的;
    init : function(options){
        /*
            {
               item_list : "#wrap li",
               left_btn : "#left",
               right_btn : "#right",
               btn_list : "#btn_list button"    
            }
        */ 
       // 所有的图片;
       this.item_list = $(options.item_list);
       // 左按钮 ;
       this.left_btn = $(options.left_btn);
       // 右按钮 ;
       this.right_btn = $(options.right_btn);
       // 按钮列表;
       this.btn_list = $(options.btn_list);
       this.nowIndex = 0;
       // 有多少元素;
       this.item_num = this.item_list.length;
       this.ul = $("#show ul");
       // 获取列表中第一个元素的宽度值;
       this.item_width = this.item_list.width();
        
       this.wrap = $("#wrap");
       if(this.left_btn.length == 0 && this.right_btn.length == 0 && this.btn_list.length == 0){
           this.autoPlay();
           return 0;
       }
       this.bindEvent();
    },
    bindEvent : function(){
        // this.left_btn.click(this.prev.bind(this))
        this.left_btn.click($.proxy(this.prev , this));
        this.right_btn.click($.proxy(this.next , this));
        this.btn_list.mouseover($.proxy(this.toIndex , this));

        this.wrap.mouseenter($.proxy(this.stopPlay, this ));
        this.wrap.mouseleave($.proxy(this.autoPlay, this ));

    },
    next:function(){
        if( this.nowIndex == this.item_num - 1){
            this.nowIndex = 1;
            this.ul.css({
                left : 0
            })
        }else{
            this.nowIndex ++;
        }
        this.animate();
    },
    prev:function(){
        // console.log(this);
        if( this.nowIndex == 0){
            this.nowIndex = this.item_num - 2;
            this.ul.css({
                left : -(this.item_num - 1) * this.item_width
            })
        }else{
            this.nowIndex --;
        }

        this.animate();
    },
    toIndex:function(event){
        // 要获取当前元素的下标么;
        var target = event.target || event.srcElement;
      
        this.nowIndex = $(target).index();
        
        this.animate();
    },
    animate:function(){
        // console.log(this.nowIndex);
        this.ul.stop().animate({
            left : -this.item_width * this.nowIndex
        })
        var index = this.nowIndex == this.item_num - 1 ? 0 : this.nowIndex; 
        this.btn_list.eq(index).addClass("active")
        .siblings("button").removeClass("active");
    },
    autoPlay:function(){
        // 自动执行;
        this.autoPlay_timer = setInterval(function(){
            // this.right_btn.trigger("click");
            this.right_btn.triggerHandler("click");
            this.next();
        }.bind(this),3000)
    },
    stopPlay:function(){
        clearInterval(this.autoPlay_timer);
    }
})

var banner = new Banner();

banner.init({
    item_list : "#show li",
    btn_list : "#list button" 
})

banner.autoPlay();


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


// 选项卡
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
        this.aBtn.mouseenter($.proxy(this.getindex , this));
    },
    getindex : function(event){
        var target = event.target || event.srcElement;
        this.nowIndex = $(target).index();
        this.show()
    },
    show : function(){
        this.aBtn.eq(this.nowIndex).addClass("current")
        .siblings("a").removeClass();
        this.aItem.eq(this.nowIndex).show()
        .siblings(".l_list").hide()   
    }
})
var tab = new Tab();
tab.init({
    abtn : "#menu_list1 dd a",
    aItem: "#box1 .l_list"
})

var tab2 = new Tab();
tab2.init({
    abtn : "#menu_list2 dd a",
    aItem: "#box2 .l_list"
})
var tab3 = new Tab();
tab3.init({
    abtn : "#menu_list3 dd a",
    aItem: "#box3 .l_list"
})

var tab4 = new Tab();
tab4.init({
    abtn : "#menu_list4 dd a",
    aItem: "#box4 .l_list"
})
var tab5 = new Tab();
tab5.init({
    abtn : "#menu_list5 dd a",
    aItem: "#box5 .l_list"
})
var tab6 = new Tab();
tab6.init({
    abtn : "#l_method a",
    aItem: "#method_con .l_list"
})

