(() => {
  // 获取
  let tempPath =
    new URL(document.currentScript.src).pathname.replace(/(.+\/).+/, "$1") +
    "temp.html";

  class CustomEleBlock extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({
        mode: "open",
      });

      fetch(tempPath)
        .then((e) => e.text())
        .then((text) => {
          shadowRoot.innerHTML = text;
        });
    }
  }

  customElements.define("custom-ele-block", CustomEleBlock);
})();
