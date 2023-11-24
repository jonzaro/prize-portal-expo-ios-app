import { FlashList } from '@shopify/flash-list';
import { View , Text, FlatList, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import { ProductNew } from "_utils/types"
import analytics from '_utils/analytics/segment';

import Product from '../../../../components/Product';


//DATA
import feedData from '_assets/data/feed.json';
import newData from '../../../../assets/data/newData.json';


//COMPONENTS
import FeedItem from '_components/Feed/FeedItem';

//TODO: issue with typescript causing crashes


export default function Feed() {
  analytics.trackScreen('Feed');
  
  const cheapItems = newData.filter(product => product?.price < 100);

  return (
  <>
    <SafeAreaView className="flex-1 items-center justify-center">

      <View style={[styles.card, styles.shadowProp]}>   

      <Text>Congratulations on reaching Gold Tier in our loyalty program!
         As a token of our gratitude, we're thrilled to send you a special
          gift valued at up to $100. Enjoy the exclusive perks of being a valued member!</Text>
        </View>
  
        <ScrollView horizontal={false}>
      {cheapItems.map((item, index) => (
        <Product
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          wasPrice={item.wasPrice}
          rating={item.rating}
          brand={item.brand}
          image={item.image}         
        />
      ))}
    </ScrollView>  
    </SafeAreaView>
        </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderColor: "#b5b5b5",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    // marginBottom: -20,
    width: '80%',
    // height: '30%',
    // bottom: "7%",
    marginVertical: 5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});