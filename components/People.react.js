'use strict';

var React = require('react-native');

var {
    View,
    Text,
    StyleSheet
} = React;


var People = React.createClass({


  getInitialState: function(){
    return {
      info: null,
    };
  },

  componentWillMount: function(){

  },



  render: function(){
    var info = this.state.info;

    return (
      <View style={styles.container}>
        <Text>People view</Text>
      </View>
    );
  }


});

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

  }
})

module.exports = People;
