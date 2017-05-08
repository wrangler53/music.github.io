		var calcSlide;
		var id=1;
		function nextSlide(){
		$("ol.carousel-indicators li").removeClass("active");
		for(var i=0;i<calcSlide;i++){
		if($(".carousel-inner div#item"+i).attr("class") == "item item"+i+" active"){
		console.log(i);
		$("li[data-slide-to='"+i+"']").addClass("active");
		}
		}
		}
		
		function slidePage(k){
		$.getJSON('scripts/photo.json', function(data) {
		for(var i=k*3;i<(k*3)+3;i++){
		$("div.item"+k+" > .row").append("<div class='col-sm-4 col-xs-12'><a href='#'><img src="+data.images[i].url+" alt="+data.images[i].alt+" class='img-responsive'></a></div>");
		}
		});
		}
		
		function loadPage(){
		$.getJSON('scripts/photo.json', function(data) {
        var slideCount = Math.ceil(data.images.length/3);
		calcSlide = slideCount;
		var activeSlide;
		$("#myCarousel").html("<ol class='carousel-indicators'></ol><div class='carousel-inner'></div>");
		for(var i=0;i < slideCount;i++){
		if(i === 0)activeSlide="active";
		else activeSlide="";
		$(".carousel-indicators").append("<li data-target='#myCarousel' data-slide-to="+i+" class="+activeSlide+"></li>");
		$(".carousel-inner").append("<div id='item"+i+"' class='item item"+i+" "+activeSlide+"'><div class='row'></div></div>");
		}
		//$(".carousel-inner").append("<a class='left carousel-control' href='#myCarousel' data-slide='prev'><i class='fa fa-chevron-circle-left'></i></a>"+"<a class='right carousel-control' href='#myCarousel' data-slide='next'><i class='fa fa-chevron-circle-right'></i></a>");
		for(var i=0;i<slideCount;i++){
		slidePage(i);
		}		
    });
	}
	
	loadPage();
	
	$(document).ready(function() {	
	$('#myCarousel').carousel({
	interval: 3000
	});

    $('#myCarousel').on('slid.bs.carousel', function() {
		nextSlide();
	});
	
	$('#myCarousel').on('click','img', function(event){
		//$('#myCarousel').carousel('pause');
		$("#myModal").modal("show");
		event.preventDefault();
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
	
	});	