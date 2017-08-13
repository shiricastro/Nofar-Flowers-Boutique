$('.flowerNav').on('click',function(e){
	$(this).toggleClass('flowerButton')
	$('.nav').toggleClass('activNav');
	$('nav').toggleClass('activTagNav');
	
});

var myIndex = 0;
carousel();

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