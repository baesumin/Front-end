const IMAGE_PATH_PREFIX =
  'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-1ooef0cg8h3vq.s3.ap-northeast-2.amazonaws.com/public';

export default function ImageView({ $app, initialState }) {
  let state = initialState;
  const $element = document.createElement('div');
  $element.className = 'Modal ImageView';
  $app.appendChild($element);

  this.setState = (nextState) => {
    state = nextState;
    render();
  };

  const render = () => {
    $element.innerHTML = `<div class="content">${
      state ? `<img src="${IMAGE_PATH_PREFIX}${state}">` : ''
    }</div>`;

    $element.style.display = state ? 'block' : 'none';
  };
  render();
}
