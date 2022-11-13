import { routeChange } from '../utils/router.js';

export default function Header({ $app }) {
  this.$element = document.createElement('header');
  $app.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
    <div class="header header_left">
        <span class="menu_name" id="menu_home" data-button-name="home">HOME</span>
    </div>
    <div class="header header_right">
        <div class="menu_name" id="menu_signup" data-button-name="signup">SIGNUP</div>
    </div>
    `;
  };
  this.render();

  this.$element.addEventListener('click', (e) => {
    const { buttonName } = e.target.dataset;

    if (buttonName === 'home') {
      routeChange('/');
    }
    if (buttonName === 'signup') {
      routeChange('/signup');
    }
  });
}
