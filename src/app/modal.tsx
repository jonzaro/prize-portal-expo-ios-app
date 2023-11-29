import { StatusBar } from 'expo-status-bar';
import { View, Platform, StyleSheet, ScrollView} from 'react-native';
import { StyledText as Text } from '_components/Text/StyledText';
import * as Progress from 'react-native-progress';
import { AntDesign } from '@expo/vector-icons'; 
import { useAuth } from 'src/store/authStore/auth.store';


export default function ModalScreen() {
  const user = useAuth((state) => state.user);
  return (
    <>
    <View className="flex-1 items-center justify-middle p-4">
      <Text className="text-2xl font-bold">How do your points work?</Text>
          <Text className="text-sm" >
            Unlock a world of exclusive benefits with our rewards program! Simply shop at our beloved brands, 
earn points, and watch your loyalty elevate through silver, gold, and platinum tiers. Redeem your
 hard-earned points for exciting items and exclusive coupons, making every purchase a delightful 
 step towards extraordinary rewards.
          </Text>
      <View className="mt-11">
      <Text>
        Your Rewards Points
      </Text>
    </View>
    <View>
      <Text>
    <AntDesign name="Trophy" size={24} color="#5e5438" /><Text className="text-lg font-bold">Gold Tier - {user?.rewardsPoints}</Text></Text>
        <Progress.Bar progress={0.7}  color="#62d2a2" borderWidth={1} borderColor="#7a7568" borderRadius={12} width={280} height={25}/>
    </View>
      </View>
      <ScrollView  style={{width: "100%", height: 200, left: "5%", top: "20%"}}>
      <View style={[styles.card2, styles.shadowProp]}>   
      <Text className="text-xl text-center text-teal-600 font-bold tracking-widest">
        Terms and Conditions
      </Text>
      <Text className="text-md text-center text-teal-500 mb-5">TLDR; Don't exploit the system</Text>
        <Text style={styles.finePrintText}>
        Our loyalty points program is designed for individuals aged 18 and above,
         and participation is contingent on adherence to local laws and regulations.
          Points are earned through eligible purchases at participating brands and
           are non-transferable, holding no cash value. Redemption of points is subject
            to availability and may entail additional terms and conditions.

        It's important to note that points earned might have an expiration date, and 
        any expired points are considered forfeited and cannot be reinstated. Users are
         responsible for maintaining the security of their account credentials, and the
          program reserves the right to suspend or terminate accounts in the case of 
          fraudulent activity.

        The program may undergo modifications or be terminated at any time, with or 
        without notice. In the event of termination, any unused points may be forfeited.
         Privacy is a priority, and participant information is collected and used in 
         accordance with our privacy policy, ensuring the confidentiality of personal data.

      In cases of disputes related to the program, resolution will be pursued through
       binding arbitration, with participants agreeing to waive their right to a trial
        by jury. This ensures a fair and efficient means of addressing any disagreements 
        within the program.        </Text>
      </View>
      </ScrollView>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    alignItems: 'center',
    boderWidth: "4",
    boderColor: "black", 
    marginBottom: 50,
  },
  finePrintText: {
    fontSize: 10,
  },
  card2: {
    // backgroundColor: '#c2f2dd',
    // borderColor: "#b5b5b5",
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: '100%',
    height: '100%',
    right: "3%",
    top: "40%", 
    marginVertical: 0,
    
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
})