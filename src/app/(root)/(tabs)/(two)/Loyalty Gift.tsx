import { FlashList } from '@shopify/flash-list';
import { View , Text} from 'react-native';
import { Link } from 'expo-router';
import { ProductNew } from "_utils/types"
import analytics from '_utils/analytics/segment';

//DATA
import feedData from '_assets/data/feed.json';
import newProducts from '_assets/data/newData.json';

//COMPONENTS
import FeedItem from '_components/Feed/FeedItem';

//TODO: issue with typescript causing crashes

interface RenderItemProps {
  item: ProductNew;
}
export default function Feed() {
  analytics.trackScreen('Feed');
  
  const mobileProducts = newProducts.filter((product) => {
    return product.category[0].includes('Smartphones');
  });

  return (
  <>
      <Text>Congratulations, Gold Tier Royalty! Your membership shines brighter than a pot of gold, 
        and as a token of our gratitude, we're letting you pick a gift that's as dazzling as your 
        status.</Text>
    <FlashList
      data={mobileProducts}
      renderItem={({ item }: RenderItemProps) => (
        <Link
          onPress={() => {
            analytics.trackEvent('Feed Item Pressed', {
              feedId: item.id,
            });
          }}
          href={{
            pathname: '/feed/[id]',
            params: {
              id: item.id,
              
            },
          }}
        >
          <View className="my-4">
            <FeedItem item={item} />
          </View>
        // </Link>
        )}
        estimatedItemSize={200}
        
        />
        </>
  );
}
