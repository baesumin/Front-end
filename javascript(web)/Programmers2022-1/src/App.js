import { fetchLanguages } from './api.js';
import SearchInput from './SearchInput.js';
import SelectedLanguage from './SelectedLanguage.js';
import Suggestion from './Suggestion.js';

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
    ketword: ''
  };
  this.setState = (nextState) => {
    console.log(nextState);
    this.state = {
      ...this.state,
      ...nextState
    };
    suggestion.setState({
      items: this.state.fetchedLanguages,
      selectedIndex: 0,
      keyword: nextState.keyword ? nextState.keyword : ''
    });
    selectedLanguage.setState(this.state.selectedLanguages);
  };

  const selectedLanguage = new SelectedLanguage({ $target, initialState: [] });
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
          fetchedLanguages: response,
          keyword: keyword
        });
      }
    }
  });
  const suggestion = new Suggestion({
    $target,
    initialState: {
      items: [],
      selectedIndex: 0,
      keyword: ''
    },
    onSelect: (language) => {
      alert(language);

      // 이미 선택된 언어인 경우, 맨 뒤로 보내버리는 처리
      const nextSelectedLanguages = [...this.state.selectedLanguages];

      const index = nextSelectedLanguages.findIndex(
        (selectedLanguage) => selectedLanguage === language
      );

      if (index > -1) {
        nextSelectedLanguages.splice(index, 1);
      }
      nextSelectedLanguages.push(language);

      this.setState({
        ...this.state,
        selectedLanguages: nextSelectedLanguages
      });
    }
  });
}
