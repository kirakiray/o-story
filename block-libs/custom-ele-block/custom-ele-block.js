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

          // 当渲染节点完成时，添加 x-render 属性
          this.setAttribute("x-render", 1);
        });
    }
  }

  customElements.define("custom-ele-block", CustomEleBlock);
})();
