import { View } from 'react-native';
import appVersion from '_config/version';
import { StyledText as Text } from '_components/Text/StyledText';

export default function AppVersion() {
  return (
    <View className="bg-gray-500 px-4 py-2 rounded-lg">
      <Text className="dark:text-teal-700 text-white">
        Your app version is: {`${appVersion}`}
      </Text>
    </View>
  );
}
