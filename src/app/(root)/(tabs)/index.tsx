import { StatusBar } from 'expo-status-bar';
import { Text, View , Image, StyleSheet, ScrollView, Linking, TouchableOpacity} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { viewportWidth, spacing } from '_utils/viewport';
import { Link } from 'expo-router';
import analytics from '_utils/analytics/segment';

//i18n
import { useTranslation } from 'react-i18next';

//Components
import { Carousel } from '_components/Carousel/Carousel';
//Data
import homeData from '_assets/data/home.json';
import { classNames } from '_utils/classNames';
import { useColorScheme } from 'nativewind';
import { useAuth } from 'src/store/authStore/auth.store';
import { ExternalLink } from '_components/Link/ExternalLink';

export default function Index() {
  const { t } = useTranslation();
  const { colorScheme } = useColorScheme();

  const user = useAuth((state) => state.user);


  const handleApplePress = () => {
    Linking.openURL("www.apple.com");
  };

  analytics.trackScreen('Home');

  return (
    <>
    <Image
      source={require('../../../assets/images/logoIcon.jpg')}
      style={styles.imageLogo}
    />
    <View className="ml-10">
      <Text className="text-lg bottom-7 left-8">
      Welcome {user?.nickname}!
      </Text>
    </View>
    <SafeAreaView style={styles.bg}
      className={classNames({
        'flex flex-1 items-center justify-start': true,
        'bg-white': colorScheme === 'light',
        'bg-black': colorScheme === 'dark',
      })}
    >
      <View style={[styles.card, styles.shadowProp]}>   
      <Image
      source={require('../../../assets/images/Wallet-bro.png')}
      style={styles.imageEarn}
      resizeMode="contain"
      />


      <Text className="text-sm px-8 ml-6">
      You have {user?.rewardsPoints} loyalty points!
      </Text>
      </View>

      

      <View className="w-screen">
        <Carousel
          data={homeData}
          showPagination={true}
          renderItem={({ item }: any) => (
            <Link
              onPress={() => {
                analytics.trackEvent('Banner Pressed', {
                  bannerId: item.id,
                });
              }}
              href={{
                pathname: '/banner/[id]',
                params: {
                  id: item.id,
                  title: item.title,
                  description: item.description,
                },
              }}
              style={{
                width: viewportWidth - spacing,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 3,
                elevation: 1,
                
              }}
              className="justify-center items-center rounded-2xl p-4"
            >
              <Text className="text-xl font-bold">{item.title}-   </Text>
              <Text>{item.description}</Text>
            </Link>
          )}
        />
      </View>



      <View style={styles.bar}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.apple.com')}>
            <Image 
            source={require('../../../assets/images/Apple.png')}
            style={{height:60, width:60, top: -4, left: 120, position: 'absolute'}}
            resizeMode="contain" // Adjust the resizeMode as needed
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.bestbuy.com')}>
            <Image 
            source={require('../../../assets/images/BestBuy.png')}
            style={{height:40, width:40, bottom: -45, right: 50, position: 'absolute'}}
            resizeMode="contain" // Adjust the resizeMode as needed
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.walmart.com')}>
            <Image 
            source={require('../../../assets/images/Walmart.png')}
            style={{height:60, width:60, top: -5, left: 41, position: 'absolute'}}
            resizeMode="contain" // Adjust the resizeMode as needed
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.macys.com')}>
            <Image 
            source={require('../../../assets/images/Macys.png')}
            style={{height:60, width:60, top: -3, right: 121, position: 'absolute'}}
            resizeMode="contain" // Adjust the resizeMode as needed
            />
        </TouchableOpacity>
      </View>


      <View className="mt-5 p-5" style={styles.card2}>   
      <Image source={require("../../../assets/images/bubble2.jpeg")} style={styles.imageBubble} resizeMode='contain' />
              <Text style={styles.bubbleText}>
        When you spend money at partner brands, you accrue points that can be 
        redeemed for discounts, items, or exclusive perks.
        </Text>
      </View>

      <TouchableOpacity onPress={() => Linking.openURL('https://storyset.com/business')}>
        <Text style={{color: '#2b5e48', fontSize: 8, top: 162}}>Business illustrations by Storyset</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#c6f5df',
  },
  containerTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    boderWidth: "4",
    boderColor: "black", 
    paddingTop: 30,
    marginBottom: 50,
  },
  imageLogo: {
    width: 40, // Set the width as needed
    height: 40, // Set the height as needed
    borderRadius: 5, // Optional: Add border-radius for rounded corners
    marginLeft:20,
  },
  imageEarn: {
    height: 120,
   width: 200, // Set the width as needed
    bottom: "2%",
    left: "16%",
        marginBottom: -20,
  },
  bar: {
    backgroundColor: "white",
    width: "100%",
    height: 50,
    top: 20,
  },
  
  imageBubble: {
    // position: 'absolute',
    height: "135%",
    width: "135%", // Set the width as needed
    bottom: "10%",
    left: "5%",

    
    // marginBottom: -20,  
  },
  bubbleText: {
    fontSize: 9,
    position: 'absolute',
    top: "35%",
    width: "23%",
    right: "18%",
  },

  imageFlex: {
    width: 40, // Set the width as needed
    height: 40, // Set the height as needed
  },
  card: {
    backgroundColor: 'white',
    borderColor: "#b5b5b5",
    borderWidth: 1,
    borderRadius: 8,
    // paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: -20,
    width: '90%',
    height: '30%',
    bottom: "3%",
    marginVertical: 5,
    
  },
  card2: {
    backgroundColor: 'white',
    // borderColor: "#b5b5b5",
    position: 'absolute',
    paddingVertical: 15,
    paddingHorizontal: 5,
    width: 633,
    height: '25%',
    right: 4,
    bottom: "5%",
    
   
    marginVertical: 0,
    
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});