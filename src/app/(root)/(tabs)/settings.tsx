import { SafeAreaView } from 'react-native-safe-area-context';

//COMPONENTS
import { Button, Text, View, StyleSheet } from 'react-native';
import DeviceInfo from '_components/Device/DeviceInfo';
import AppVersion from '_components/Device/AppVersion';
import { useAuth } from 'src/store/authStore/auth.store';

import { useColorScheme as nativewindUseColorScheme } from 'nativewind';
import LanguagePicker from '_components/Picker/LanguagePicker';

export default function Settings() {
  const { colorScheme, toggleColorScheme } = nativewindUseColorScheme();


  const logout = useAuth(({ logout }) => logout);

  return (
    <SafeAreaView style={styles.bg} className="flex-1 items-center">
     
      <View style={[styles.cardSignOut, styles.shadowProp]}>
      <Button title={"Sign-out"} onPress={logout} color="red" />


      </View>
      <View style={[styles.card, styles.shadowProp]}>

        <Text className="text-lg font-bold">Device Info</Text>
        <DeviceInfo />
        <AppVersion />
      </View>
      <View style={[styles.cardLang, styles.shadowProp]}>

        <LanguagePicker />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#62d2a2',
  },
cardSignOut: {
    borderColor: '#315445',
    backgroundColor: 'white',
    borderWidth: 1,
    borderOpacity: 0.5,
    borderRadius: 5,
    width: "90%",
},
  card: {
    borderColor: '#315445',
    backgroundColor: 'white',
    borderWidth: 1,
    // flex: 1,
    borderOpacity: 0.5,
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "90%",
  },
  cardLang: {
    borderColor: '#315445',
    backgroundColor: 'white',
    borderWidth: 1,
    // flex: 1,
    borderOpacity: 0.5,
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "90%",
    height: "30%",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});