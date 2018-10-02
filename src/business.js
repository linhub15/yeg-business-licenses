import { el } from './core.js'
import { Business } from './open-data-api.js'

const api = new Business();

async function init() {
    let id = new URLSearchParams(window.location.search).get('id'); 
    let business = await api.single(id);
    let card = new cardComponent(business);
    card.render('#business');
}

//>>>>>>>>>>>>>> Issue #1 Implementation
class cardComponent {
    constructor(business) {
        // make tradeName html element

        // make address html element

        // make businessCategory html element

        // make card html element with children = [tradeName, address, businessCategory]

    }

    /** @param {string} target is a DOM selector string #id | .class-name | HTML Tag */
    render(target) {
        // append the card to the target element
        
    }
}
//<<<<<<<<<<<<< END

init();