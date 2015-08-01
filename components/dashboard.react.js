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
      selectedTab: 'welcome',
    };
  },

  componentWillMount: function(){

    var _this = this;
    let user = this.this.props..user;
    var api = `https://graph.facebook.com/v2.3/${user.userId}?fields=name,email&access_token=${user.token}`;

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
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

  // getInitialState: function() {
  //   return {
  //     dataSource: new ListView.DataSource({
  //       rowHasChanged: (row1, row2) => row1 !== row2,
  //     }),
  //     loaded: false,
  //   };
  // },
  //
  //   componentDidMount: function() {
  //     this.fetchData();
  //   },
  //
  //   fetchData: function() {
  //
  //     var token = JSON.parse(this.props.response._bodyInit).token;
  //     letoken = token;
  //     console.log('le token: ',token);
  //
  //     fetch(REQUEST_URL, {
  //       method: 'get',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer '+token,
  //       }
  //     })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({
  //         dataSource: this.state.dataSource.cloneWithRows(responseData),
  //         loaded: true,
  //       });
  //     })
  //     .done();
  //   },
  //
  //
  //   render: function() {
  //     if (!this.state.loaded) {
  //       return this.renderLoadingView();
  //     }
  //
  //     return (
  //       <ListView
  //         dataSource={this.state.dataSource}
  //         renderRow={this.renderMovie}
  //         style={styles.listView}
  //       />
  //     );
  //
  //    },
  //
  //
  //    selectMovie: function(movie: Object) {
  //      this.props.navigator.push({
  //        title: movie.title,
  //        component: userScreen,
  //        passProps: {movie, letoken},
  //      });
  //    },
  //
  //    renderLoadingView: function() {
  //      return (
  //        <View style={styles.container}>
  //          <Text>
  //            Loading users...
  //          </Text>
  //        </View>
  //      );
  //    },
  //
  //    renderMovie: function(movie) {
  //      return (
  //        <TouchableHighlight
  //         onPress={()=> this.selectMovie(movie)}
  //         movie={movie}>
  //
  //          <View style={styles.container} >
  //            <Image
  //              source={{uri: movie.picture}}
  //              style={styles.thumbnail}
  //            />
  //            <View style={styles.rightContainer}>
  //              <Text style={styles.title}>{movie.name}</Text>
  //              <Text style={styles.year}>{movie.comments.length} Reviews</Text>
  //            </View>
  //          </View>
  //        </TouchableHighlight>
  //      );
  //    },


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
