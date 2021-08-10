import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import UserContext from '../hooks/context';
import * as mock from '../mock.json'
import news from '../models/news';
import newHomeScreen from '../components/article';
import Article from '../models/news'
import NewHomeScreen from '../components/article';
import article from '../components/article';
export default function Home() {
  const [list, setList] = useState<Article[]>([]);
  const makelist = (list:Article[]) => {
    mock.articles.map((mynews,index) => {
      return (
        <NewHomeScreen key={mynews.title} article={ mynews as news }/>
      );
    })
  }
    
        const renderItem = ({item}:{item:any}) => (
          <>
            <NewHomeScreen  article={item as news} />
          </>
        );
        const Item = ({news}:{news:Article}) => (
           <NewHomeScreen article={news as news} />
        )
    
            return (
              <SafeAreaView style={styles.container}>
                <FlatList
                  data={mock.articles}
                  initialNumToRender={50}

                  renderItem={renderItem}
                  keyExtractor={news => news.title}
                />
              </SafeAreaView>
            );
        
            }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 400,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  txt: {
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 5,
},
});
