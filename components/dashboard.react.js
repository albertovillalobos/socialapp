'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ListView,
  Image,
  TabBarIOS

} = React;

var Photo = require('./Photo.react.js');
var People = require('./People.react.js');

var Dashboard = React.createClass({

  getInitialState: function(){
    return {
      info: null,
    };
  },

  componentWillMount: function(){

    var _this = this;
    let user = this.props.user;
    var api = `https://graph.facebook.com/v2.4/${user.userId}?fields=name,email,friends&access_token=${user.token}`;
    console.log(user);

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        console.log('data',responseData)
        _this.setState({
          info : {
            name : responseData.name,
            email: responseData.email,
          },
        });
      })
      .done();
  },

  render: function() {

    var info = this.state.info;
    let user = this.props.user;

    return(
      <View style={styles.container}>
        <Photo user={user}/>
        <Text style={styles.welcome}>{ info && info.name }</Text>
      </View>
    );
  },
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    backgroundColor: '#3b5998',
    borderRadius: 10,
    margin: 5,
    width: 200,

  },
  button: {
    fontSize: 20,
    fontWeight: '200',
    color: 'white',
    margin: 5,
    textAlign: 'center'
  },
  welcome: {
    fontSize: 32,
    fontWeight: '100',

  },
})


module.exports = Dashboard;
