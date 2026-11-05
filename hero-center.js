/* Case study hero: the picture keeps its own size and stays vertically centered on the text block at its left.
   The text never moves. Whenever the text changes (new copy, another width, fonts loading) the picture re-centers itself.
   When the hero stacks on a phone (picture under the text) nothing is shifted. Local preview file: not on the live site yet. */
(() => {
  const hero = document.querySelector(".campaign-case-hero");
  if (!hero) return;
  const copy = hero.firstElementChild;
  const fig = hero.querySelector("figure");
  if (!copy || !fig) return;

  const center = () => {
    fig.style.transform = "";
    const f = fig.getBoundingClientRect();
    // text block = from the top of the first element to the bottom of the last, excluding the Back link
    const kids = [...copy.children].filter((el) => !el.matches(".case-back-link, a[class*='back']") && el.getClientRects().length);
    if (!kids.length) return;
    const top = Math.min(...kids.map((el) => el.getBoundingClientRect().top));
    const bottom = Math.max(...kids.map((el) => el.getBoundingClientRect().bottom));
    if (f.top >= bottom - 1) return;                         // stacked layout: leave it alone
    // always centered on the text block (no clamp)
    fig.style.transform = `translateY(${(top + bottom) / 2 - (f.top + f.height / 2)}px)`;
  };

  center();
  new ResizeObserver(center).observe(copy);
  new ResizeObserver(center).observe(fig);
  addEventListener("resize", center);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(center);
  addEventListener("load", center);
})();
