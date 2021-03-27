import React from 'react';
import UserCreate from './userCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LangaugeSelector';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />

                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;
