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

let buttonEl = document.querySelectorAll(".custom-hotspot-slider--card-button")

buttonEl.forEach(button=>{
    button.addEventListener("click",(event)=>{
        let val = event.target.dataset.product
        let formData = {
            'items': [{
             'id': val,
             'quantity': 1
             }]
           };
           fetch(window.Shopify.routes.root + 'cart/add.js', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(formData)
           })
           .then(response => {
             return response.json();
           })
           .then(response => {
            document.location.href = '/cart';
           })
           .catch((error) => {
             console.error('Error:', error);
           });
    })
})

