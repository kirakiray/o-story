Component(async ({ load }) => {
  return {
    proto: {
      reloadSlot() {
        // 插槽内的数据节点发生变动，将节点视为数据，重新获取并渲染可视化页面
        console.log("slotchange haha");

        let html = "";

        // 抽离xml数据
        this.forEach((ele) => {
          html += `<div class="test_block" style="animation-delay:${Math.random() * 3 }s;">${ele.html}</div> `;
        });

        this.shadow.$(".container").html = html;
      },
    },
    ready() {
      this.shadow.$("slot").on("slotchange", () => this.reloadSlot());
    },
  };
});
