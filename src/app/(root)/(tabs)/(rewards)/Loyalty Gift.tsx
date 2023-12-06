import { FlashList } from '@shopify/flash-list';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Link, router} from 'expo-router';
import { ProductType } from '_utils/types';
import { useAuth } from 'src/store/authStore/auth.store';
import { useUserProductStore } from 'src/store/userProduct.store';
import Product from '../../../../components/Product';

//DATA
import newData from '../../../../assets/data/newData.json';

//COMPONENTS
import FeedItem from '_components/Feed/FeedItem';

export default function Feed() {

  const setLoyaltyGift = useUserProductStore((store) => store.setLoyaltyGift);

  const handlePress = (product: ProductType) => {
    alert('Thanks for choosing your gift!');
    setLoyaltyGift(product);
    router.push('/profile')
    //added item details to global store
    //add logic to redirect to profile page
  };

  const cheapItems = newData.filter((product) => product?.price < 100);

  return (
    <>
      <SafeAreaView
        style={styles.bg}
        className="flex-1 items-center justify-center"
      >
        <View style={styles.card}>
          <Text>
            Congratulations on becoming a Gold Tier in our loyalty program! As a
            token of our gratitude, we're thrilled to send you a special gift
            valued at up to $100. Enjoy the exclusive perks of being a valued
            member!
          </Text>
        </View>
        <ScrollView horizontal={false} style={{ width: '95%' }}>
          {cheapItems.map((item, index) => (
            // ADD LOGIC THAT ONLY ALLOWS AN ALERT AND A REDIRECT, IF THE USER HAS NO GIFT YET
            // DISABLE IF USER => hasGift = true
            <TouchableOpacity onPress={() => handlePress(item)}>
              <Product
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
                rating={item.rating}
                brand={item.brand}
                image={item.image}
                category={item.category} id={0}              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#62d2a2',
  },

  card: {
    backgroundColor: 'white',
    borderColor: '#315445',
    borderWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 45,
    marginVertical: 10,
    width: "105%",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
