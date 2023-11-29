import React from 'react';
import { View, TouchableOpacity, Image, Linking } from 'react-native';

const ExternalLinkImage = ({ imageUrl, linkUrl }) => {
  const handlePress = () => {
    // Open the external link when the image is pressed
    Linking.openURL(linkUrl);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Image source={{ uri: imageUrl }} style={{width: 40, height: 40}}/>
      </TouchableOpacity>
    </View>
  );
};

export default ExternalLinkImage;