import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import analytics from '_utils/analytics/segment';

const BannerDetail = () => {
  const data = useLocalSearchParams();

  analytics.trackScreen('BannerDetail', {
    bannerId: data.id,
  });

  return (
    <View className="flex-1 items-center pt-20 bg-green-300">
          <Image 
            source={require('../../assets/images/burst.png')}
            style={styles.bgImg}
            resizeMode="contain" // Adjust the resizeMode as needed
            />

      <Stack.Screen
        options={{
          headerTitle: `Banner - ${data.title}`,
        }}
      />
      <View style={[styles.card, styles.shadowProp]}>
      <Image 
            source={require('../../assets/images/greenBar.jpg')}
            style={{height: "25%", width: "150%",  left: "-22%", top: "-45%" }}
            resizeMode="contain" // Adjust the resizeMode as needed
            />

      <Image 
            source={require('../../assets/images/cart.gif')}
            style={{height:100, width:100,  left: "1%", top: "9%", position: "absolute"}}
            resizeMode="contain" // Adjust the resizeMode as needed
            />
      {/* <Text className="text-2xl uppercase dark:text-white">BannerDetail</Text> */}
      <Text className="text-xl bottom-20 left-20">{data.title}</Text>
      <Text className="text-xs bottom-10">{data.longDescription}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
bg: {
  backgroundColor: '#62d2a2',

},
card: {
  backgroundColor: 'white',
  borderColor: '#b5b5b5',
  borderWidth: 1,
  overflow: 'hidden', 
  borderRadius: 8,
  paddingTop: 80,
  // paddingVertical: 20,
  paddingHorizontal: 20,
  top: "12%",
  width: '90%',
  height: '40%',  
  marginVertical: 5,
}, 
shadowProp: {
  shadowColor: '#171717',
  shadowOffset: { width: -2, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
},
bgImg: {
  position: 'absolute',
  bottom: "10%",
  opacity: 0.3,
  height: 800, 
  
}
})


export default BannerDetail;
