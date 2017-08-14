/*** nav ***/
$('.flowerNav').on('click',function(e){
	$(this).toggleClass('flowerButton')
	$('.nav').toggleClass('activNav');
	$('nav').toggleClass('activTagNav');	
});
$('.navButton').on('click', function(e){
	showContant($(this).attr('data-name'));

});



/***ajax***/
function showContant(name){
	$('.container').css({"display":"none"});
	$('.container').html();	
	$('.container').fadeIn(1000);
	$.get(''+ name+ ".html"+'',function(data){
		$('.container').html(data);				
		if (name === 'home'){
			$('.container').css({"background":"white"});
			$('.navButtonHome').addClass('activHome');
			carousel();
		}else{
			$('.navButtonHome').removeClass('activHome');
			$('.container').css({"background":"inherit"});
		}

	});	
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
    setTimeout(carousel, 3000); // Change image every 2 seconds
}