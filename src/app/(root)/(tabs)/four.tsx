import { FlashList } from '@shopify/flash-list';
import { View , Image, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import analytics from '_utils/analytics/segment';
import { useAuth } from 'src/store/authStore/auth.store';
//DATA

//COMPONENTS



export default function Feed() {
  analytics.trackScreen('Feed');
  const user = useAuth((state) => state.user);

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
  
    <Image
        source={require('../../../assets/images/profile.png')}
        style={styles.profileImg}
        resizeMode="contain" // Adjust the resizeMode as needed
      />
      
        <ScrollView horizontal={false} style={{width: "95%", left: "5%"}}>
      <View style={[styles.card, styles.shadowProp]}>   
        <Text className="text-xs">
          IMAGE OF GIFT
          Your thank you gift is on its way!
        </Text>
      </View>

      <View style={[styles.card, styles.shadowProp]}>   
        <Text className="text-xs">
          IMAGE OF PURCHASE
          You've applied {user?.rewardsPoints} loyalty points to your purchase!
        </Text>
      </View>
 

      <View style={[styles.card, styles.shadowProp]}>   
        <Text className="text-xs">
          When you are ready to use your promo deal, simply click on it and 
          show the bar code to the cashier.
        </Text>
      </View>

      
    </ScrollView>  
    </SafeAreaView>
        </>
  );
}



const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#62d2a2',

  },
  profileImg: {
    width: '60%',
    height: '40%',
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