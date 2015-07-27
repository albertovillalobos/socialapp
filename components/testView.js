'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;


var testView = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Text>Something</Text>
        <Text>Another thing</Text>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
})


module.exports = testView;
