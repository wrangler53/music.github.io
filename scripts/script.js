function checkSizeWindow(){
	    if(document.documentElement.clientWidth > 767){
	    	$("div.sw").attr("id","modalWindow");
	    	}else {
	    	$("div.sw").attr("id","w");
			$(".paste").css({'border':'1px solid #ccc','padding':'5px','width':'100%','borderRadius':'3px'}).slideToggle(1000);
			}
}
	function loadPage(pageNum){
	$.getJSON('scripts/photo.json', function(data) {
		var pageCount = Math.ceil(data.images.length/6);
		$('div.lib').html("");
		for(var i=pageNum*6;(i<data.images.length)&&(i<pageNum*6+6);i++){
		    $('div.lib').append("<div class='col-md-4 col-sm-6 gap'>"+
		        					"<div class='im'>"+
		        						"<img alt='"+data.images[i].alt+"' src='"+data.images[i].url+"' data-toggle='modal' data-target='#modalWindow'>"+
		        					"</div>"+"<div class='paste paste"+i+"'><p><b>На фото город: </b>"+data.images[i].alt+"<br> <b>Описание:</b> "+data.images[i].description+"</p></div>"+
		        				"</div>");
		}
		$('ul.pagination').html("");
		if(pageNum>0){
				$('ul.pagination').append("<li><a href='#' onclick='loadPage("+(pageNum-1)+")'><i class='glyphicon glyphicon-chevron-left'></i></a></li>");
			}
		for(var i=0;i<pageCount;i++){
			var activeName="";
			if(i==pageNum){
				var activeName = " class='activePage' ";
			}
			$('ul.pagination').append("<li"+activeName+"><a href='#' onclick='loadPage("+(i)+")' class='page'>"+(i+1)+"</a></li>");
		}
		if(pageNum<pageCount-1){
			$('ul.pagination').append("<li><a href='#' onclick='loadPage("+(pageNum+1)+")'><i class='glyphicon glyphicon-chevron-right'></i></a></li>");
		}
	});
}

$('div.lib').on('click', 'div img', function(){
	checkSizeWindow();
	var s = $(this).attr('src');
	var a = $(this).attr("alt");
	$("div.modal-body img").attr('src',s);
	$(".modal-header h4").html("<p>Город "+a+"</p>");
	$.getJSON('scripts/photo.json', function(data) {
        for(var i=0;i<data.images.length;i++){
			if(data.images[i].alt === a){
	       		$("div.modal-body p").html("<p class='content'><b>На фото город: </b>"+data.images[i].alt+"<br> <b>Описание:</b> "+data.images[i].description);
            }
        }
    });
});

loadPage(0);