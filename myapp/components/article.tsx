import * as React from 'react';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet,Image, Linking } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import mock from '../mock.json'
import news from '../models/news'
interface Props {
    article: news;
}
const NewHomeScreen:React.FC<Props> = ({article}):JSX.Element => {
     const [show, setShow] = useState<boolean>(false);
     const showDetails = () =>  {
        if(!show){
            setShow(true)
        }
        else{
            setShow(false);
        }
     }
    return (
        <Pressable style={styles.item} onPress={showDetails}>
            <Text style={styles.title}>{article.title}</Text>
                <Text>By: {article.author}</Text>
        {show &&
            <>
            <Pressable onLongPress={(): Promise<unknown> => Linking.openURL(article.url)}>
                <Text style={styles.txt}>{article.description}</Text>
                <Image style={styles.image} source={{ uri: article.urlToImage }}/>

            </Pressable>
                </>
}
        </Pressable>
  );
}
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    item: {
        
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    txt: {
        fontSize: 30,
 
    },
    image: {
        height: '50%',
        width:'80%',
        justifyContent: 'center'
    }

})
export default NewHomeScreen;