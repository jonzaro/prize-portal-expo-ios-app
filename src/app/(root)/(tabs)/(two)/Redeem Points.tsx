import { View, ScrollView, StyleSheet } from 'react-native';
import { StyledText as Text } from '_components/Text/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExternalLink } from '_components/Link/ExternalLink';
import Product from '../../../../components/Product';
import type {ProductType} from '../../../../utils/types';
import { FontAwesome5 } from '@expo/vector-icons'; 




//DATA
import newData from '../../../../assets/data/newData.json';

//NEED TO CREATE LOGIC MATH FUNC TO CONVERT POINTS INTO DOLLARS TO SUBTRACT FROM TOTAL
const rewardsPoints = 4250;
function calculateRewards(rewardsPoints) {
  // Ensure rewardsPoints is a number
  if (typeof rewardsPoints !== 'number') {
    throw new Error('Rewards points must be a number');
  }
  // Perform the calculation and rounding
  const roundedValue = Math.round(rewardsPoints / 50);
  return roundedValue;
}
const result = calculateRewards(rewardsPoints);




export default function TabTwoScreen() {

  const expensiveItems = newData.filter(product => product.price > 100)

  return (
    <SafeAreaView style={styles.bg} className="flex-1 items-center justify-center">
      <View style={[styles.card, styles.shadowProp]}>   

      <Text className="text-sm"><FontAwesome5 name="coins" size={14} color="#2b5e48" />  You have {rewardsPoints} rewards points!  <FontAwesome5 name="coins" size={14} color="#2b5e48" /></Text>
      <Text className="text-sm">That's {result} rewards dollars!</Text>
      </View>
      
      <View style={[styles.card, styles.shadowProp]}>   

      <Text className="text-sm">Your reward points are like magic currency that works 
      wonders on any of our fantastic promotional items! Treat yourself and explore the endless
      possibilities because you've earned it</Text>
      </View>


        <ScrollView horizontal={false}>
      {expensiveItems.map((item, index) => (
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