import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { useColorScheme as nativewindUseColorScheme } from 'nativewind';
import { TabBarIcon } from '_components/Icon/TabBarIcon';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  const { colorScheme } = nativewindUseColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'dark' ? 'white' : 'black',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }: any) => (
            <TabBarIcon name="home" color={color} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={colorScheme === 'dark' ? 'white' : 'black'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="(two)"
        options={{
          title: 'Rewards',
          tabBarIcon: ({ color }) => <TabBarIcon name="money" color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Offers',
          tabBarIcon: ({ color }) => <TabBarIcon name="bullseye" color={color} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'FAQs',
          tabBarIcon: ({ color }) => <TabBarIcon name="question" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
