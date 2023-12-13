import { FlashList } from '@shopify/flash-list';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import {
  View,
  Modal,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useAuth } from 'src/store/authStore/auth.store';
import { useUserProductStore } from 'src/store/userProduct.store';
import { Entypo } from '@expo/vector-icons';

//DATA

//COMPONENTS
import Product from '../../../components/Product';
import { PromoCouponItem } from '../../../components/PromoCouponItem';



export default function Feed() {
  const user = useAuth((state) => state.user);
  const [pointsItemModalVisible, setPointsItemModalVisible] = useState(false);
  const [couponModalVisible, setCouponModalVisible] = useState(false);

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

  const { loyaltyGift, promoCoupon, pointsRedemptionItem } =
    useUserProductStore((state) => state);

  const rewardsPrice = pointsRedemptionItem
    ? Math.round(pointsRedemptionItem.price - result)
    : null;


    
  return (
    <>
      <SafeAreaView style={styles.bg}>
        {/* <View style={{flex:1}}> */}
        <Image
          source={require('../../../assets/images/profile.png')}
          style={{
            height: 180,
            width: 200,
            left: "47%",
            top: 10,
            resizeMode: 'contain',
          }}
          // resizeMode="contain" // Adjust the resizeMode as needed
        />
        <View
          style={[
            styles.cardTop,
            styles.shadowProp,
            
          ]}
        >
          <Text style={styles.title}>CHA-CHING!</Text>
          <Text style={styles.text}>
            Welcome to your world of savings—you can find your thank you gift,
            promo deals, and points redemption items here.
          </Text>
        </View>

        {/* </View> */}

        <Modal visible={pointsItemModalVisible} animationType="slide" transparent>
          <TouchableOpacity onPress={() => setPointsItemModalVisible(false)}>
          <View style={styles.modal}>
          <Text style={{left: "15%", marginBottom: 5}}><Text className="text-teal-700 font-bold">Step1 </Text>  <FontAwesome5 name="car-side" size={24} color="black" />  Head to the retailer. </Text>
            <Text style={{left: "15%", marginBottom: 5}}><Text className="text-teal-700 font-bold">Step2   </Text><FontAwesome5 name="expand" size={24} color="black" />  Scan the coupon barcode.</Text>
            <Text style={{left: "15%", marginBottom: 5}}><Text className="text-teal-700 font-bold">Step3   </Text><FontAwesome5 name="shopify" size={24} color="black" />  Enjoy your item.</Text>

              <View style={{width: "80%", height: "20%", padding:10, borderColor: "black", borderWidth: 4, borderStyle: "dashed", left: "10%", top: "5%"}}>
                <Text style={{fontSize:8}}>Expires 05/2024</Text>
              {
                <Image source={require('../../../assets/images/barcode.jpeg')} style={{left: 10, top: 5, width: "90%", height: "40%"}} resizeMode="contain"/>
              }
              <Text style={{marginTop: 5, fontSize: 10}}>Terms and Conditions</Text>
              <Text style={{fontSize: 6}}>
              This digital coupon can be used once per customer or account.
              The discount is not applicable to items already on sale, bundled offers, or in conjunction with other
              ongoing promotions. Please note that this coupon is non-transferable and cannot be exchanged 
              for cash or other forms of discounts.
              </Text>
            </View>
          </View>
          </TouchableOpacity>
        </Modal>
          
        <Modal visible={couponModalVisible} animationType="slide" transparent>
          <TouchableOpacity onPress={() => setCouponModalVisible(false)}>
            <View style={styles.modal}>

            <Text style={{left: "15%", marginBottom: 5}}><Text className="text-teal-700 font-bold">Step1 </Text>  <FontAwesome5 name="car-side" size={24} color="black" />  Head to the retailer. </Text>
            <Text style={{left: "15%", marginBottom: 5}}><Text className="text-teal-700 font-bold">Step2   </Text><FontAwesome5 name="expand" size={24} color="black" />  Scan the barcode.</Text>
            <Text style={{left: "15%", marginBottom: 5}}><Text className="text-teal-700 font-bold">Step3   </Text><FontAwesome5 name="money-bill-alt" size={24} color="black" />  Enjoy your savings.</Text>

              <View style={{width: "80%", height: "20%", padding:10, borderColor: "black", borderWidth: 4, borderStyle: "dashed", left: "7%", top: "5%"}}>
                <Text style={{fontSize:8}}>Coupon expires 05/2024</Text>
              {
                <Image source={require('../../../assets/images/barcode.jpeg')} style={{left: 10, top: 5, width: "90%", height: "40%"}} resizeMode="contain"/>
              }
              <Text style={{marginTop: 5, fontSize: 10}}>Terms and Conditions</Text>
              <Text style={{fontSize: 6}}>
              This digital coupon is valid from 01/2024 to 09/2024  and can be used once per customer or account.
              The discount is not applicable to items already on sale, bundled offers, or in conjunction with other
              ongoing promotions. Please note that this coupon is non-transferable and cannot be exchanged 
              for cash or other forms of discounts.
              </Text>
            </View>
            </View>
          </TouchableOpacity>
        </Modal>

        <ScrollView
          horizontal={false}
          contentContainerStyle={{ flexGrow: 1 }}
          style={{ width: '99%', height: "71%", bottom: 110, left: '5%' }}
        >

          <View style={[styles.card, styles.shadowProp]}>
            {promoCoupon ? (
              <>
                <TouchableOpacity onPress={() => setCouponModalVisible(true)}>
                  <PromoCouponItem promoCoupon={promoCoupon} />
                </TouchableOpacity>
              </>
            ) : (
              <Text>
                Claim exclusive deals from our family of brands in the Offers
                tab
              </Text>
            )}
          </View>

          <View style={[styles.card2, styles.shadowProp]}>
            {pointsRedemptionItem ? (
              <>
                <TouchableOpacity onPress={() => setPointsItemModalVisible(true)}>
                  <View style={styles.pointsRedemptionDetails}>
                  <Text> ${pointsRedemptionItem?.price} Retail price</Text>
                  <Text style={styles.pointsText}>
                    {' '}
                    - ${result} Rewards dollars
                  </Text>
                  <View style={styles.divider}></View>
                  <Text> ${rewardsPrice} Your price </Text>
                  </View>
                  <Product
                    title={pointsRedemptionItem.title}
                    description={pointsRedemptionItem.description}
                    price={pointsRedemptionItem.price}
                    rating={pointsRedemptionItem.rating}
                    brand={pointsRedemptionItem.brand}
                    image={pointsRedemptionItem.image}
                    category={pointsRedemptionItem.category} id={0}                  />
                </TouchableOpacity>
              </>
            ) : (
              <Text>
                Head over to the Rewards tab and select an item to apply your
                rewards to!
              </Text>
            )}
          </View>



          {loyaltyGift ? (
              <>
          <View style={[styles.card3, styles.shadowProp]}>
              <Product
                  key={loyaltyGift.id}
                  title={loyaltyGift.title}
                  description={loyaltyGift.description}
                  price={loyaltyGift.price}
                  rating={loyaltyGift.rating}
                  brand={loyaltyGift.brand}
                  image={loyaltyGift.image}
                  category={loyaltyGift.category} id={loyaltyGift.id}       />
              <View style={{width: "90%", height: "15%", left: 18, backgroundColor: "#64b093", borderRadius: 10, bottom: "25%", flexGrow:1, padding: 15}}>
                <Text style={{color: "white", fontWeight: "bold", top: 5, left: "8%"}}>Your thank you gift is on the way!</Text>
              <Text style={{marginTop: 10, left: "8%", color: "white", fontWeight: "bold"}}>
              <FontAwesome5 name="plane" size={24} color="white" /> ----------- 
              <FontAwesome5 name="shipping-fast" size={24} color="white" /> -----------
              <Entypo name="home" size={24} color="white" />
              </Text>
          </View>
              </View>

              </>
            ) : (
              <View style={[styles.card4, styles.shadowProp]}>

              <Text>
                Head over to the Rewards tab to select your thank you gift!
              </Text>
              </View>
            )}

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#62d2a2',
    flexGrow: 1,
  },
  modal: {
    height: "100%", 
    width: "100%", 
    backgroundColor: "white", 
    borderRadius:15, 
    top: "50%", 
    padding: 10,
    paddingTop: 30,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "#092e23",
    // borderTopColor:  "green"
  },
  cardTop: {
    backgroundColor: 'white',
    borderColor: '#b5b5b5',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '40%',
    bottom: 140,
    left: "8%",
    marginVertical: 5,
  }, 
  card: {
    backgroundColor: 'white',
    borderColor: '#b5b5b5',
    borderWidth: 1,
    // flex: 1,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '90%',
    marginVertical: 5,
  }, 
  card2: {
    backgroundColor: 'white',
    borderColor: '#b5b5b5',
    borderWidth: 1,
    // flex: 1,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '90%',
    marginVertical: 5,
  }, 
  card3: {
    backgroundColor: 'white',
    borderColor: '#b5b5b5',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    // flexGrow: 1,
    width: '90%',
    // height: "37%",
    marginVertical: 5,
  },
  card4: {
    backgroundColor: 'white',
    borderColor: '#b5b5b5',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    // flex: 1,
    width: '90%',
    // height: "38%",
    marginVertical: 5,
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  pointsRedemptionDetails: {
    width:"95%",
    height: "19%",
    paddingLeft: "40%",
    paddingVertical: 10,
    top: 22,
    left: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#4c9e79",
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00796B',
    textAlign: 'center',
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '60%',
  },
  pointsText: {
    color: '#4c9e79',
  },
  // Add more styles as needed
});
