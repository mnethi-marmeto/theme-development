class customSplide extends HTMLElement {
    constructor() {
        super();
        this.splider = this;
        this.options = JSON.parse(this.dataset.options);
        this.initializeSplide();
    }

    initializeSplide() {
        this.carousel = new Splide(this.splider, this.options).mount();
        
        this.carousel.on('moved', () => {
        
        });
    }

}


customElements.define("custom-splide", customSplide);

