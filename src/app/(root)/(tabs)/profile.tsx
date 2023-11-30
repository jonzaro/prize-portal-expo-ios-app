import { FlashList } from '@shopify/flash-list';
import { View , Image, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import analytics from '_utils/analytics/segment';
import { useAuth } from 'src/store/authStore/auth.store';
import { useUserProductStore } from 'src/store/userProduct.store';
//DATA

//COMPONENTS
import Product from "../../../components/Product";
import { PromoCouponItem } from "../../../components/PromoCouponItem";

export default function Feed() {
  analytics.trackScreen('Feed');
  const user = useAuth((state) => state.user);

  function calculateRewards(rewardsPoints?: number) {
    // Ensure rewardsPoints is a number
    if (typeof rewardsPoints !== 'number') {
      throw new Error('Rewards points must be a number');
    }
    // Perform the calculation and rounding
    const roundedValue = Math.round(rewardsPoints / 50);
    return roundedValue;
  }
  const result = calculateRewards(user?.rewardsPoints);
  const { loyaltyGift, promoCoupon, pointsRedemptionItem } = useUserProductStore((state) => state);
  if(pointsRedemptionItem){

    const rewardsPrice = Math.round(pointsRedemptionItem.price - result)
  }

  return (
    <>
    <SafeAreaView style={styles.bg} className="flex-1 items-center justify-center">
      <View style={[styles.card, styles.shadowProp]}>   
        <Text className="text-lg text-center text-teal-600 font-bold tracking-widest">
          CHA-CHING!
        </Text>
        <Text className="text-xs">Welcome to your world of savings—you can find your
        thank you gift, promo deals, and points redemption items here. 
        </Text>
      </View>
  
      
      <ScrollView horizontal={false} contentContainerStyle={{ flexGrow: 2 }} style={{width: "99%", left: "5%", }}>
      <View style={[styles.cardTop, styles.shadowProp]}>   

      <Image
        source={require('../../../assets/images/profile.png')}
        style={styles.profileImg}
        // resizeMode="contain" // Adjust the resizeMode as needed
      />
      </View>
      <View style={[styles.card, styles.shadowProp]}>   
        {loyaltyGift ? 
          <Product 
                title={loyaltyGift.title}
                description={loyaltyGift.description}
                price={loyaltyGift.price}
                rating={loyaltyGift.rating}
                brand={loyaltyGift.brand}
                image={loyaltyGift.image}
                category={loyaltyGift.category}/> : 
                <Text>Head over to the Rewards tab to select your thank you gift!</Text> }
      </View>

      <View style={[styles.card, styles.shadowProp]}>   
      {pointsRedemptionItem ? 
      <>
                <Text style={styles.wasPriceText}>    ${pointsRedemptionItem?.price} Retail price</Text>
                <Text style={styles.pointsText}> - ${result} Rewards dollars</Text>
                <View style={styles.divider}></View>
                <Text >    ${rewardsPrice} Your price </Text>

                <Product 
                title={pointsRedemptionItem.title}
                description={pointsRedemptionItem.description}
                price={pointsRedemptionItem.price}
                rating={pointsRedemptionItem.rating}
                brand={pointsRedemptionItem.brand}
                image={pointsRedemptionItem.image}
                category={pointsRedemptionItem.category}/>
                </>
                 : 
                <Text>Head over to the Rewards tab and select an item to apply your rewards to!</Text> }
      </View>
 

      <View style={[styles.card, styles.shadowProp]}>   

        {promoCoupon ? <><PromoCouponItem promoCoupon={promoCoupon}/> 
        <Text className="mt-10">Press on the coupon to see your barcode.</Text>
        </>:
        <Text>Claim exclusive deals from our family of brands in the Offers tab</Text>
}
        </View>

      
    </ScrollView>  
    </SafeAreaView>
        </>
  );
}



const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#62d2a2',
    height: "100%",
  },
pointsText: {
  color: "green",
},
wasPriceText: {
  color: "black",
  // textDecorationLine: 'line-through',

},
divider: {
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  width: "60%",
},
  profileImg: {
    width: '100%',
    height: '100%',
    // top: "25%",
    // left: "17%", 
  },
  cardTop: {
    backgroundColor: 'white',
    borderColor: "#b5b5b5",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    // marginBottom: -20,
    width: '90%',
    height: '62%',
    // bottom: "27%",
    marginVertical: 5,
  },
  card: {
    backgroundColor: 'white',
    borderColor: "#b5b5b5",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    // marginBottom: -20,
    width: '90%',
    // height: '100%',
    // bottom: "27%",
    marginVertical: 5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});