import { el, route } from './core.js';
import { Business } from './open-data-api.js';
const api = new Business();

const params = new URLSearchParams(window.location.search);

async function init(params) {
    let category = params.get('category');
    let q = params.get('q');
    displayBusineses('#results', category
        ? await api.businessesByCategory(category)
        : await api.businessesByName(q));
}

function displayBusineses(selector, data) {
    let row = el('div', {class: 'row'});
    for (let item of data) {
        row.appendChild(el('a'
        ,{ class: 'list-item'
            ,href: new route('business','id',item.externalid).url}
        ,item.trade_name));
    }
    let list = el('div', {class: 'list'}, row);
    document.querySelector(selector).appendChild(list);
}
init(params);