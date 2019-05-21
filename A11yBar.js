'use strict'
console.log('in a11y');

const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
  display: block;
  font-family: sans-serif;
  text-align: right;
  position: fixed;
  top: 10px;
  right: 10px;
  }

  :host.cursor {
    cursor: url(./cursor.svg), auto;
  }

  .a11y-menu {
  border: none;
  cursor: pointer;
  postilion: absolute;
  background-color: transparent;
  }

  .menu {
    list-style: none;
    position: relative;
    bottom: 0px;
    padding: unset;
    margin: unset;
    border-collapse: collapse;
  }

  li button {
    margin: unset;
    outline: unset;
    width: 100%;
    padding: 5px;
    border: 1px solid black;
    background-color: white;
    line-height: inherit;
    font-size: inherit;
    cursor: pointer;
    transition: all .3s;
  }

  li button:hover,li button:focus {
    background-color: skyblue;
  }

  .hide {
    display : none;
  }

</style>

<button class="a11y-menu" aria-label="a11y menu">
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="48" height="48" viewBox="0 0 119.81 139.81">
  <circle cx="60" cy="60" r="60" fill="blue"/>
  <path fill="#FFFFFF" stroke="black" stroke-width="2" d="M61.819,0.004C27.976-0.395,0.16,26.298,0.001,60.469c-0.158,33.974,27.06,61.323,60.731,61.323c33.746,0.009,60.964-26.923,61.077-60.63C121.924,27.252,94.89,0.394,61.819,0.004z M60.36,109.973c-27.076-0.13-48.64-22.091-48.64-48.966C11.707,33.968,33.25,11.91,60.319,11.591c27.67-0.325,49.806,22.09,49.785,49.369C110.083,88.384,88.163,110.106,60.36,109.973z"/>
  <path fill="#FFFFFF" stroke="black" stroke-width="1" d="M91.854,42.835c-0.849-0.341-1.736-0.434-2.637-0.425c-4.025,0.043-8.023,0.503-12.029,0.817c-8.109,0.636-16.222,1.053-24.354,0.63c-6.756-0.351-13.507-0.802-20.261-1.19c-0.4-0.023-0.548-0.232-0.707-0.516c-0.134-0.239-0.251-0.43-0.574-0.147c-0.696,0.608-1.481,1.12-2.141,1.762c-1.379,1.341-1.076,3.027,0.658,3.88c0.919,0.452,1.923,0.634,2.924,0.748c4.282,0.489,8.588,0.696,12.881,1.051c2.213,0.183,4.462,0.076,6.628,0.686c1.809,0.51,2.688,1.638,2.789,3.515c0.025,0.461,0.038,0.929-0.011,1.387c-0.219,2.011-0.455,4.021-0.698,6.03c-0.656,5.396-1.457,10.768-2.695,16.067c-1.392,5.962-3.209,11.813-4.662,17.76c-0.225,0.92-0.142,1.752,0.173,2.62c0.636,1.756,0.605,1.68,2.43,1.382c2.189-0.357,3.417-1.566,4.147-3.64c1.998-5.676,3.46-11.491,4.779-17.349c0.422-1.874,0.865-3.734,2.587-4.994c0.709,1.098,1.829,1.934,2.18,3.342c1.565,6.274,3.291,12.505,5.151,18.699c0.42,1.401,1.133,2.665,2.234,3.656c1.077,0.97,2.374,0.902,3.594,0.445c1.016-0.38,1.051-1.445,1.097-2.365c0.064-1.298-0.415-2.5-0.83-3.696c-3.854-11.115-6.249-22.533-7.092-34.267c-0.128-1.781-0.329-3.568-0.073-5.366c0.277-1.95,1.195-3.06,3.102-3.617c0.925-0.27,1.875-0.349,2.826-0.401c4.879-0.267,9.76-0.514,14.64-0.777c1.48-0.08,2.938-0.289,4.255-1.037c0.89-0.506,1.472-1.248,1.415-2.312C93.519,44.076,92.932,43.268,91.854,42.835z"/>
  <path fill="#FFFFFF" stroke="black" stroke-width="1" d="M60.836,40.646c5.599,0.032,10.036-4.362,10.068-9.969c0.032-5.533-4.361-10.086-9.755-10.112c-5.678-0.027-10.238,4.36-10.27,9.881C50.846,36.101,55.251,40.614,60.836,40.646z"/>
  </svg>
</button>

<ul class="menu hide">
  <li> 
    <button class="Desaturate" aria-label="desaturate">
      Desaturate
    </button>
  </li>
  <li> 
    <button class="Contrast" aria-label="contrast">
      Contrast 
    </button>
  </li>
  <li> 
    <button class="Keyboard" aria-label="keyboard">
      Keyboard 
    </button>
  </li>
  <li>
    <button class="Cursor" aria-label="cursor">
      Cursor
    </button>
  </li>
  <li>
    <button class="Zoom" aria-label="zoom">
      Zoom
    </button>
  </li>
  <li>
    <button class="dark" disabled>
      Dark mode
    </button>
  </li>
</ul>
`

class a11yMenu extends HTMLElement {

  constructor() {
    super();

    // create shadow root
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    // a11y button 
    this.$a11yButton = this._shadowRoot.querySelector('button');
    this.$a11yButton.addEventListener('click', () => this._toggleMenu());

    // a11y item click event
    this.$menu = this._shadowRoot.querySelector('ul');
    this.$menu.addEventListener('click', (event) => this._toggleStyle(event.target.classList[0]));


    this.state = {
      zoom: 0,
      contrast: 0,
      desaturate: 0
    }

  }

  // toggle menu
  _toggleMenu() {
    this.$menu.classList.toggle('hide');
  }

  // invoke toggle function by class name
  _toggleStyle(className) {

    // var toggle = new Function(`return this._toggle${className}()`);
    // toggle.call(this);
    switch (className) {
      case 'Desaturate':
        this._toggleDesaturate();
        break;
      case 'Contrast':
        this._toggleContrast();
        break;
      case 'Keyboard':
        this._toggleDesaturate();
        break;
      case 'Cursor':
        this._toggleCursor();
        break;
      case 'Zoom':
        this._toggleZoom();
        break;
    }
  }

  _toggleDesaturate() {
    document.documentElement.classList.remove(`a11y-s5-${this.state.desaturate}`);
    this.state.desaturate < 2 ? this.state.desaturate += 1 : this.state.desaturate = 0;
    document.documentElement.classList.add(`a11y-s5-${this.state.desaturate}`);
  }

  _toggleContrast() {
    document.documentElement.classList.remove(`a11y-s3-${this.state.contrast}`);
    this.state.contrast <= 2 ? this.state.contrast += 1 : this.state.contrast = 0;
    document.documentElement.classList.add(`a11y-s3-${this.state.contrast}`);
  }

  _toggleKeyboard() {
    const elTypes = ['A', 'INPUT', 'BUTTON'];
    elTypes.reduce((a11y, elType) => a11y.concat(Array.from(document.body.querySelectorAll(elType))), [])
      .map(el => {
        el.tabIndex = 0;
        el.classList.toggle('a11y-s1');
      });
  }

  _toggleCursor() {
    document.documentElement.classList.toggle('a11y-s2');
  }

  _toggleZoom() {
    document.documentElement.classList.remove(`a11y-s4-${this.state.zoom}`);
    this.state.zoom <= 3 ? this.state.zoom += 1 : this.state.zoom = 0;
    document.documentElement.classList.add(`a11y-s4-${this.state.zoom}`);
  }
}

window.customElements.define('a11y-menu', a11yMenu);
