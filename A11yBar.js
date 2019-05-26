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
    bottom: 10px;
    right: 10px;
    box-sizing: border-box;
    z-index: 99;
  }

  :host.cursor {
    cursor: url(./cursor.svg), auto;
  }

  .btn-a11y {
    border: none;
    cursor: pointer;
    position: fixed;
    bottom: 10px;
    right:0;
    background-color: transparent;
  }

  .a11y-menu {
    list-style: none;
    position: relative;
    bottom: 60px;
    padding: unset;
    margin: unset;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(3,100px);
  }

  .a11y-menu:after {
    content: ' ';
    position: absolute;
    height: 0;
    width: 0;
    bottom: -20px;
    right: 9px;
    border: 10px solid transparent;
    border-top-color: #333;
  }
  
  .a11y-s1 li button:focus {
    border: dashed 4px #c00 !important;
  }

  li {
    position: relative;
  }

  .active-stage {
    position: absolute; 
    top: 5px;
    right: 5px;
    background-color: green;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    color: white;
    text-align: center;
  }

  li button {
    margin: unset;
    outline: unset;
    width: 100%;
    height: -webkit-fill-available;
    padding: 5px;
    // border: 1px solid black;
    background-color: white;
    line-height: inherit;
    font-size: inherit;
    cursor: pointer;
    transition: all .3s;
  }

  li button:hover,li button:focus {
    background-color: rgb(197, 238, 255);
  }

  li:focus {
    outline: unset;
  }

  .hide {
    display : none;
  }
  
</style>

<button class="btn-a11y" aria-label="a11y menu button">
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="48" height="48" viewBox="0 0 119.81 139.81">
    <circle cx="60" cy="60" r="60" fill="blue"/>
    <path fill="#FFFFFF" stroke="black" stroke-width="2" d="M61.819,0.004C27.976-0.395,0.16,26.298,0.001,60.469c-0.158,33.974,27.06,61.323,60.731,61.323c33.746,0.009,60.964-26.923,61.077-60.63C121.924,27.252,94.89,0.394,61.819,0.004z M60.36,109.973c-27.076-0.13-48.64-22.091-48.64-48.966C11.707,33.968,33.25,11.91,60.319,11.591c27.67-0.325,49.806,22.09,49.785,49.369C110.083,88.384,88.163,110.106,60.36,109.973z"/>
    <path fill="#FFFFFF" stroke="black" stroke-width="1" d="M91.854,42.835c-0.849-0.341-1.736-0.434-2.637-0.425c-4.025,0.043-8.023,0.503-12.029,0.817c-8.109,0.636-16.222,1.053-24.354,0.63c-6.756-0.351-13.507-0.802-20.261-1.19c-0.4-0.023-0.548-0.232-0.707-0.516c-0.134-0.239-0.251-0.43-0.574-0.147c-0.696,0.608-1.481,1.12-2.141,1.762c-1.379,1.341-1.076,3.027,0.658,3.88c0.919,0.452,1.923,0.634,2.924,0.748c4.282,0.489,8.588,0.696,12.881,1.051c2.213,0.183,4.462,0.076,6.628,0.686c1.809,0.51,2.688,1.638,2.789,3.515c0.025,0.461,0.038,0.929-0.011,1.387c-0.219,2.011-0.455,4.021-0.698,6.03c-0.656,5.396-1.457,10.768-2.695,16.067c-1.392,5.962-3.209,11.813-4.662,17.76c-0.225,0.92-0.142,1.752,0.173,2.62c0.636,1.756,0.605,1.68,2.43,1.382c2.189-0.357,3.417-1.566,4.147-3.64c1.998-5.676,3.46-11.491,4.779-17.349c0.422-1.874,0.865-3.734,2.587-4.994c0.709,1.098,1.829,1.934,2.18,3.342c1.565,6.274,3.291,12.505,5.151,18.699c0.42,1.401,1.133,2.665,2.234,3.656c1.077,0.97,2.374,0.902,3.594,0.445c1.016-0.38,1.051-1.445,1.097-2.365c0.064-1.298-0.415-2.5-0.83-3.696c-3.854-11.115-6.249-22.533-7.092-34.267c-0.128-1.781-0.329-3.568-0.073-5.366c0.277-1.95,1.195-3.06,3.102-3.617c0.925-0.27,1.875-0.349,2.826-0.401c4.879-0.267,9.76-0.514,14.64-0.777c1.48-0.08,2.938-0.289,4.255-1.037c0.89-0.506,1.472-1.248,1.415-2.312C93.519,44.076,92.932,43.268,91.854,42.835z"/>
    <path fill="#FFFFFF" stroke="black" stroke-width="1" d="M60.836,40.646c5.599,0.032,10.036-4.362,10.068-9.969c0.032-5.533-4.361-10.086-9.755-10.112c-5.678-0.027-10.238,4.36-10.27,9.881C50.846,36.101,55.251,40.614,60.836,40.646z"/>
  </svg>
</button>

<ul class="a11y-menu hide">
  <li class="desaturate"> 
    <span class="active-stage hide"></span>
    <button aria-label="desaturate">
        Desaturate
    </button>
  </li>
  <li class="contrast"> 
    <span class="active-stage hide"></span>
    <button aria-label="contrast">
      Contrast 
    </button>
  </li>
  <li class="keyboard"> 
    <span class="active-stage hide">√</span>
    <button aria-label="keyboard">
      Keyboard 
    </button>
  </li>
  <li class="cursor">
    <span class="active-stage hide">√</span>
    <button aria-label="cursor">
      Cursor
    </button>
  </li>
  <li class="zoom">
    <span class="active-stage hide"></span>
    <button aria-label="zoom">
      Zoom
    </button>
  </li>
  <li  class="font">
    <span class="active-stage hide">√</span>
    <button aria-label="font">
      Font
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
    this.$menu.addEventListener('click', (ev) => this._toggleStyle(ev.target.parentElement.classList[0]));

    if (localStorage['a11y']) {
      this.state = JSON.parse(localStorage['a11y']);
      this._setStyleFromStorage();
    } else {
      this.state = {
        zoom: {
          classPrefix: 'a11y-s4',
          count: 0,
          max: 3
        },
        contrast: {
          classPrefix: 'a11y-s3',
          count: 0,
          max: 2
        },
        desaturate: {
          classPrefix: 'a11y-s5',
          count: 0,
          max: 2
        },
        cursor: {
          classPrefix: 'a11y-s2',
          active: false
        },
        font: {
          classPrefix: 'a11y-font',
          active: false
        }
      }
    }

  }

  _setStyleFromStorage() {
    for (let key in this.state) {
      if (key === 'cursor' || key === 'font') {
        this._checkIsActive(key);
        continue;
      }
      let elCount = this.state[key].count;
      if (elCount) {
        document.documentElement.classList.add(`${this.state[key].classPrefix}-${elCount}`);
        const elSpan = this._shadowRoot.querySelector(`.${key} span`);
        elSpan.textContent = elCount;
        elSpan.classList.remove('hide');
      }
    }
  }

  // toggle menu
  _toggleMenu() {
    this.$menu.classList.toggle('hide');
  }

  // invoke toggle function by class name
  _toggleStyle(type) {
    switch (type) {
      case 'desaturate':
      case 'contrast':
      case 'zoom':
        this._toggleStyleByType(type);
        break;
      case 'keyboard':
        this._toggleKeyboard();
        break;
      case 'cursor':
        this._toggleOnceOnly('cursor')
        break;
      case 'font':
        this._toggleOnceOnly('font')
        break;
      default:
        break;
    }
    this._saveToStorage();
  }

  _toggleKeyboard() {
    this.$menu.classList.toggle('a11y-s1');
    this._toggleStageSpan('keyboard');

    const elTypes = ['A', 'INPUT', 'BUTTON'];
    elTypes
      .reduce((els, elType) => els.concat(Array.from(document.documentElement.querySelectorAll(elType))), [])
      .forEach(el => {
        el.tabIndex = 0;
        el.classList.toggle('a11y-s1');
      });
  }

  _toggleOnceOnly(type) {
    const a11yType = this.state[type];
    document.documentElement.classList.toggle(a11yType.classPrefix);
    this._toggleStageSpan(type);
    a11yType.active = !a11yType.active;
  }

  _checkIsActive(type) {
    const a11yType = this.state[type];
    if (a11yType.active) {
      document.documentElement.classList.add(a11yType.classPrefix);
      this._shadowRoot.querySelector(`.${type} span`).classList.remove('hide');
    }
  }

  _toggleStyleByType(type) {
    const a11yType = this.state[type];
    const prefix = a11yType.classPrefix;

    const elClassList = document.documentElement.classList;

    elClassList.remove(`${prefix}-${a11yType.count}`);

    const elSpan = this._shadowRoot.querySelector(`.${type} span`);

    this._setTypeCount.call(a11yType, elSpan);

    if (!a11yType.count) {
      elSpan.classList.add('hide');
    } else {
      elSpan.classList.remove('hide');
      elClassList.add(`${prefix}-${a11yType.count}`);
    }
  }

  _setTypeCount(el) {
    this.count <= this.max ? this.count += 1 : this.count = 0;
    el.textContent = this.count;
  }

  _toggleStageSpan(type) {
    this._shadowRoot.querySelector(`.${type} span`).classList.toggle('hide');
  }

  _saveToStorage() {
    localStorage['a11y'] = JSON.stringify(this.state);
  }

}

window.customElements.define('a11y-menu', a11yMenu);
