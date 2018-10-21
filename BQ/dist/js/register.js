window.onload = function(){ 
    //密码
    $("b").hide();
    $(".ok").hide();
    $("#pwd").blur(function(){
        var oRes = this.value;
        $("#pwd").value = oRes;
        var oReg = /^[a-zA-z-_0-9!@#$%^*.-]{6,20}$/;
        if(oRes != ""){
            if(oReg.test(oRes)){  //
              
               $("b").hide();
               $(".ok2").show();
                this.pass = true;  //
            }else{
                $(".test2").show();
                $(".t22").show()
                .siblings().hide();
    
                this.pass = false  //
            }
        }else{
            $(".test2").show();
            $(".t21").show()
            .siblings().hide();
            this.pass = false  //

        }
        
    })

    //确认密码
    
    $("#sec_pwd").blur(function(){
        var oRes = this.value;
        var oRes2 = document.querySelector("#pwd").value;
        var oReg = /^[a-zA-z-_0-9!@#$%^*.-]{6,20}$/;
        if(oRes != ""){
            if(oReg.test(oRes)){ 
                if(oRes == oRes2){
                    $("b").hide();
                    $(".ok3").show();
                    var s = this.pass = true;
                }else{
                    $(".test3").show();
                   $(".t32").show()
                   .siblings().hide();
                    var d=this.pass = false
                }
            }else{
                $(".test3").show();
                $(".t33").show()
                .siblings().hide();
                this.pass = false  //
            }
          
        }else{
            $(".test3").show();
            $(".t31").show()
            .siblings().hide();
            this.pass = false  //

        }
    })
   
    //手机验证
    $("#mobile").blur(function(){
        var oRes = this.value;
        var oReg = /^1[34578]\d{9}$/;
        if(oRes != ""){
            if(oReg.test(oRes)){
                
                $("b").hide();
                $(".ok1").show();
                var f= this.pass = true;
                //console.log(f);
            }else{
                var a = this.pass = false;
                //console.log(a)
                $(".test1").show();
                $(".t12").show()
                .siblings().hide()
            }
        }else{
            $(".test1").show();
            $(".t11").show()
            .siblings().hide();
            this.pass = false  //
        }

       })

    //提交验证
    $("#btn").click(function(event){
        var evt = event || window.event;  
        var oUser = document.querySelector("#mobile");
        var oUpwd = document.querySelector("#pwd");
        var oUpwd2 = oUpwd.value;
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
            url: "http://localhost:8888/proxy/localhost/BQ/register.php",
            data: `username=${oUser.value}&password=${oUpwd.value}`,			  
        })
        .then(function(res){
            console.log(res)
            if(res == "注册成功"){
                window.location.href = "http://localhost:8888/index.html";
            }
        })
    })
}

