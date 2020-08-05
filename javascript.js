// ---------------------- js code for smooth scroll 
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

// ---------------- js code for auto fill skill section

var skillContainer = document.getElementsByClassName('skills-display');
var progressBars = document.querySelectorAll('.skill-progress > div') ;
var animationDone = false;
window.addEventListener('scroll' , checkScroll) ;

function initBars(){
    for(let bar of progressBars){
        bar.style.width = 0+'%' ;
    }
}

initBars() ;

function fillBars(){

    for(let bar of progressBars){
        let targetLevel = bar.getAttribute('data-value') ;
        let currLevel=0;

        let interval = setInterval(function(){

            if(currLevel > targetLevel){
                clearInterval(interval) ;
                return;
            }else{
                currLevel++ ;
                bar.style.width = currLevel + '%' ;
            }

        },5) ;

    }
}


function checkScroll(){

    var coordinates = skillContainer[0].getBoundingClientRect() ;
    if(!animationDone && coordinates.top <= window.innerHeight){
        animationDone=true;
        fillBars() ;
        // console.log('visible') ;
    }else if(coordinates.top > window.innerHeight){
        animationDone=false;
        initBars() ;
    }

}
