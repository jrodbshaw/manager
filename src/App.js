import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
// * redux reducers
import reducers from "./reducers";
// * import router
import Router from "./Router";

//  * require firebase config
const { config } = require("../config/keys");

export default class App extends Component {
  componentWillMount() {
    // * Initialize Firebase
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
};
