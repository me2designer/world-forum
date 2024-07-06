/**********************************
 * Web Component Definition
 **********************************/
/**
 *
 *  Depth : 공통 > 페이지 바로가기
 *
 */

class SectionShortcutComponent extends HTMLElement {
  constructor() {
    super();
    this.renderDOM();
  }

  // DOM 렌더링 -----------------
  renderDOM() {
    this.innerHTML = `      
      <section class="c-section-shortcut">
        <div class="inner">페이지 바로가기 내용</div>
      </section>      
    `;
  }
}

/**********************************
 * Define as a custom web component
 **********************************/
customElements.define("section-shortcut-component", SectionShortcutComponent);
