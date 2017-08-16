/*** nav ***/
$('.flowerNav').on('click',function(e){
	navActiv();	
});
$('.navButton').on('click', function(e){
	$('.navButton').removeClass('activButton');
	$(this).addClass('activButton');
	navActiv();
	showContant($(this).attr('data-name'));

});

function navActiv(){
	$('.flowerNav').toggleClass('flowerButton');
	$('.nav').toggleClass('activNav');	
}



/***ajax***/
function showContant(name){
	console.log("this is the ajax function");
	$('.container').css({"display":"none"});
	$('.container').html();	
	$('.container').fadeIn(1000);
	$.get(''+"pages/"+ name+ ".html"+'',function(data){
		$('.container').html(data);				
		if (name === 'home'){
			$('.container').css({"background":"white"});
			carousel();
		}else if(name === 'flowers'){
			$('.container').css({"background":"inherit"});
			gallerySelect();
			addImgs("bouquets");
		}else{
			$('.container').css({"background":"inherit"});
		}

	});	
}
function gallerySelect(){
	$('.selectData').on('click',function(e){
		$('.select').addClass('activData');
		$(this).css({"display":"none"});
	});
	$('.select li').on('click',function(e){
		var val = $(this).html();
		addImgs($(this).attr('data-category'));
		$('.selectVal').html(val);
		$('.select').removeClass('activData');
		$('.selectData').css({"display":"inline"});

	});

}

function addImgs(dataName){
	$.getJSON('pages/img.json',function(data){
		data.find(item => {if(item[dataName]){category(item[dataName])}});
	});	
	function category(imgs){
		var containerImgs =	$('.allPicturs');
		containerImgs.css({"display":"none"});
		containerImgs.html("");	
		containerImgs.fadeIn(1000);
		$(imgs).each(function(i,el){
			console.log(el);
			 $('<img>', {"class":`galleryImg`, "src":`img/${el}`}).appendTo(containerImgs);
		});
		
	}
}
/***home page**/
showContant("home");
var myIndex = 0;

function carousel() {
    var i;
    var imgSlide = $(".mySlides");
    imgSlide.each(function(i,el){
    	$(el).css({"display": "none"}); 
    });
    myIndex++;
    if (myIndex > imgSlide.length) {myIndex = 1}    
    $(imgSlide[myIndex-1]).css({"display": "block"});   
    setTimeout(carousel, 3000); 
}