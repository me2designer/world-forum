/**********************************
 * Web Component Definition
 **********************************/
/**
 *
 *  Depth : 공통 > Header
 *
 */

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.renderDOM();
    this.initVariables();
    this.activateGNBLink();
  }

  // DOM 렌더링 -----------------
  renderDOM() {
    this.innerHTML = `        
        <header id="header" class="header" role="banner">          
            <h1 class="header-logo">
              <a class="header-logo__link" href="/">
                <img class="logo" src="https://placehold.co/270x80" alt="제10차 세계한인정치인포럼" />
              </a>
            </h1>

            <!-- Mobile Meun -->
            <div class="hamburger-menu">
              <button class="btn-hamburger-menu" type="button" title="메뉴보기">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </button>
            </div>

            <!-- GNB -->
            <nav id="gnb">
              <ul class="list-gnb">
                <li class="list-gnb__item">
                  <a class="link-gnb" href="/pages/forum/event_overview.html">
                    <strong class="txt-en">ABOUT FORUM</strong>
                    <span class="txt-kr">포럼소개</span>
                  </a>
                  <ul class="list-page">
                    <li class="list-page__item">
                      <a class="link-page" href="/pages/forum/event_overview.html">
                        <span class="txt-kr">행사개요</span>
                        <span class="txt-en">Outline</span>
                      </a>
                    </li>
                    <li class="list-page__item">
                      <a class="link-page" href="/pages/forum/center_intro.html">
                        <span class="txt-kr">재외동포협력센터소개</span>
                        <span class="txt-en">Introduction</span>
                      </a>
                    </li>
                    <li class="list-page__item">
                      <a class="link-page" href="/pages/forum/directions.html">
                        <span class="txt-kr">오시는 길</span>
                        <span class="txt-en">Directions</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="list-gnb__item">
                  <a class="link-gnb" href="/pages/politicians/intro.html">
                    <strong class="txt-en">INTRO</strong>
                    <span class="txt-kr">세계한인정치인협의회</span>
                  </a>
                  <ul class="list-page">
                    <li class="list-page__item">
                      <a class="link-page" href="/pages/politicians/intro.html">
                        <span class="txt-kr">협의회소개</span>
                        <span class="txt-en">Introduction</span>
                      </a>
                    </li>
                    <li class="list-page__item">
                      <a class="link-page" href="/pages/politicians/greetings.html">
                        <span class="txt-kr">인사말</span>
                        <span class="txt-en">Greetings</span>
                      </a>
                    </li>
                    <li class="list-page__item">
                      <a class="link-page" href="/pages/politicians/executives.html">
                        <span class="txt-kr">임원진소개</span>
                        <span class="txt-en">Executives</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="list-gnb__item">
                  <a class="link-gnb" href="/pages/program/schedule.html">
                    <strong class="txt-en">PROGRAM</strong>
                    <span class="txt-kr">프로그램</span>
                  </a>
                  <ul class="list-page">
                    <li class="list-page__item">
                      <a class="link-page" href="/pages/program/schedule.html">
                        <span class="txt-kr">프로그램 일정표</span>
                        <span class="txt-en">Schedule</span>
                      </a>
                    </li>
                    <li class="list-page__item">
                      <a class="link-page" href="/pages/program/sessions.html">
                        <span class="txt-kr">세션소개</span>
                        <span class="txt-en">Sessions</span>
                      </a>
                    </li>
                    <li class="list-page__item">
                      <a class="link-page" href="/pages/program/speakers_experience.html">
                        <span class="txt-kr">연사 문화 발전상</span>
                        <span class="txt-en">Speakers & Cultural</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="list-gnb__item">
                  <a class="link-gnb" href="/pages/notices/announcements.html">
                    <strong class="txt-en">NOTICE</strong>
                    <span class="txt-kr">공지사항</span>
                  </a>
                  <ul class="list-page">
                    <li class="list-page__item">
                      <a class="link-page" href="/pages/notices/announcements.html">
                        <span class="txt-kr">공지사항</span>
                        <span class="txt-en">Announcements</span>
                      </a>
                    </li>
                    <li class="list-page__item">
                      <a class="link-page" href="/pages/notices/bulletin.html">
                        <span class="txt-kr">게시판</span>
                        <span class="txt-en">Bulletin Board</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="list-gnb__item">
                  <a class="link-gnb" href="/pages/archive/past_forums.html">
                    <strong class="txt-en">ARCHIVE</strong>
                    <span class="txt-kr">아카이브</span>
                  </a>
                  <ul class="list-page">
                    <li class="list-page__item">
                      <a class="link-page" href="/pages/archive/past_forums.html">
                        <span class="txt-kr">역대포럼</span>
                        <span class="txt-en">Past Forums</span>
                      </a>
                    </li>
                    <li class="list-page__item">
                      <a class="link-page" href="/pages/archive/photos.html">
                        <span class="txt-kr">사진</span>
                        <span class="txt-en">Photos</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div class="gnb-overlay"></div>
            <!-- //GNB -->          
        </header>        
      `;
  }

  // 변수 초기화 -----------------
  initVariables() {
    this.$header = this.querySelector("#header");
    this.$gnb = this.$header.querySelector("#gnb");
    this.$gnbLinks = this.$gnb.querySelectorAll(".link-page");
  }

  // 현재 페이지에 해당하는 링크 활성화 -----------------
  activateGNBLink() {
    const currentPath = location.pathname.replace(/\/$/, "").replace(/\.[^/.]+$/, "");

    this.$gnbLinks.forEach((_link) => {
      const linkPath = new URL(_link.href).pathname.replace(/\/$/, "").replace(/\.[^/.]+$/, "");

      if (linkPath === currentPath) {
        _link.classList.add("link-page--is-active");
      } else {
        _link.classList.remove("link-page--is-active");
      }
    });
  }
}

/**********************************
 * Define as a custom web component
 **********************************/
customElements.define("header-component", HeaderComponent);
