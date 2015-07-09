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
  NavigatorIOS,
} = React;

var loginScreen = require('./loginScreen.js');
var testView = require('./testView.js');
var dashboard = require('./dashboard.js');

var credentials = {};

var socialapp = React.createClass({

  render: function() {
    return (
      <NavigatorIOS
        style={styles.navcontainer}
        initialRoute={{
          title: 'Login',
          component: loginScreen,
        }}
        />
    );
  },

});


var styles = StyleSheet.create({
  navcontainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#00f',
  },

});

AppRegistry.registerComponent('socialapp', () => socialapp);
