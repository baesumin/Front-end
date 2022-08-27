export default function SearchInput({ $target, initialState, onChange }) {
  this.state = initialState;
  this.$element = document.createElement('form');
  this.$element.className = 'SearchInput';
  $target.appendChild(this.$element);

  const render = () => {
    this.$element.innerHTML = `
      <input
        class="SearchInput__input"
        type="text"
        placeholder="프로그램 언어를 입력하세요."
        value="${this.state}"
        autofocus
      >
    `;
  };

  render();

  this.$element.addEventListener('keyup', (e) => {
    const actionIgnoreKeys = ['Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

    if (!actionIgnoreKeys.includes(e.key)) {
      onChange(e.target.value);
    }
  });

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
