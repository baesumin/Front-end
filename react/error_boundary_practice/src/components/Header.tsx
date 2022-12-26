import axios from 'axios';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const onAboutClick = () => {
    navigate('/about');
  };

  useEffect(() => {
    const formData = new FormData();
    formData.append(
      'request',
      new Blob([JSON.stringify({ nickName: 'asd' })], { type: 'application/json' })
    );
    // fetch('http://13.125.60.187/user/nickname', {
    //   headers: {
    //     Authorization:
    //       'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJHT09HTEVfMTE0MDE4MjUxODMyMTYzNzEyNjEyIiwicm9sZXMiOiJST0xFX1VTRVIiLCJpYXQiOjE2NzIwMzMzMjEsImV4cCI6MTY3MjAzNjkyMX0.dDcIRKVm6lC4yuyBDIOnx1xVXwIEmBdTbhBX6rsI-54',
    //     'Content-Type': 'multipart/form-data'
    //   },
    //   method: 'post',
    //   body: formData
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));

    axios
      .post('http://13.125.60.187/user/nickname', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJHT09HTEVfMTE0MDE4MjUxODMyMTYzNzEyNjEyIiwicm9sZXMiOiJST0xFX1VTRVIiLCJpYXQiOjE2NzIwMzMzMjEsImV4cCI6MTY3MjAzNjkyMX0.dDcIRKVm6lC4yuyBDIOnx1xVXwIEmBdTbhBX6rsI-54'
        }
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);

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
