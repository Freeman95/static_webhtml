history.pushState(null, null, document.URL);
        window.addEventListener('popstate', function () {
            history.pushState(null, null, document.URL);
        });
    	function add_shoppingcart (btn) {
    		var name = $(btn).parent().siblings().eq(0).html();//获取商品名
    		var price = $(btn).parent().siblings().eq(1).html();//获取商品单价
        //追加此行
				$("#goods").append($('<tr>'+
    			'<td>'+name+'</td>'+
          '<td>'+price+'</td>'+
          	'<td align="center">'+
          		'<input type="button" value="-" onclick="drop(this);"/>'+
            	'<input type="text" size="3" readonly value="1"/>'+
            	'<input type="button" value="+" onclick="increase(this);"/>'+
            	'</td>'+
          	'<td>'+price+'</td>'+
          '<td align="center"><input class="button" type="button" value="x" onclick="deleteGood(this);"/></td>'+
          '</tr>'));
          var total = $("#total").html();
          $("#total").html(parseInt(total)+parseInt(price));
          var kucun = $(btn).parent().siblings().eq(3).html();
          $(btn).parent().siblings().eq(3).html(++kucun);
    	}
    	function increase (obj) {
    		var n = $(obj).prev().val();
    		//+1,在写入框内
    		$(obj).prev().val(++n);
    		var	price = $(obj).parent().siblings().eq(1).html();//单价
    		$(obj).parent().next().html(n*price);
    		var total = $("#total").html();
    		$("#total").html(parseInt(total)+parseInt(price));
    	}
    	function drop (obj) {
    		var n = $(obj).next().val();
    		
    		if(n<=1){
    			deleteGood(obj);
    			return;
    		}
    		$(obj).next().val(--n);
    		var price = $(obj).parent().prev().html();
    		var pay = $(obj).parent().next().html();
    		$(obj).parent().next().html(pay-price);
    		var total = $("#total").html();
    		$("#total").html(eval(total-price));
    		//$("#total").html(parseInt(total)-parseInt(price));
    	}
    	function deleteGood (obj) {
    		var td = $(obj).parent();
    		var tr = $(td).parent();
    		var total = $("#total").html();
    		var price = td.prev().html();
	   		$("#total").html(parseInt(total)-parseInt(price));
    		$(tr).remove();
    	}
      function go_for_add (obj) {
        window.location.href="../index.html";
      }