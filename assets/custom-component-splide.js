class SplideComponent extends HTMLElement {
    constructor() {
        super();
        this.splider = this;
        this.options = JSON.parse(this.dataset.options);
        this.initializeSplide();
    }

    initializeSplide() {
        this.carousel = new Splide(this.splider, this.options).mount();
        this.updateSlideColors();
        this.carousel.on('moved', () => {
            this.updateSlideColors();
            this.updateMainImage();
        });
    }

    updateSlideColors() {
        const activeEl = document.querySelector("li.custom-testimonials.is-active");
        const activeCard = activeEl.querySelector("div.custom-testimonials--slide");
        const allCards = document.querySelectorAll("div.custom-testimonials--slide");

        allCards.forEach(each => {
            let color = each.dataset.cardcolor;
            each.style.backgroundColor = color;
        });

        const activeCardColor = activeEl.dataset.activecolor;
        activeCard.style.backgroundColor = activeCardColor;
    }

    updateMainImage() {
        const activeEl = document.querySelector("li.custom-testimonials.is-active");
        const mainImage = document.getElementById("mainImage");
        const activeMainImage = activeEl.dataset.image;

        mainImage.setAttribute("src", activeMainImage);
    }
}


customElements.define("splide-component", SplideComponent);


  
  
  
  
  