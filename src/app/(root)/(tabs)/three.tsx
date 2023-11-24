import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import analytics from '_utils/analytics/segment';



export default function Feed() {
  analytics.trackScreen('Feed');

  const promoData = [
    {
      brand: 'Brand A',
      promotionText: 'Get 20% off',
      promotionDescription: 'Exclusive discount on selected items',
      brandImage: 'path/to/brand_a_image.jpg',
    },
    {
      brand: 'Brand B',
      promotionText: 'Buy one, get one free',
      promotionDescription: 'Limited-time offer on various products',
      brandImage: 'path/to/brand_b_image.jpg',
    },
    {
      brand: 'Brand C',
      promotionText: 'Flash Sale - 24 Hours Only',
      promotionDescription: 'Hurry up and grab your favorites at unbeatable prices',
      brandImage: 'path/to/brand_c_image.jpg',
    },
    {
      brand: 'Brand D',
      promotionText: 'Free Shipping on Orders over $50',
      promotionDescription: 'Enjoy complimentary shipping on qualifying purchases',
      brandImage: 'path/to/brand_d_image.jpg',
    },
    {
      brand: 'Brand E',
      promotionText: 'Special Bundle Deals',
      promotionDescription: 'Save big with our curated product bundles',
      brandImage: 'path/to/brand_e_image.jpg',
    },
    {
      brand: 'Brand F',
      promotionText: 'Reward Points Bonanza',
      promotionDescription: 'Earn double points on every purchase this month',
      brandImage: 'path/to/brand_f_image.jpg',
    },
  ];
  

  return (
    <SafeAreaView className="flex-1 items-center ">

      <View style={[styles.card, styles.shadowProp]}>   

     <Text>Your perks don't end at thank you gifts, and points redemption. 
      As a gold tier member, you also receive exclusive promotional deals from our family of brands.
     </Text>
     </View>

      <View className="flex-col border-2" style={[styles.card2, styles.shadowProp]}>
        <View><Text>1</Text></View>
        <View><Text>2</Text></View>
        <View><Text>3</Text></View>
      </View>     
       

     </SafeAreaView>
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
  card2: {
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
});