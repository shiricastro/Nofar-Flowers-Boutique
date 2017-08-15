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
		}else{
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