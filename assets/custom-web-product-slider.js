class productSlider extends HTMLElement{
    constructor(){
        super()
        this.initalize()
        console.log("asdf");
    }

    initalize(){
      new Splide( '#thumbnail-carousel', {
            fixedWidth: 100,
            gap       : 10,
            rewind    : true,
            pagination: false,
        }).mount();
    }
}

customElements.define("product-slider",productSlider)