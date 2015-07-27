'use strict';

var React = require('react-native');

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
        <TouchableHighlight style={styles.submitButton}
          underlayColor='#CCC'
          onPress={() => this._submitLogin()}>
            <Text style={styles.submitText}>Connect using Facebook</Text>
      	</TouchableHighlight>

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
    margin: 10,
    fontWeight: '100'
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

module.exports = LoginScreen;
