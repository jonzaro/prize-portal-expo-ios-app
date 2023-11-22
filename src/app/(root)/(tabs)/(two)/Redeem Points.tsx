import { View } from 'react-native';
import { StyledText as Text } from '_components/Text/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExternalLink } from '_components/Link/ExternalLink';

export default function TabTwoScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text>Your reward points are like magic currency that works 
      wonders on any of our fantastic promotional items! Treat yourself and explore the endless
       possibilities because you've earned it</Text>
      <View className="my-8 h-1 w-4/5" />

      <ExternalLink
        className="px-8 text-center"
        href="https://github.com/ritmillio/expo-starter-kit"
      >
        <Text className="text-blue-500">
          I AM TAB 2
          <Text className="text-2xl text-orange-300 font-bold"> STAR</Text>
        </Text>
      </ExternalLink>
    </SafeAreaView>
  );
}
