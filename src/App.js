import React from 'react';
import './App.scss';
import ViewTable from './components/ViewTable/ViewTable';
import { Route, Switch, Redirect } from 'react-router-dom';
import UsersContainer from './components/Users/Table/UsersContainer';
import UsersPreviewContainer from './components/Users/Preview/UsersPreviewContainer';
import FilterContainer from './components/Filter/FilterContainer';

import counterpart from 'counterpart';
import en from './lang/en';
import ru from './lang/ru';
import { useState } from 'react';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ru', ru);
counterpart.setLocale('ru');

const App = ({ filter }) => {

  const [lang, setLang] = useState('ru')

  const onLangChange = (e) => {
    setLang(e.target.value);

    counterpart.setLocale(e.target.value);
  }

  return (
    <div className="main">
      <div className="main__wrapper">

        <select value={lang} onChange={onLangChange}>
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>

        <div className="main__header">

          <div className="filter">
            <FilterContainer />
          </div>

          <div className="view">
            <ViewTable filter={filter} />
          </div>

        </div>

        <div className="main__content">
          <Switch>
            <Route path='/table/:sort' render={() => <UsersContainer path='table' />} />
            <Route path='/preview/:sort' render={() => <UsersPreviewContainer path='preview' />} />

            <Route exact path='/' render={() => <Redirect to={`/table/${filter}`} />} />
            <Route exact path='/table' render={() => <Redirect to={`/table/${filter}`} />} />
            <Route exact path='/preview' render={() => <Redirect to={`/table/${filter}`} />} />
          </Switch>
        </div>
      </div>
    </div >
  );
}

export default App;


