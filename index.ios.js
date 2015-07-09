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
  TouchableHighlight
} = React;

var socialapp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to SocialApp
        </Text>
        <TextInput placeholder="Username" style={styles.textField} />
        <TextInput placeholder="Password" style={styles.passwordTextField}  secureTextEntry='YES'/>
        <TouchableHighlight style={styles.submitButton} underlayColor='#CCC'>
            <Text style={styles.submitText}>Submit</Text>
      	</TouchableHighlight>
      </View>
    );
  }
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
    textAlign: 'center',
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

AppRegistry.registerComponent('socialapp', () => socialapp);
