// import { FlashList } from '@shopify/flash-list';
// import { View } from 'react-native';
// import { Link } from 'expo-router';
// import { ProductNew } from "_utils/types"
// import analytics from '_utils/analytics/segment';

// //DATA
// import feedData from '_assets/data/feed.json';
// import productData from '_assets/data/products.json';

// //COMPONENTS
// import FeedItem from '_components/Feed/FeedItem';



// interface RenderItemProps {
//   item: ProductNew;
// }

// export default function Feed() {
//   analytics.trackScreen('Feed');

//   const newProducts = productData.map((product) => {
//     return product
//   });

//   return (
//     <FlashList
//       //TODO: replace feedData with product json file data
//       data={newProducts}
//       renderItem={({ item }: RenderItemProps) => (
//         <Link
//           onPress={() => {
//             analytics.trackEvent('Feed Item Pressed', {
//               feedId: item.id,
//             });
//           }}
//           href={{
//             pathname: '/feed/[id]',
//             params: {
//               id: item.id,
//             },  
//           }}
//         >
//           <View className="my-4">
//             <FeedItem item={item} />
//           </View>
//         </Link>
//       )}
//       estimatedItemSize={200}
//     />
//   );
// }
