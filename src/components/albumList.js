import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';

//import console = require('console');
 
class AlbumList extends Component{
    // initial a state component to update the component and show  the data 
    state = {
        albums: []
    }

   // console.log("check the life cycle to app in React native");
    
    componentWillMount(){
        console.log("Component will Mount Called");
        console.log("load a json from this url using axios ");
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => this.setState({ albums: res.data}))
        // U can using fetch Library rather than axios


    }
    //fuction to render a details from each albums 
    renderAlbums(){
        return this.state.albums.map(album => 
        <AlbumDetail key = {album.title} album={album}/>)
    }
    render(){
        console.log(this.state)
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
    

}
export default AlbumList