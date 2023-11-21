import { View, Text, Image } from 'react-native';
import { ProductNew } from "_utils/types"



interface RenderItemProps {
  item: ProductNew;
}

export default function FeedItem({ item }: RenderItemProps) {
  return (
    <View className="bg-blue-200 divide-y divide-solid mb-4 px-2 py-3">
      <Text className="text-blue-800">{item.id}</Text>
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
      <Text>{item.description}</Text>

    </View>
  );
}
