import ContentTitle from '../components/ContentTitle.js';
import { getItem, setItem } from '../utils/storage.js';

export default function SignupPage({ $app }) {
  this.$element = document.createElement('main');
  this.$element.id = 'page_content';
  $app.appendChild(this.$element);

  this.handleSubmit = (e) => {
    console.log(e);
  };

  this.render = () => {
    this.$element.innerHTML =
      ContentTitle({ title: 'Sign Up, GreatPeoPle!' }) +
      `
    <form id="form_container">
        <span class="form_elem">
            <label>이름<span class="mark">(필수*)</span></label>
            <input id="name" placeholder="이름">
        </span>
        <span class="form_elem">
            <label>이메일<span class="mark">(필수*)</span></label>
            <input id="email" placeholder="이메일">
        </span>
        <span class="form_elem">
            <label>닉네임<span class="mark">(필수*)</span></label>
            <input id="email" placeholder="닉네임">
        </span>
        <span class="form_elem">
            <label>직군<span class="mark">(필수*)</span></label>
            <select id="role" name="role">
                <option value="">직군을 선택해주세요</option>
                <option value="backend">백엔드</option>
                <option value="frontend">프론트엔드</option>
                <option value="fullstack">풀스택</option>
            </select>
        </span>
        <span class="form_elem">
            <label>MBTI</label>
            <select id="role" name="role">
                <option value="">MBTI를 선택해주세요</option>
                <option value="ENFJ">ENFJ</option>
                <option value="ENTJ">ENTJ</option>
                <option value="ENFP">ENFP</option>
            </select>
        </span>
        <span class="form_elem">
            <button type="submit">등록</button>
        </span>
    </form>
    `;
  };
  this.render();

  const form = document.getElementById('form_container');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newItem = {
      name: event.target[0].value,
      email: event.target[1].value,
      nickname: event.target[2].value,
      role: event.target[3].value,
      mbti: event.target[4].value
    };
    const getPersonalData = getItem('personalData', []);
    setItem('personalData', [...getPersonalData, newItem]);
    alert('등록되었습니다!');
    event.target.reset();
  });
}
