import { StatusBar } from 'expo-status-bar';
import { View, Platform, StyleSheet} from 'react-native';
import { StyledText as Text } from '_components/Text/StyledText';
import * as Progress from 'react-native-progress';
import { AntDesign } from '@expo/vector-icons'; 



export default function ModalScreen() {
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
    <AntDesign name="Trophy" size={24} color="#5e5438" /><Text className="text-lg font-bold">Gold Tier - 4250pts</Text></Text>
        <Progress.Bar progress={0.7}  color="#d19f1f" borderWidth={1} borderColor="#7a7568" borderRadius={12} width={280} height={25}/>
    </View>
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
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
  }
})