export default function Suggestion({ $target, initialState, onSelect }) {
  const $element = document.createElement('div');
  $element.className = 'Suggestion';
  $target.appendChild($element);

  this.state = {
    items: initialState.items,
    selectedIndex: 0
  };
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { items = [], selectedIndex } = this.state;
    if (items.length > 0) {
      $element.style.display = 'block';
      $element.innerHTML = `
      <ul>
        ${items
          .map(
            (item, index) => `
          <li class="${
            index === selectedIndex ? 'Suggestion__item--selected' : ''
          }" data-index="${index}">${item}</li>
          </li>
        `
          )
          .join('')}
      </ul>
      `;
    } else {
      $element.style.display = 'none';
      $element.innerHTML = '';
    }
  };
  this.render();

  $element.addEventListener('keyup', (e) => {
    e.preventDefault();
  });

  window.addEventListener('keyup', (e) => {
    if (this.state.items.length > 0) {
      const { selectedIndex } = this.state;
      const lastIndex = this.state.items.length - 1;
      const navigationKeys = ['ArrowUp', 'ArrowDown'];
      let nextIndex = selectedIndex;

      if (navigationKeys.includes(e.key)) {
        if (e.key === 'ArrowUp') {
          nextIndex = selectedIndex === 0 ? lastIndex : nextIndex - 1;
        } else if (e.key === 'ArrowDown') {
          nextIndex = selectedIndex === lastIndex ? 0 : nextIndex + 1;
        }

        this.setState({
          ...this.state,
          selectedIndex: nextIndex
        });
      } else if (e.key === 'Enter') {
        onSelect(this.state.items[this.state.selectedIndex]);
      }
    }
  });

  $element.addEventListener('click', (e) => {
    const $li = e.target.closest('li');
    if ($li) {
      const { index } = $li.dataset;
      try {
        onSelect(this.state.items[parseInt(index)]);
      } catch (e) {
        alert('무언가 잘못되었습니다! 선택할 수 없습니다!');
      }
    }
  });
}
