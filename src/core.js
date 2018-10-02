/**
 * @param {string} tag HTML Tag e.g. 'div', 'p'
 * @param {attributeObject | null} attrs {class: 'container', id: 'submitBtn'}
 * @param  {...any} children Can be other HTMLElement Objects or a single string
 */
function el(tag, attrs, ...children) {
  let element = tag ? document.createElement(tag) : null;
  let keys = attrs && element ? Object.keys(attrs) : null;
  let childNodes = children && element ? children : null;
  for (let i in keys) {
    element.setAttribute(keys[i], attrs[keys[i]]);
  }
  for (let node of childNodes) {
    element.appendChild(
      node instanceof HTMLElement ? node : document.createTextNode(node));
  }
  return element;
}
function makeRoute(controller, param, value) {
  return param && value ? `/${controller}?${param}=${value}` : `/${controller}`;
}

class route {
  constructor(controller, param, value) {
    this.url = param && value ? `/${controller}?${param}=${value}` : `/${controller}`;
  }
  go() {
    window.location.assign(this.url);
  }
}
export {el, route};