Component(async ({ load }) => {
  return {
    data: {},
    attached() {
      let styleContainer = this.root.$("head") || this.root;

      // 在节点上添加样式
      styleContainer.push(`<style>
      story-article > *{
        display:none;
      }
      story-article > [x-render="1"]{
        display:block;
      }
      </style>`);

      this.style.visibility = "";
    },
  };
});
