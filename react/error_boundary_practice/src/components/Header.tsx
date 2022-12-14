import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const onAboutClick = () => {
    navigate('/about');
  };

  return (
    <header>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  );
}
