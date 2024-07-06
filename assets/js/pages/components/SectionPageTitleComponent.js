/**********************************
 * Web Component Definition
 **********************************/
/**
 *
 *  Depth : 공통 > 페이지 상단 비주얼
 *
 */

class SectionPageTitleComponent extends HTMLElement {
  constructor() {
    super();
    this.renderDOM();
  }

  // 관찰할 속성 정의 -----------------
  static get observedAttributes() {
    return ["text-kr", "text-en"];
  }

  // 속성 변경 콜백 -----------------
  attributeChangedCallback(_name, _oldValue, _newValue) {
    if (_name === "text-kr") {
      this.querySelector(".txt-kr").textContent = _newValue;
    } else if (_name === "text-en") {
      this.querySelector(".txt-en").textContent = _newValue;
    }
  }

  // DOM 렌더링 -----------------
  renderDOM() {
    this.innerHTML = `      
      <section class="c-section-page-title">
        <div class="inner">
          <header class="c-section-page-title-header">
            <h3 class="c-section-page-title-header__title">
              <span class="txt-kr">${this.getAttribute("text-kr")}</span>
              <span class="txt-en">${this.getAttribute("text-en")}</span>
            </h3>
          </header>
        </div>
      </section>    
    `;
  }
}

/**********************************
 * Define as a custom web component
 **********************************/
customElements.define("section-page-title-component", SectionPageTitleComponent);
