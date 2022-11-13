import Card from '../components/Card.js';
import ContentTitle from '../components/ContentTitle.js';
import { getItem, setItem } from '../utils/storage.js';

export default function HomePage({ $app, initialData }) {
  let state = initialData;
  this.$element = document.createElement('main');
  this.$element.id = 'page_content';
  $app.appendChild(this.$element);

  const getPersonalItem = getItem('personalData', []);
  let getCardStatus = getItem('cardStatus', []);

  this.setState = (nextState) => {
    state = nextState;
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML =
      ContentTitle({ title: 'Great PeoPle' }) +
      `
        <div id="cards_container">
          ${getPersonalItem && getPersonalItem.map(Card).join('')}
        </div> 
    `;
  };
  this.render();

  this.$element.addEventListener('click', (e) => {
    const $card = e.target.closest('.card');
    if ($card) {
      $card.className += ' is-flipped';
      const { cardId } = e.target.dataset;
      const isFirst = getCardStatus.every((item) => {
        return item.idx !== cardId;
      });
      if (isFirst) {
        setItem('cardStatus', [
          ...getItem('cardStatus', []),
          { idx: cardId, status: 'card is-flipped' }
        ]);
        getCardStatus = getItem('cardStatus', []);
      }
    }
  });
}
