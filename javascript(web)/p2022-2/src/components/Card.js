import { getItem } from '../utils/storage.js';

export default function Card(item, index) {
  let getCardStatus = getItem('cardStatus', []);
  const isFirst = getCardStatus.every((item) => {
    return +item.idx !== index + 1;
  });
  return `
    <div class="card ${!isFirst ? `card is-flipped` : ''}">
      <div data-card-id=${index + 1} class="card_plane card_plane--front">${
    item.name
  }</div>
      <div class="card_plane card_plane--back">${item.mbti}</div>
    </div>
  `;
}
