export default function SelectedLanguage({ $target }) {
  const $element = document.createElement('div');
  $element.className = 'SelectedLanguage';
  $target.appendChild($element);

  this.render = () => {
    $element.innerHTML = `
    <ul>
      <li>JavaScript</li>
      <li>Python</li>
      <li>Elixir</li>
      <li>Java</li>
      <li>PHP</li>
    </ul>
    `;
  };
  this.render();
}
