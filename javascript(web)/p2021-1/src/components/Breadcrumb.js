export default function Breadcrumb({ $target, initialState }) {
  const $element = document.createElement('nav');
  $element.className = 'Breadcrumb';
  $target.appendChild($element);

  const state = initialState;

  const setState = (nextState) => {
    state = nextState;
    render();
  };

  const render = () => {
    $element.innerHTML = `
      <div>root</div>
      ${state
        .map(
          (node, index) => `
          <div data-index="${index}">${node.name}</div>
        `
        )
        .join('')}
    `;
  };
  render();
}
