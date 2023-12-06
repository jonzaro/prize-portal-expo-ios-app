import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { StyledText as Text } from '_components/Text/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';
import Product from '../../../../components/Product';
import type {ProductType} from '../../../../utils/types';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { router} from 'expo-router';
import { useUserProductStore } from 'src/store/userProduct.store';



//DATA
import newData from '../../../../assets/data/newData.json';
import { useAuth } from 'src/store/authStore/auth.store';
import { Alert } from 'react-native';




function calculateRewards(rewardsPoints?: number) {
  // Ensure rewardsPoints is a number
  if (typeof rewardsPoints !== 'number') {
    throw new Error('Rewards points must be a number');
  }
  // Perform the calculation and rounding
  const roundedValue = Math.round(rewardsPoints / 50);
  return roundedValue;
}


export default function RedeemPoints() {
  
  const setPointsRedemptionItem = useUserProductStore((store) => store.setPointsRedemptionItem);

  const user = useAuth((state) => state.user);
  const expensiveItems = newData.filter(product => product.price > 100)
  const result = calculateRewards(user?.rewardsPoints);

  const handlePress = (product: ProductType) => {
    Alert.alert(
      'Confirm Redemption',
      `Apply ${result} rewards dollars to this item?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            // Handle cancel button press (optional)
          },
        },
        {
          text: 'OK',
          onPress: () => {
            // Handle OK button press
            setPointsRedemptionItem(product);
            router.push('/profile');
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.bg} className="flex-1 items-center justify-center">

      <View style={styles.card}>   
      <View style={styles.topText}>
      <Text className="text-sm"><FontAwesome5 name="coins" size={14} color="#2b5e48" />  You have {user?.rewardsPoints} rewards points!  <FontAwesome5 name="coins" size={14} color="#2b5e48" /></Text>
      <Text className="text-sm">That's {result} rewards dollars!</Text>
      </View>
      <Text className="text-xsm">Your reward points are like magic currency that works 
      wonders on any of our fantastic promotional items! Treat yourself and explore the endless
      possibilities because you've earned it</Text>
      </View>

        <ScrollView horizontal={false} style={styles.scrollView}>
      {expensiveItems.map((item, index) => (
        <TouchableOpacity onPress={() => handlePress(item)}>

        <Product
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            wasPrice={item.wasPrice}
            rating={item.rating}
            brand={item.brand}
            image={item.image}
            category={item.category} id={0}
        />
        </TouchableOpacity>
      ))}
    </ScrollView>    
    
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#62d2a2',
  },
  topText: {
    alignItems: 'center',
    marginBottom: 10,
  },
  scrollView: {
    width: "95%", 
    top: 40,
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    borderColor: '#315445',
    borderWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 45,
    width: "105%",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: .5,
    shadowRadius: 3,
  },

})