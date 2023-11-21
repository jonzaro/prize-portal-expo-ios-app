import { LanguagePickerModal } from '_components/Picker/LanguagePickerModal';
import { MaterialTopTabs } from '_layouts/material-top-tabs';
import { useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLangModal } from 'src/store/langStore/lang-picker-modal.store';
import { LanguagePickerModalTrigger } from '_components/Picker/LanguagePickerModalTrigger';
import { useColorScheme } from 'nativewind';
import { Image , View,  StyleSheet } from 'react-native';

export default function IndexTopTabsLayout() {
  const { setOptions } = useNavigation();
  const { visible, close } = useLangModal();
  const { colorScheme } = useColorScheme();

  useLayoutEffect(() => {
    setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      className="flex-1 h-screen"
      style={{
        backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
      }}
    ><View style={styles.topBanner}>
      <Image
        source={require('../../assets/images/logo.jpg')}
        style={styles.imageLogo}
        resizeMode="center" // Adjust the resizeMode as needed
      /> 
      </View>
      <MaterialTopTabs />
      <LanguagePickerModal visible={visible} close={close} />
      <LanguagePickerModalTrigger />
    </SafeAreaView>
  );
} 


const styles = StyleSheet.create({
  imageLogo: {
    width: 220, // Set the width as needed
    height: 100, // Set the height as needed
    marginLeft: 80,
    marginTop: 20,
    borderRadius: 25, // Optional: Add border-radius for rounded corners
  },
  topBanner: {
    backgroundColor: '#62d2a2',
    height: 140,
    width: 500,
  },
  bottomBanner: {
    backgroundColor: '#62d2a2',
    height: 130,
    width: 500,
  },
})
