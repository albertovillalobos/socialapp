/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator,
} = React;

var LoginScreen = require('./components/LoginScreen.react.js');
// var testView = require('./components/testView.js');
// var dashboard = require('./components/dashboard.js');

var credentials = {};

var socialapp = React.createClass({

  render: function() {
    return (
      <Navigator
        initialRoute={{name: 'login', index: 0}}
        renderScene={(route, navigator) =>
          <LoginScreen
            name={route.name}
            onForward={() => {
              var nextIndex = route.index + 1;
              navigator.push({
                name: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />

      // <Navigator
      //   style={styles.navcontainer}
      //   initialRoute={{
      //     title: 'Login',
      //     component: loginScreen,
      //   }}
      //   />
    );
  },

});


var styles = StyleSheet.create({
  navcontainer: {
    flex: 1,
    justifyContent: 'center',
  },

});

AppRegistry.registerComponent('socialapp', () => socialapp);
