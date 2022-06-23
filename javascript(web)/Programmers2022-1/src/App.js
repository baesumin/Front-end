import { fetchLanguages } from './api.js';
import SearchInput from './SearchInput.js';
import SelectedLanguage from './SelectedLanguage.js';
import Suggestion from './Suggestion.js';

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: []
  };
  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    };
    suggestion.setState({
      items: this.state.fetchedLanguages,
      selectedIndex: 0
    });
  };

  const selectedLanguage = new SelectedLanguage({ $target });
  const searchInput = new SearchInput({
    $target,
    initialState: '',
    onChange: async (keyword) => {
      if (!keyword) {
        this.setState({
          fetchedLanguages: []
        });
        return;
      } else {
        const response = await fetchLanguages(keyword);
        this.setState({
          fetchedLanguages: response
        });
      }
    }
  });
  const suggestion = new Suggestion({
    $target,
    initialState: {
      items: [],
      selectedIndex: 0
    },
    onSelect: (language) => {
      alert(language);
    }
  });
}
