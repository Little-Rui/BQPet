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


// 邮箱验证
window.onload = function(){
    $(".bg").hide();
    // 用户名不为空
    $("#u_name").blur(function(){
        if(this.value == ""){
            $(".bg").show();
            $("#bg1").show()
            .siblings().hide();
        }
    })
    // 密码不为空
    $("#u_pwd").blur(function(){
        if(this.value == ""){
            $(".bg").show();
            $("#bg2").show()
            .siblings().hide();
        }
    })
    // 验证码
    $("#u_real").blur(function(){
        if(this.value == ""){
            $(".bg").show();
            $(".no").show();
            $("#bg3").show()
            .siblings().hide();
        }
    })
    $("#l_btn").click(function(event){
        var evt = event || window.event;  
        var pass = true;  
        for(var i = 0;i < $("input[data=reg]").length;i++){  
            if(!$("input[data=reg]")[i].pass){  
                pass=false;
                break;  
            }
        }
        if(!pass){  
            if(evt.preventDefault){  
                evt.preventDefault()  
            }else{
                window.returnValue = false  
            }

        }
        $.ajax({
            type: 'GET',
            url: "http://localhost:8888/proxy/localhost/BQ/login.php",
            data: `username=${$("#u_name").value}&password=${$("#u_pwd").value}`,			  
        })
        .then(function(res){
            if(res == "登录成功"){
                window.location.href = "http://localhost:8888";
            }else{
                $(".bg").show();
                $("#bg4").show()
                .siblings().hide()
            }
        })
           
    })
} 
