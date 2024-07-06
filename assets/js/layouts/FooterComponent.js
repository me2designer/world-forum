/**********************************
 * Web Component Definition
 **********************************/
/**
 *
 *  Depth : 공통 > Footer
 *
 */

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.renderDOM();
  }

  // DOM 렌더링 -----------------
  renderDOM() {
    this.innerHTML = `        
      <footer id="footer" class="footer" role="contentinfo">
        <div class="inner">푸터 영역</div>
      </footer>
    `;
  }
}

/**********************************
 * Define as a custom web component
 **********************************/
customElements.define("footer-component", FooterComponent);
