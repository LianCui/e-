
$(function(){
	// 加载所有
		$.ajax({
		   	  	url:"data/allshops.json",
		   	  	success:function(data){
		   	  		var html="";
		   	  		var html2="";
		   	  		var html3="</div>";
		   	  		var html4="";
		   	  		var html5="";
		   	  		var html6="";

		   	  		for(var i in data){
		   	  			html="<div id = 'shoplist'><h3 id = 'typetitle' class = 'typetitle'>"+data[i].type+"<span>大家喜欢吃，才是真的好吃</span></h3>"
		   	  			if(i == 0){
		   	  				html5='<a class = "active">'+data[i].type+'</a>';
		   	  			}else{
		   	  				html5='<a class = "">'+data[i].type+'</a>';
		   	  			}
		   	  			html6=html6+html5;
		   	  			for(var j in data[i].details){
		   	  				html2="<div id ='typedetails' _id='' class ='typedetails'><a href=''><img id='shoppic'src="+data[i].details[j].src+" alt=''></a><div id='shopdetailebg'><h3>"+data[i].details[j].miaoshu+"</h3><p>"+data[i].details[j].miaoshu2+"</p><spanid='picstar'><img src= 'images/star-on.png'alt=''><img src='images/star-on.png'alt=''><img src='images/star-on.png'alt=''><img src='images/star-on.png'alt=''><img src='images/star-on.png'alt=''></span><span id='avergrade'>("+data[i].details[j].grade+")</span><span id='salesm'>月售"+data[i].details[j].sales+"</span><br><span id='shopprice'>￥<span id='shopprice1'>"+data[i].details[j].price+"</span></span><div id='addcar' class='addcar'>加入购物车</div></div></div>";
		   	  				html4=html4+html2;
		   	  			}
		   	  			html=html+html4;
		   	  			$("#shoplistbg").append(html);
		   	  			html="";
		   	  			html4="";
		   	  		}
		   	  		$("#shoptypes").html(html6);

		   	  	}
		   	 
		   })

		$("#shoptypes").on("click","a",function(){
			$("#shoptypes").find("a").removeClass("active");
			$(this).addClass("active");
			$('html,body').animate({scrollTop: ($("#shoplistbg").find(".typetitle").eq($(this).index()).offset().top-$("#shoptypes").height())}, 800);
		})
			
		var height1 = ($("#shoptypes").offset().top);
		$(window).scroll(function(){
			if($(document).scrollTop()>height1){
				$("#shoptypes1").css("height",$("#shoptypes").height());
				$("#shoptypes").css("position","fixed").css("top","0px");
			}
			else{
				$("#shoptypes").css("position","").css("top","");
			}
			
		})


	$("#shoptypeleft").find("a").not("p a").click(function(){
		$("#shoptypeleft").find("a").not("p a").attr("class","");
		$(this).attr("class","active1");
		$("#shopmenubg .bg").removeClass("active3");
		$("#shopsort").find("a").css("display","block");
		$("#shopmenubg .bg").eq($(this).index()).addClass("active3");
		if($(this).index()==1 ||$(this).index()==2 ){
			$("#shopsort").find("a").css("display","none")
		}

	})
// 这是排序部分
	   $("#shopsort").find("a").on("click",function(){
			$("#shopsort").find("a").removeClass("active4");
			$(this).addClass("active4");
			$("#shoplistbg").html("");
			 $.ajax({
		   	  	url:"data/list.json",
		   	  	success:function(data){
		   	  		var html="";
		   	  		var html2="";
		   	  		var html3="</div>";
		   	  		var html4="";
		   	  		for(var i in data){
		   	  			html="<div id = 'shoplist'><h3 id = 'typetitle' class = 'typetitle'>"+data[i].type+"<span>大家喜欢吃，才是真的好吃</span></h3>"
		   	  			for(var j in data[i].details){
		   	  				html2="<div id ='typedetails' _id='' class='typedetails'><a href=''><img id='shoppic'src="+data[i].details[j].src+" alt=''></a><div id='shopdetailebg'><h3>"+data[i].details[j].miaoshu+"</h3><p>"+data[i].details[j].miaoshu2+"</p><span id='picstar'><img src= 'images/star-on.png' alt=''><img src='images/star-on.png'alt=''><img src='images/star-on.png'alt=''><img src='images/star-on.png'alt=''><img src='images/star-on.png'alt=''></span><span id='avergrade'>("+data[i].details[j].grade+")</span><span id='salesm'>月售"+data[i].details[j].sales+"</span><br><span id='shopprice'>￥<span id='shopprice1'>"+data[i].details[j].price+"</span></span><div id='addcar' class='addcar'>加入购物车</div></div></div>";
		   	  				html4=html4+html2;
		   	  			}
		   	  			html=html+html4;
		   	  			$("#shoplistbg").append(html);
		   	  			html="";
		   	  			html4="";
		   	  		}
		   	  	}
		   	  
		   })
	})
//排序部分已结束 
    

    // 评论部分 
    $("#commentype").find("a").on("click",function(){
    	$("#commentype").find("a").removeClass("active2");
    	$(this).addClass("active2");
    	$("#allcomments").html("");
    	$.ajax({
    		url:"data/com.json",
    		success:function(data){
    			var html = "";
    			var html2 = "";
    			var html3 = "";
    			var html4='<span id="userinfo"><img src="images/default-avatar.38e40d.png"alt=""></span></li>'

    			for(var i in data){
    				html='<li><h4><span id="comuser">'+data[i][0].user+'</span><span id="comtime">'+data[i][0].time+'</span></h4><div id="comresult"><p><i class="iconfont icon-xihao"></i><i class="iconfont icon-xihao"></i><i class="iconfont icon-xihao"></i><i class="iconfont icon-xihao"></i><i class="iconfont icon-xihao"></i><span id="pleased">'+data[i][0].com+'</span><span id="timesend">'+data[i][0].send+'</span></p></div>';
    				for(var j in data[i][1]){
    					
    					html2 ='<div id="specificcom"><span id="describe">'+data[i][1][j].describe+'</span><i class="iconfont icon-like"></i><i class="iconfont icon-like"></i><i class="iconfont icon-like"></i><i class="iconfont icon-like"></i><i class="iconfont icon-like"></i><span id="describeresult">'+data[i][1][j].com+'</span><a id="showpic"href="">'+data[i][1][j].pic+'</a></div>'
    					html3 = html3+html2;
    				}
    				html3 = html+html3 + html4;
    				$("#allcomments").append(html3);
    				 html = "";
    				html2 = "";
    				html3 = "";

    			}
    		}
    	})
    })
// 这里可以做购物车操作
    $("#shoplistbg").on("click",".addcar",function(){
    	alert($(this).closest(".typedetails").attr("_id"))
    	
    })



    $.ajax({
    		url:"data/shopinfo.json",
    		success:function(data){
    			$(".shoplogo").attr("src",data[0].shoppic);
    			$("#shopname11").html(data[0].shopname);
    			$(".starcount").html(data[0].stars);
    			$(".salemonth").html(data[0].sales);
    			$("#grade").html(data[0].grade);
    			$("#compare1").html(data[0].compare1);
    			$(".compare").html(data[0].compare);
    			$("#shopaddinfo").html(data[0].shopaddinfo);
    			$("#shoptimeinfo").html(data[0].shoptimeinfo);
    			$("#sendshop").html(data[0].sendshop);
    			$(".startprice").html(data[0].startprice);
    			$(".price").html(data[0].price);
    			$(".minute").html(data[0].minute);

    		}

    })



















})