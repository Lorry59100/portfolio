// FONCTION % CERCLE 1
function Circlle(el) {
    $(el).circleProgress({fill: {color : '#b5fd1c'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        $(this).find('strong.str1').text(String(stepValue.toFixed(2)+'%')
        );
    });
};

// FONCTION % CERCLE 2
function Circlle2(el) {
    $(el).circleProgress({fill: {color : '#b5fd1c'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        $(this).find('strong.str2').text(String(stepValue.toFixed(2)+'%')
        );
    });
};

Circlle('.round')
Circlle2('.round2')

// FONCTION CAROUSEL PERSO 1
var carouselId = document.getElementById('myCarousel')

var carousel = {

    hidden : carouselId.querySelectorAll('.hidden'),
    btnPrev : carouselId.querySelector('.btn-prev'),
    btnNext : carouselId.querySelector('.btn-next'),
    itemIndex : 0,

    prev() {
        if (this.itemIndex != 0) {
            this.hidden[this.itemIndex].classList.remove('visible')
            this.itemIndex --
            this.hidden[this.itemIndex].classList.add('visible')
        }
        else {
            this.hidden[this.itemIndex].classList.remove('visible')
            this.itemIndex = this.hidden.length-1
            this.hidden[this.itemIndex].classList.add('visible')
        }
    },
    next() {
        if (this.itemIndex != this.hidden.length-1) {
            this.hidden[this.itemIndex].classList.remove('visible') //Retire la classe .visible de l'item courant
            this.itemIndex ++ //On incrémente l'item courant
            this.hidden[this.itemIndex].classList.add('visible') //Ajout de la classe .visible au nouvel item 
        }
        else {
            this.hidden[this.itemIndex].classList.remove('visible')
            this.itemIndex = 0
            this.hidden[this.itemIndex].classList.add('visible')
            this.hidden[this.itemIndex].classList.add('visible')
        }
    }
}

carousel.btnPrev.addEventListener('click', function() {
    carousel.prev()
})
carousel.btnNext.addEventListener('click', function() {
    carousel.next()
})

// FONCTION CAROUSEL PERSO 2
var carouselId2 = document.getElementById('myCarousel2')

var carousel2 = {

    hidden2 : carouselId2.querySelectorAll('.hidden2'),
    btnPrev2 : carouselId2.querySelector('.btn-prev2'),
    btnNext2 : carouselId2.querySelector('.btn-next2'),
    itemIndex2 : 0,

    prev2() {
        if (this.itemIndex2 != 0) {
            this.hidden2[this.itemIndex2].classList.remove('visible2')
            this.itemIndex2 --
            this.hidden2[this.itemIndex2].classList.add('visible2')
        }
        else {
            this.hidden2[this.itemIndex2].classList.remove('visible2')
            this.itemIndex2 = this.hidden2.length-1
            this.hidden2[this.itemIndex2].classList.add('visible2')
        }
    },
    next2() {
        if (this.itemIndex2 != this.hidden2.length-1) {
            this.hidden2[this.itemIndex2].classList.remove('visible2') //Retire la classe .visible de l'item courant
            this.itemIndex2 ++ //On incrémente l'item courant
            this.hidden2[this.itemIndex2].classList.add('visible2') //Ajout de la classe .visible au nouvel item 
        }
        else {
            this.hidden2[this.itemIndex2].classList.remove('visible2')
            this.itemIndex2 = 0
            this.hidden2[this.itemIndex2].classList.add('visible2')
            this.hidden2[this.itemIndex2].classList.add('visible2')
        }
    }
}

carousel2.btnPrev2.addEventListener('click', function() {
    carousel2.prev2()
})
carousel2.btnNext2.addEventListener('click', function() {
    carousel2.next2()
});

// TIMELINE*****//

$('.dot:nth-child(1)').click(function(){
	$('.inside').animate({
	  'width' : '20%'
	}, 500);
  });
  $('.dot:nth-child(2)').click(function(){
	$('.inside').animate({
	  'width' : '40%'
	}, 500);
  });
  $('.dot:nth-child(3)').click(function(){
	$('.inside').animate({
	  'width' : '60%'
	}, 500);
  });
  $('.dot:nth-child(4)').click(function(){
	$('.inside').animate({
	  'width' : '80%'
	}, 500);
  });
  if ($('#switch1').not(':checked')){
	$('.modal').wrap('<div class="mask"></div>')
	  $('.mask').click(function(){
		$(this).fadeOut(300);
		$('.mask article').animate({
		  'top' : '-100%'
		}, 300)
	  });
  
	  $('.dot').click(function(){
		var modal = $(this).attr('id');
		$('.mask').has('article.' + modal).fadeIn(300);
		$('.mask article.' + modal).fadeIn(0).animate({
		  'top' : '10%'
		}, 300);
	  });
  }
  $("#switch1").click(function(){
	if ($('#switch1').is(':checked')){
	  $('.modal').unwrap('<div class="mask"></div>');
	  $('.modal').hide();
	  $('.modal').addClass('nobox');
	  $('.dot').click(function(){
	  var modal = $(this).attr('id');
	  $('article.nobox').hide()
	  $('article.nobox.' + modal).fadeIn(200)
	  });
	} else {
	  $('article').removeClass("nobox");
	  $('.modal').wrap('<div class="mask"></div>')
	  $('.mask').click(function(){
		$(this).fadeOut(300);
		$('.mask article').animate({
		  'top' : '-100%'
		}, 300)
	  });
  
	  $('.dot').click(function(){
		var modal = $(this).attr('id');
		$('.mask').has('article.' + modal).fadeIn(300);
		$('.mask article.' + modal).fadeIn(0).animate({
		  'top' : '10%'
		}, 300);
	  });
	}
  })