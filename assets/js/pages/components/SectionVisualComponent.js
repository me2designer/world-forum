/**********************************
 * Web Component Definition
 **********************************/
/**
 *
 *  Depth : 공통 > 페이지 상단 비주얼
 *
 */

class SectionVisualComponent extends HTMLElement {
  constructor() {
    super();
    this.renderDOM();
  }

  // 관찰할 속성 정의 -----------------
  static get observedAttributes() {
    return ["title", "background"];
  }

  // 속성 변경 콜백 -----------------
  attributeChangedCallback(_name, _oldValue, _newValue) {
    if (_name === "title") {
      this.querySelector("h3").textContent = _newValue;
    } else if (_name === "background") {
      this.querySelector(".c-section-visual").style.backgroundImage = `url(${_newValue})`;
    }
  }

  // DOM 렌더링 -----------------
  renderDOM() {
    this.innerHTML = `      
      <section class="c-section-visual">
        <div class="inner">
          <header class="c-section-visual-header">
            <h3 class="c-section-visual-header__title">${this.getAttribute("title")}</h3>
          </header>
        </div>
      </section>      
    `;
  }
}

/**********************************
 * Define as a custom web component
 **********************************/
customElements.define("section-visual-component", SectionVisualComponent);
