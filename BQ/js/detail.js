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

// 放大镜
var oSmall = document.getElementById("small");
	// 小框;
	var oFrame = document.getElementById("frame");
	var oBig = document.getElementById("big");
	var oBigImg = oBig.children[0];

	oSmall.onmouseenter = function(){
        // 小框和大图都显示出来;
        console.log(1);
		oBig.style.display = "block";
		oFrame.style.display = "block";
	}
	oSmall.onmouseleave = function(){
		// 小框和大图都隐藏;
		oBig.style.display = "none";
		oFrame.style.display = "none";
	}
	oSmall.onmousemove = function(event){
		// 1. 获取定位的x,y 值;
		var e = event || window.event;
		var offsetX = e.offsetX;
		var offsetY = e.offsetY;
		// 2. 给元素设置的left 值 和top值;
		var nLeft = offsetX  - 50;
		var nTop = offsetY - 50;
		// 边界检测;  最小值 ; 最大值;
		
		// 最小值;
		nLeft = nLeft < 0 ? 0 : nLeft;
		nTop = nTop < 0 ? 0 : nTop;

		// 最大值;
		var maxLeft = oSmall.offsetWidth - oFrame.offsetWidth;
		var maxTop = oSmall.offsetHeight - oFrame.offsetHeight;
		
		nLeft = nLeft > maxLeft ? maxLeft : nLeft;
		nTop = nTop > maxTop ? maxTop : nTop;

		oFrame.style.left = nLeft +"px";
		oFrame.style.top = nTop +  "px";

		// 边界检测;
		
		// 比例 已知 是4;
		// 比例分成两部分;
		var propX = oBig.offsetWidth / oFrame.offsetWidth;
		var propY = oBig.offsetHeight / oFrame.offsetHeight;

		// console.log(propX,propY);
		
		oBigImg.style.left = -nLeft * propX + "px";
		oBigImg.style.top = -nTop * propY + "px";
	}	
