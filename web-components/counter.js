const template = document.createElement('template');

template.innerHTML = `
    <style>
    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
    }
        button:hover {
        border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
    </style>

    <button>
        counter is <span>0</span>
    </button>
`;

class Counter extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        this.value = 0;

        this.attachShadow({ mode: 'open' });

        const _shadowRoot = this.shadowRoot;
        _shadowRoot.appendChild(template.content.cloneNode(true));

        this.valueElement = _shadowRoot.querySelector('span');
        this.button = _shadowRoot.querySelector('button');
        this.button.addEventListener('click', () => {
            this.value++;
            this.valueElement.textContent = this.value; 
        })
    }
}
  
customElements.define('counter-button', Counter);