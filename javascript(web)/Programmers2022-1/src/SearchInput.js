export default function SearchInput({ $target, initialState, onChange }) {
  this.state = initialState;
  const $element = document.createElement('form');
  $element.className = 'SearchInput';
  $target.appendChild($element);

  this.render = () => {
    $element.innerHTML = `
      <input
        class="SearchInput__input"
        type="text"
        placeholder="프로그램 언어를 입력하세요."
        value=${this.state}
      >
    `;
  };

  this.render();

  $element.addEventListener('keyup', (e) => {
    const actionIgnoreKeys = ['Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

    if (!actionIgnoreKeys.includes(e.key)) {
      onChange(e.target.value);
    }
  });

  $element.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
