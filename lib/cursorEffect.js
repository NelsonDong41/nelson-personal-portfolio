export default () => {
  const cursor = document.querySelector(".cursor");

  const editCursor = (e) => {
    if (cursor) {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    }
  };
  toggleCursorHover(1);

  window.addEventListener("mousemove", editCursor);
  window.addEventListener("blur", toggleCursorHover(1));
};

export const toggleCursorHover = (on, scale) => {
  const cursor = document.querySelector(".cursor");
  for (let i = -1; i < 3; i++) {
    cursor?.classList.remove(`cursorHovered${i}`);
  }
  on && cursor?.classList.add(`cursorHovered${scale}`)
};
