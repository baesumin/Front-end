import Header from './components/Header.js';
import HomePage from './page/HomePage.js';
import SignupPage from './page/SignupPage.js';
import { init } from './utils/router.js';
import { getItem, setItem } from './utils/storage.js';

export default function App({ $app }) {
  let header = null;
  let home = null;
  let signup = null;

  this.state = {
    personalData: []
  };

  this.setState = (nextState) => {
    this.state = nextState;
    // home.setState({
    //   personalData: this.state.personalData
    // });
  };

  this.route = () => {
    const { pathname } = location;
    $app.innerHTML = '';
    header = new Header({ $app });
    if (pathname === '/') {
      home = new HomePage({ $app, initialData: this.state.personalData });
    }
    if (pathname === '/signup') {
      signup = new SignupPage({ $app });
    }
  };

  this.getInitialData = async () => {
    const getPersonalItem = getItem('personalData', []);
    if (getPersonalItem.length !== 0) {
      // this.setState({
      //   ...this.state,
      //   personalData: getPersonalItem
      // });
    } else {
      const response = await fetch('./src/data/new_data.json').then((res) => res.json());
      setItem('personalData', response);
      // this.setState({
      //   ...this.state,
      //   personalData: response
      // });
    }
    this.route();
  };
  this.getInitialData();

  init(this.route);
  // this.route();
  window.addEventListener('popstate', this.route);
}
