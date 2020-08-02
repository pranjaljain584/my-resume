
var currentPos=0;
var targetPos=0;

function myScroll(currentPos , targetPos ){
	var scrollInterval=setInterval(function(){
		if(currentPos>=targetPos){
			clearInterval(scrollInterval);
			return ;
		}
		currentPos+=50;
		window.scrollBy(0,50);
	},20);
}

var anchorTags = document.querySelectorAll('nav a') ;

for(var i=0 ; i< anchorTags.length ; i++){
    anchorTags[i].addEventListener('click' , function(event){
        event.preventDefault() ;
        var targetSectionId = this.getAttribute("href") ;
        targetSectionId = targetSectionId.substr(1) ;
        var targetSection=document.getElementById(targetSectionId) ;
        // console.log(targetSection) ;
        var coordinates = targetSection.getBoundingClientRect();
        myScroll(0,coordinates.y) ;
    }) ;
}
