import React from 'react';
import {AppRegistry} from 'react-native';
import {View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';
//import console = require('console');

const App = () => {
    return(
    <View style={ {
        flex: 1
    }}>
          <Header textApp="Albums"/>
          <AlbumList />
    </View>
    );
}
console.disableYellowBox = true; 
AppRegistry.registerComponent('albums', () => App);
