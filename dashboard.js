'use strict';

var React = require('react-native');
var REQUEST_URL = 'http://192.241.212.180:9004/api/users';

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ListView,
  Image
} = React;


var dashboard = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },



    componentDidMount: function() {
      this.fetchData();
    },

    fetchData: function() {

      var token = JSON.parse(this.props.response._bodyInit).token;
      console.log('le token: ',token);

      fetch(REQUEST_URL, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token,
        }
      })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
    },


    render: function() {
      if (!this.state.loaded) {
        return this.renderLoadingView();
      }

      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie}
          style={styles.listView}
        />
      );

     },


     selectMovie: function(movie: Object) {
       this.props.navigator.push({
         title: movie.title,
         component: moviescreen,
         passProps: {movie},
       });
     },

     renderLoadingView: function() {
       return (
         <View style={styles.container}>
           <Text>
             Loading users...
           </Text>
         </View>
       );
     },

     renderMovie: function(movie) {
       return (
         <TouchableHighlight
          onPress={()=> this.selectMovie(movie)}
          movie={movie}>

           <View style={styles.container} >
             <Image
               source={{uri: movie.picture}}
               style={styles.thumbnail}
             />
             <View style={styles.rightContainer}>
               <Text style={styles.title}>{movie.name}</Text>
               <Text style={styles.year}>{movie.comments.length}Comments</Text>
             </View>
           </View>
         </TouchableHighlight>
       );
     },


})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
})


module.exports = dashboard;
