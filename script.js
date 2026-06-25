let current = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index){
    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide(){
    if(current < slides.length-1){
        current++;
        showSlide(current);
    }
}

function prevSlide(){
    if(current > 0){
        current--;
        showSlide(current);
    }
}

function restart(){
    current = 0;
    showSlide(current);
}
