import template from './template';
import styles from './styles.scss';
import renderHTML from '../../utils/renderHTML';
import renderCSS from '../../utils/renderCSS';

class WebComponent extends HTMLElement {
  /*
   * observedAttributes
   *
   * Returns an array containing the names of the attributes you
   * want to observe.
   */
  static get observedAttributes() {
    return ['button', 'link'];
  }

  /*
   * constructor
   *
   * The constructor method is a special method for creating and
   * initializing an object created with a class. There can only be
   * one special method with the name "constructor" in a class. A
   * SyntaxError will be thrown if the class contains more than
   * one occurrence of a constructor method.
   *
   */
  constructor() {
    super();

    // attributes
    this.button = this.getAttribute('button') || '';
    this.link = this.getAttribute('link') || '';

    // attach shadow
    this.attachShadow({ mode: 'open' });

    // render to shadow
    this.render();
  }

  /*
   * render
   *
   * Invoked the custom element is initialized and/or the elements
   * observed attributes have been updated. This re-renders the template
   * and style markup to the dom.
   *
   */
  render() {
    // reset shadow
    this.shadowRoot.innerHTML = '';

    // render shadow
    renderCSS(this.shadowRoot, styles);
    renderHTML(this.shadowRoot, template(this));
  }

  /*
   * attributeChangedCallback
   *
   * Invoked each time one of the custom element's attributes is
   * added, removed, or changed. Which attributes to notice change
   * for is specified in a static get observedAttributes method
   *
   */
  attributeChangedCallback() {
    this.render();
  }
}

customElements.define('tailwindcss-intro', WebComponent);
