/*** nav ***/
$('.flowerNav').on('click',function(e){
	navActiv();	
});
$('.navButton').on('click', function(e){
	$('.navButton').removeClass('activButton');
	$(this).addClass('activButton');
	navActiv();
	showContant($(this).attr('data-name'), null);

});

function navActiv(){
	$('.flowerNav').toggleClass('flowerButton');
	$('.nav').toggleClass('activNav');	
}



/***ajax***/
function showContant(name,category,catalogTag){
	$('.container').css({"display":"none"});
	$('.container').html();	
	$('.container').fadeIn(1000);
	$.get(''+"pages/"+ name+ ".html"+'',function(data){
		$('.container').html(data);				
		if (name === 'home'){
			$('.container').css({"background":"white"});
			carousel();
			galleryLike();
		}else if(name === 'flowers'){
			$('.container').css({"background":"inherit"});
			gallerySelect();
			if (category === null ){
				addImgs("bouquets");
			}else{
				addImgs(`${category}`);	
				$('.selectVal').html(catalogTag);
				$('.navButtonHome').removeClass('activButton');
				$('.navButtonGal').addClass('activButton');
			}			
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
			 var randomNum = Math.floor((Math.random() * 6) + 1);
			 $('<img>', {"class":`galleryImg img${randomNum}`, "src":`img/${el}`}).appendTo(containerImgs);
		});
		
	}
}
/***home page**/
showContant("home", null);
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

function galleryLike(){
	$('.galleryButton').on('click',function(e){
		e.preventDefault();
		var catalog = $(e.delegateTarget).attr('data-category');
		var catalogTag = $(e.delegateTarget).find('h3').html();
		showContant("flowers",catalog, catalogTag);
	});
}