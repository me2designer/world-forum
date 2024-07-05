/**
 *
 *  HTML Include
 *
 */

window.includeHTML = function () {
  const includeArea = document.querySelectorAll("[data-include]");

  for (let dom of includeArea) {
    const url = dom.dataset.include;

    console.log(dom);

    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        dom.innerHTML = data;
        dom.removeAttribute("data-include");
      });
  }
};
