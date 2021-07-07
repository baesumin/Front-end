import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import HappyDesignScreen from './screens/HappyDesignScreen';
import CommunityScreen from './screens/CommunityScreen';
import SurveyScreen from './screens/SurveyScreen';
import MoreScreen from './screens/MoreScreen';
import Header from './components/Header';
import history from './history';
import { ScreenConfig, Screen } from '../src/screens/ScreenElements';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <ScreenConfig>
            <Screen>
              <Switch>
                <Route path="/" exact component={HomeScreen} />
                <Route path="/happydesign" exact component={HappyDesignScreen} />
                <Route path="/community" exact component={CommunityScreen} />
                <Route path="/survey" exact component={SurveyScreen} />
                <Route path="/more" exact component={MoreScreen} />
              </Switch>
            </Screen>
          </ScreenConfig>
        </div>
      </Router>
    </div>
  );
};

export default App;
