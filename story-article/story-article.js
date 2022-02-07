Component(async ({ load }) => {
  await load("./story-article-content -p");

  return {
    attrs: {
      mode: null,
    },
    attached() {},
  };
});
