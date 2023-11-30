import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { StyledText as Text } from '_components/Text/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExternalLink } from '_components/Link/ExternalLink';
import Product from '../../../../components/Product';
import type {ProductType} from '../../../../utils/types';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { router} from 'expo-router';
import { useUserProductStore } from 'src/store/userProduct.store';



//DATA
import newData from '../../../../assets/data/newData.json';
import { useAuth } from 'src/store/authStore/auth.store';




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
    alert(`${'Apply ' + result + ' rewards dollars to this item?'}`) 
    setPointsRedemptionItem(product);
    router.push('/profile')
 
  }

  return (
    <SafeAreaView style={styles.bg} className="flex-1 items-center justify-center">
      <View style={[styles.card, styles.shadowProp]}>   

      <Text className="text-sm"><FontAwesome5 name="coins" size={14} color="#2b5e48" />  You have {user?.rewardsPoints} rewards points!  <FontAwesome5 name="coins" size={14} color="#2b5e48" /></Text>
      <Text className="text-sm">That's {result} rewards dollars!</Text>
      </View>
      
      <View style={[styles.card, styles.shadowProp]}>   

      <Text className="text-sm">Your reward points are like magic currency that works 
      wonders on any of our fantastic promotional items! Treat yourself and explore the endless
      possibilities because you've earned it</Text>
      </View>


        <ScrollView horizontal={false} style={{width: "95%"}}>
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
          category={item.category}

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

})