import { View, ScrollView, StyleSheet } from 'react-native';
import { StyledText as Text } from '_components/Text/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExternalLink } from '_components/Link/ExternalLink';
import Product from '../../../../components/Product';
import type {ProductTypes} from '../../../../utils/types';


import newData from '../../../../assets/data/newData.json';

export default function TabTwoScreen() {

  const expensiveItems = newData.filter(product => product.price > 100)

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
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