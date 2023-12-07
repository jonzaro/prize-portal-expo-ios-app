import React, { useEffect, useRef, useState } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export const DiscountModal = () => {

const [showDiscountModal, setShowDiscountModal] = useState<boolean>(true);
const [showGift, setShowGift] = useState<boolean>(false);

const viewRef = useRef(null);

const discountRef = useRef(null);

useEffect(() => {
    // Trigger the animation when the component mounts
    viewRef.current.fadeIn(2000)
}, []);



  const handleCloseModal = () => {
    setShowDiscountModal(false);
  };

const handleShowGift = () => {
    setShowGift(true);
}

  return showDiscountModal ? (
    <>
    <Animatable.View style={[styles.card, styles.shadowProp]} ref={viewRef} delay={5000}>
        <View style={styles.innerCard}>
            {showGift ? (
            <>
                <View style={styles.giftCard} >
                    <Image source={require('../assets/images/giftBox.gif')} style={{ width: 250, height: 250}} resizeMode="contain"/>
                </View>
                <View style={styles.discountImg} >
                    <Image source={require('../assets/images/percent.gif')} style={{ width: 80}} resizeMode="contain"/>
                    <Text style={styles.discountText}>
                        40
                    </Text>
                    </View>
                <View style={styles.closeModalIcon}>
                    <TouchableOpacity onPress={handleCloseModal}>
                        <AntDesign name="closecircleo" size={28} color="black" />
                    </TouchableOpacity>
                </View>
              </>  
                ): 
                <>
                    <View style={styles.discountBanner}>
                        <Image source={require('../assets/images/newUserBanner.png')} style={{ width: 275, height: 150, bottom: "15%"}} resizeMode="contain"/>

                        <TouchableOpacity onPress={() => {handleShowGift()}}>
                            <Image source={require('../assets/images/discount.png')} style={{ width: 275, height: 150 }} />
                        </TouchableOpacity>
                    </View> 

                </>
                }   
        </View>
    </Animatable.View>
                
    </>
  ) : null;
};

const styles = StyleSheet.create({
    giftCard: {
        // background: "transparent",
        backgroundColor: 'white',

        paddingVertical: 20,
        marginVertical: 10,
        width: '105%',
        height: '65%',
        top: "25%",
        right: "9%",
      },
    discountImg: {
        paddingVertical: 20,
        marginVertical: 10,
        width: '75%',
        height: '105%',
        top: '-105%',
        left: "15%",
      },
      discountText: {
        fontSize: 35,
        color: '#62d2a2',
        textAlign: 'center',
        bottom: "59%",


      },
      discountBanner: {
        // background: "transparent",
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 10,
        width: '115%',
        height: '90%',
        top: '13%',
        left: "-6%",
      },
  card: {
    // background: "transparent",
    // backgroundColor: 'white',
  
    paddingVertical: 20,
    paddingHorizontal: 45,
    marginVertical: 10,
    width: '105%',
    height: '75%',
    bottom: '49%',
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  innerCard: {
    backgroundColor: 'white',
    borderColor: '#315445',
    borderWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 45,
    marginVertical: 10,
    width: '100%',
    height: '110%',
    borderRadius: 8,
  },

  closeModalIcon: {
    width: '13%',
    height: '13%',
    bottom: "180%",
    left: "100%",
  },
});
