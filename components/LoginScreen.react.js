'use strict';

var React = require('react-native');
var FBLogin = require('react-native-facebook-login');
var FBLoginManager = require('NativeModules').FBLoginManager;


var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var credentials = {};
var TestView = require('./TestView.js');


var LoginScreen = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SocialApp</Text>
          <FBLogin style={{ margin: 10, }}
            permissions={["email","user_friends"]}
            onLogin={function(data){
              console.log("Logged in!");
              console.log(data);
              _this.setState({ user : data.credentials });
            }}
            onLogout={function(){
              console.log("Logged out.");
              _this.setState({ user : null });
            }}
            onLoginFound={function(data){
              console.log("Existing login found.");
              console.log(data);
              _this.setState({ user : data.credentials });
            }}
            onLoginNotFound={function(){
              console.log("No user logged in.");
              _this.setState({ user : null });
            }}
            onError={function(data){
              console.log("ERROR");
              console.log(data);
            }}
            onCancel={function(){
              console.log("User cancelled.");
            }}
            onPermissionsMissing={function(data){
              console.log("Check permissions!");
              console.log(data);
            }}
        />
      </View>
    );
  },


  _submitLogin: function() {

    console.log('Submitting with button');

  //   var theNavigator = this.props.navigator;
  //   console.log('credentials:', credentials);
  //   var apiserver = 'http://192.241.212.180:9004/auth/local';
  //
  //   fetch(apiserver, {
  //     method: 'post',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify( {
  //       email: credentials.email,
  //       password: credentials.password,
  //     })
  //   }).then( function(response) {
  //     console.log('response:',response);
  //
  //     if (response.status === 200) {
  //       console.log('success!');
  //       theNavigator.push({
  //         title: 'TestView',
  //         component: TestView,
  //         passProps: {response},
  //       });
  //     }
  //     else {
  //       console.log('failure');
  //     }
  //   })
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

  }
});

module.exports = LoginScreen;
