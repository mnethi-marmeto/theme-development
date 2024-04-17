class SplideComponent extends HTMLElement{
    constructor(){
        super();
        this.splider = this;
        this.options = JSON.parse(this.dataset.options);
        this.initalizeSplide()
    }
    initalizeSplide(){
       this.carousel =  new Splide(this.splider,this.options).mount();

        let activeEl = document.querySelector("li.custom-testimonials.is-active");
        let activecard = document.querySelector("li.custom-testimonials.is-active div.custom-testimonials--slide")
        let allcards = document.querySelectorAll("div.custom-testimonials--slide");
        allcards.forEach(each=>{
            let color = each.dataset.cardcolor;
            each.style.backgroundColor = color;
        })
        let activeCardcolor = activeEl.dataset.activecolor;
        activecard.style.backgroundColor = activeCardcolor;

       this.carousel.on('moved', function () {
        let activeEl = document.querySelector("li.custom-testimonials.is-active");
        let activecard = document.querySelector("li.custom-testimonials.is-active div.custom-testimonials--slide")
        let allcards = document.querySelectorAll("div.custom-testimonials--slide");
        allcards.forEach(each=>{
            let color = each.dataset.cardcolor;
            each.style.backgroundColor = color;
        })
        let activeMainImage = activeEl.dataset.image;
        mainImage.setAttribute("src",activeMainImage);
        let activeCardcolor = activeEl.dataset.activecolor;
        activecard.style.backgroundColor = activeCardcolor;
    });
    }
}

customElements.define("splide-component", SplideComponent);

let mainImage = document.getElementById("mainImage");


  
  
  
  
  