'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;

var credentials = {};
var dashboard = require('./dashboard.js');


var loginScreen = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SocialApp</Text>
        <TextInput placeholder="Email" style={styles.textField} onChangeText={(text) => this.setEmail(text) }/>
        <TextInput placeholder="Password"
          style={styles.passwordTextField}
          onChangeText={(text) => this.setPassword(text)}
          secureTextEntry='YES'/>
        <TouchableHighlight style={styles.submitButton}
          underlayColor='#CCC'
          onPress={() => this.submitLogin()}>
            <Text style={styles.submitText}>Submit</Text>
      	</TouchableHighlight>

      </View>
    );
  },

  setEmail: function(text) {
    credentials.email = text;
    console.log(credentials.email);

  },

  setPassword: function(text) {
    credentials.password = text;
    console.log(credentials.password);
  },

  submitLogin: function() {

    // inside of fetch 'this' becomes something totes different!
    // use this to keep the navigator there
    var theNavigator = this.props.navigator;
    console.log('credentials:', credentials);
    var apiserver = 'http://192.241.212.180:9004/auth/local';

    fetch(apiserver, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {
        email: credentials.email,
        password: credentials.password,
      })
    }).then( function(response) {
      if (response.status === 200) {
        console.log('success!');
      }
      else {
        console.log('failure');
      }
    }).then( function(response) {
      console.log(theNavigator);

      theNavigator.push({
        title: 'Dashboard',
        component: dashboard,
        passProps: {credentials},
      });
    })
  },

});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textField: {
    height: 40,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 9,
    backgroundColor: '#FFF',
    color: '#222',
    textAlign: 'center',
    alignItems: 'center',
  },
  passwordTextField: {
    height: 40,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 9,
    backgroundColor: '#FFF',
    color: '#222'
  },
  submitButton: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#BBB',
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
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom:5,

  }
});

module.exports = loginScreen;
