import React, {Component} from 'react';
import {View, Text} from 'react-native';
//import console = require('console');
 
class AlbumList extends Component{

   // console.log("check the life cycle to app in React native");
    
    componentWillMount(){
        console.log("Component will Mount Called")
    }
    render(){
        return(
            <View>
                <Text>AlbumList !!! </Text>
            </View>
        );
    }
    

}
export default AlbumList