export default function Breadcrumb({ $app, initialState }) {
  let state = initialState;
  const $element = document.createElement('nav');
  $element.className = 'Breadcrumb';
  $app.appendChild($element);

  this.setState = (nextState) => {
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
