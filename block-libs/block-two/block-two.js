Component(async ({ load }) => {
  return {
    proto: {
      reloadSlot() {
        // 插槽内的数据节点发生变动，将节点视为数据，重新获取并渲染可视化页面
        console.log("slotchange haha");

        this.shadow.$(".container").html = this.html;
      },
    },
    ready() {
      this.shadow.$("slot").on("slotchange", () => this.reloadSlot());
    },
  };
});
