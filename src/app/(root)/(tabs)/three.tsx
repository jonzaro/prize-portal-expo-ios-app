import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import analytics from '_utils/analytics/segment';
import { ScrollView } from 'react-native-gesture-handler';
export default function Feed() {
  analytics.trackScreen('Feed');

  const promoData = [
    {
      brand: 'Brand A',
      promotionText: 'Get 20% off',
      promotionDescription: 'Exclusive discount on selected items',
      brandImage: require('../../../assets/images/finishline.png'),

    },
    {
      brand: 'Brand B',
      promotionText: 'Buy one, get one free',
      promotionDescription: 'Limited-time offer on various products',
      brandImage: require('../../../assets/images/ace.png'),
    },
    {
      brand: 'Brand C',
      promotionText: 'Flash Sale - 24 Hours Only',
      promotionDescription: 'Hurry up and grab your favorites at unbeatable prices',
      brandImage: require('../../../assets/images/roku.png'),
    },
    {
      brand: 'Brand D',
      promotionText: 'Free Shipping on Orders over $50',
      promotionDescription: 'Enjoy complimentary shipping on qualifying purchases',
      brandImage: require('../../../assets/images/twitch.png'),
    },
    {
      brand: 'Brand E',
      promotionText: 'Special Bundle Deals',
      promotionDescription: 'Save big with our curated product bundles',
      brandImage: require('../../../assets/images/doordash.png'),
    },
    {
      brand: 'Brand F',
      promotionText: 'Reward Points Bonanza',
      promotionDescription: 'Earn double points on every purchase this month',
      brandImage: require('../../../assets/images/Walmart.png'),
    },
  ];
  

  const images = [
    require('../../../assets/images/doordash.png'),
    require('../../../assets/images/Walmart.png'),
    require('../../../assets/images/finishline.png'),
    require('../../../assets/images/roku.png'),
    require('../../../assets/images/twitch.png'),
    require('../../../assets/images/ace.png'),
  ];

  return (
    <SafeAreaView style={styles.bg} className="flex-1 items-center ">
      <ScrollView style={{height:800}}>
        <Image style={styles.topImg} source={require("../../../assets/images/Shopping-bro.png")}></Image>

        <View style={[styles.card, styles.shadowProp]}>   
          <Text className="text-xs">Your perks don't end at thank you gifts, and points redemption. 
            As a gold tier member, you also receive exclusive promotional deals from our family of brands.
          </Text>
        </View>
      
        {promoData.map((item, index) => (
          <View           key={index}
          style={styles.cardNew} className="justify-center">
         <Image source={item.brandImage} style={styles.imageEarn} resizeMode="contain"/>
         <Text style={styles.title}>{item.promotionText}</Text>
          <Text style={styles.description}>{item.promotionDescription}</Text>
        </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  topImg: {
    position: 'absolute',
    width: '40%',
    height: '30%',
    right: "4%",
    // bottom: "65%",

  },
  bg: {
    backgroundColor: '#62d2a2',
  },
  cardNew: {
    flex: 1, // Take up equal space in the row
    margin: 2,
    top: "5%",
    padding: 6,
    width: '100%',
    height: '30%',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4, // Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: "35%",
    bottom: "25%",
    // marginBottom: 18,
  },
  description: {
    fontSize: 12,
    marginLeft: "30%",
    color: '#555',
    bottom: "18%",
  },
  imageEarn: {
    height: 50,
   width: 90, // Set the width as needed
   top: "15%",
  },
  card: {
    backgroundColor: 'white',
    borderColor: "#b5b5b5",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: '7%',
    // marginBottom: -20,
    width: '45%',
    height: '20%',
    top: "6%",
    opacity: 0.8,
    marginBottom: 35,
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