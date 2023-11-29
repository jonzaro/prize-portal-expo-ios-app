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
    <SafeAreaView
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
      <ScrollView style={{width: "100%", left: "5%"}}>
      <View className="mt-5 p-5" style={styles.card2}>   
      <Image source={require("../../../assets/images/bubble2.jpeg")} style={styles.imageBubble} resizeMode='contain' />
              <Text style={styles.bubbleText}>
        When you spend money at partner brands, you accrue points that can be 
        redeemed for discounts, items, or exclusive perks.
        </Text>
      </View>
      <View style={styles.containerFlex}>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.apple.com')}>
          <View style={styles.item}>
            <Image 
            source={require('../../../assets/images/Apple.png')}
            style={styles.imageFlex}
            resizeMode="contain" // Adjust the resizeMode as needed
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.target.com')}>
          <View style={styles.item}>
            <Image 
            source={require('../../../assets/images/Target.png')}
            style={styles.imageFlex}
            resizeMode="contain" // Adjust the resizeMode as needed
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.bestbuy.com')}>
          <View style={styles.item}>
            <Image 
            source={require('../../../assets/images/BestBuy.png')}
            style={styles.imageFlex}
            resizeMode="contain" // Adjust the resizeMode as needed
            />
          </View>
        </TouchableOpacity>

      </View>


      <View style={styles.row}>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.nike.com')}>
          <View style={styles.item}>
            <Image 
            source={require('../../../assets/images/Nike.png')}
            style={styles.imageFlex}
            resizeMode="contain" // Adjust the resizeMode as needed
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.walmart.com')}>
          <View style={styles.item}>
            <Image 
            source={require('../../../assets/images/Walmart.png')}
            style={styles.imageFlex}
            resizeMode="contain" // Adjust the resizeMode as needed
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.macys.com')}>
          <View style={styles.item}>
            <Image 
            source={require('../../../assets/images/Macys.png')}
            style={styles.imageFlex}
            resizeMode="contain" // Adjust the resizeMode as needed
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    <TouchableOpacity onPress={() => Linking.openURL('https://storyset.com/business')}>
  <Text style={{color: '#2b5e48', fontSize: 8}}>Business illustrations by Storyset</Text>
</TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
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
  imageBubble: {
    position: 'absolute',
    height: "200%",
    width: "200%", // Set the width as needed
    top: "10%",
    
    // marginBottom: -20,  
  },
  bubbleText: {
    fontSize: 9,
    top: "25%",
    left: "45%",
  },
  containerFlex: {
    flex: 3,
    justifyContent: 'center',
    flexDirection: 'column', // Flex direction is set to column for vertical arrangement
    // marginRight: 40,
  },
  row: {
    flex: 1,
    flexDirection: 'row', // Flex direction is set to row for horizontal arrangement
  },
  item: {
    flex: 1,
    margin: 25,
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
    bottom: "7%",
    marginVertical: 5,
    
  },
  card2: {
    // backgroundColor: '#c2f2dd',
    // borderColor: "#b5b5b5",
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: '60%',
    height: '35%',
    bottom: "1%",
    right: "3%",
    marginVertical: 0,
    
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});