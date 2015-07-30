/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Parse = require('parse').Parse;
var NavigationBar = require('react-native-navbar');

Parse.initialize('ECzSLmodKLoPK8UTUdpgFpIoBZAjSOPm0C96tStg', 'Mb9tndUoLRm0YXWSavO3xbIGyDFsod5vAaH9AYm6');


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

var socialapp = React.createClass({

  _renderScene(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    return (
      <View style={{flex: 1}}>
        <Component navigator={navigator} route={route} />
      </View>
    );
  },




  render: function() {
    return (
      <Navigator
        renderScene={this._renderScene}
        initialRoute={{
          component: LoginScreen
        }}

      />
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
