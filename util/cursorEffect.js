export default () => {
  const cursor = document.querySelector('.cursor');

  const editCursor = e => {
      if(cursor) {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
      }
  };
  
  window.addEventListener('mousemove', editCursor);
}

export const toggleCursorHover = (on, scale) => {
      const cursor = document.querySelector('.cursor')
    on ? cursor?.classList.add(`cursorHovered${scale}`) : cursor?.classList.remove(`cursorHovered${scale}`)
}

