import { PromoCoupon } from '_utils/types';
import React from 'react';
import {Text, View, Image,  StyleSheet} from 'react-native';



export const PromoCouponItem = ({promoCoupon}: {promoCoupon: PromoCoupon}) => {


    return(
        <View           
            style={styles.cardNew} 
            className="justify-center">
            <Image source={promoCoupon.brandImage} style={styles.imageEarn} resizeMode="contain"/>
            <Text style={styles.title}>{promoCoupon.promotionText}</Text>
            <Text style={styles.description}>{promoCoupon.promotionDescription}</Text>
          </View>
    )
}


const styles = StyleSheet.create({  
    topImg: {
        position: 'absolute',
        width: '40%',
        height: '30%',
        right: "4%",
        // bottom: "65%",
    
      },
      bg: {
        backgroundColor: '#62d2a2',
      },
      cardNew: {
        flex: 1, // Take up equal space in the row
        margin: 2,
        top: "5%",
        padding: 6,
        width: '100%',
        height: '30%',
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 4, // Android shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      title: {
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: "35%",
        bottom: "25%",
        // marginBottom: 18,
      },
      description: {
        fontSize: 12,
        marginLeft: "30%",
        color: '#555',
        bottom: "18%",
        left: "3%",
      },
      imageEarn: {
        height: 50,
       width: 90, // Set the width as needed
       top: "15%",
      }

})