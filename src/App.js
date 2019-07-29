import React, { Component } from 'react'
import Posts from './components/Posts.js';
import Postform from './components/Postform.js';
import { Provider } from 'react-redux';
import store from "./store";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div style={style} className="App">
        <Header />
        <Postform />
        <hr></hr>
        <Posts />
      </div>
      </Provider>
    )
  }
}

const style = {
  background: '#282c34',
  color: '#61dafb',
  fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'

}

 export default App