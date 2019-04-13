import React from 'react';
import {Text, View} from 'react-native';
import Card from './card'
const AlbumDetail = (props) => {
    return(
        <Card>
            <Text>
                {props.album.title}

            </Text>
            </Card>
    );

}
export default AlbumDetail;