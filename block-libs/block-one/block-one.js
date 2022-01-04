Component(async ({ load }) => {
  return {
    attrs: {
      bg: "",
    },
    watch: {
      bg(bg) {
        this.shadow.$(".container").style.backgroundImage = `url(${bg})`;
      },
    },
  };
});
