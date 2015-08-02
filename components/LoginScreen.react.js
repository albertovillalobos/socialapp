'use strict';

var React = require('react-native');
var FBLogin = require('react-native-facebook-login');
var FBLoginManager = require('NativeModules').FBLoginManager;
var Parse = require('parse').Parse;

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} = React;

var credentials = {};
var Photo = require('./Photo.react.js');
var Info = require('./Info.react.js');
var Dashboard = require('./Dashboard.react.js');
var TabNav = require('./TabNav.react.js');

var LoginScreen = React.createClass({
  getInitialState: function(){
    return {
      user: null,
      loadingCurrentUser: true,
    };
  },

  componentWillMount: function(){
    // console.log(this.state)
    if (this.state.user) {
      Navigator.push({
        name: 'TabNav',
        route: TabNav,
        user: this.state.user,
      });
    } else {
      this._updateView();
    }
  },


  _moveOn: function() {
    var Navigator = this.props.navigator;
    Navigator.push({
      name: 'TabNav',
      route: TabNav
    })
  },

  _updateView: function(){
    var _this = this;
    FBLoginManager.getCredentials(function(error, user){
      if (!error) {
        _this.setState({ user : user });
      } else {
        _this.setState({ user : null });
      }
    });
  },

  _handleLogin: function(fbData) {
    var Navigator = this.props.navigator;

    Navigator.push({
      component: TabNav,
      Name: 'TabNav',
      user: fbData
    });
  },



  render: function() {
    var _this = this;
    var user = this.state.user;
    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>SocialApp</Text>
        <FBLogin style={{ margin: 10, }}
          permissions={["email","user_friends","read_custom_friendlists"]}
          onLogin={function(data){
            // console.log("Logged in!");
            // console.log(data);
            _this._handleLogin(data.credentials);
            _this.setState({ user : data.credentials });
          }}
          onLogout={function(){
            Parse.User.logOut();
            // console.log("Logged out.");
            _this.setState({ user : null });
          }}
          onLoginFound={function(data){
            // console.log("Existing login found.");
            // console.log(data);
            _this._handleLogin(data.credentials);
          }}
          onLoginNotFound={function(){
            // console.log("No user logged in.");
            _this.setState({ user : null });
          }}
          onError={function(data){
            // console.log("ERROR");
            // console.log(data);
          }}
          onCancel={function(){
            // console.log("User cancelled.");
          }}
          onPermissionsMissing={function(data){
            // console.log("Check permissions!");
            // console.log(data);
          }}
        />

      </View>
    );
  },

});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '100'
  },

  submitButton: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#3b5998',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCC',
    shadowColor: '#999',
    shadowRadius: 5,
    shadowOpacity: 0.8,
    shadowOffset: {width: 4, height: 5}

  },
  submitText: {
    alignItems: 'center',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom:10,
    color: '#fff'
  },
  bottomBump: {
    marginBottom: 15,
  },
});

module.exports = LoginScreen;
