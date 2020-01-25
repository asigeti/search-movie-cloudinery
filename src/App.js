import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./store";
import Search from './components/search/search';
import Header from './components/header/header';

class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
        <section>
          <Header />
          <Search />
        </section>
      </Provider>
    );
  }
}
export default App;
