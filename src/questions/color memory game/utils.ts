function _getRandomColor() {
  const randomColor = () => Math.floor(Math.random() * 256);
  const r = randomColor().toString(16).padStart(2, '0');
  const g = randomColor().toString(16).padStart(2, '0');
  const b = randomColor().toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
}

export function getRandomColors(limit: number) {
  const colors = [];
  const seen = new Set();

  for (let i = 0; i < limit; i++) {
    let color = _getRandomColor();

    while (seen.has(color)) {
      color = _getRandomColor();
    }

    colors.push(color);
  }

  return colors;
}