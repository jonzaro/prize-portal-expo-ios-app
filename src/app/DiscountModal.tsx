import React, { useEffect, useRef, useState } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { FontAwesome5 } from '@expo/vector-icons';


export const DiscountModal = () => {

const [showDiscountModal, setShowDiscountModal] = useState<boolean>(true);
const [showGift, setShowGift] = useState<boolean>(false);

const viewRef = useRef(null);

const discountRef = useRef(null);

useEffect(() => {
    // Trigger the animation when the component mounts
    viewRef.current.fadeIn(3000)
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
                <View style={styles.couponCode}>
                    <Text className="text-black text-xs ml-20">Claim your discount by using code</Text>
                    <Text className="text-teal-300 text-2xl ml-28">GETMY40</Text>
                </View>
                <View style={styles.closeModalIcon}>
                    <TouchableOpacity onPress={handleCloseModal}>
                        <AntDesign name="closecircleo" size={22} color="black" />
                    </TouchableOpacity>
                </View>
              </>  
                ): 
                <>
                    <Image source={require('../assets/images/AIPresents.jpeg')} style={{ width: "140%", height: "100%", position: "absolute"}} />
                        <TouchableOpacity onPress={() => {handleShowGift()}}>
                        <Image source={require('../assets/images/newUserBanner.png')} style={{ width: 450, height: 35 , top: "300%", right: "20%"}} />
                            <Image source={require('../assets/images/discount.jpeg')} style={{ width: 450, height: 50 , top: "300%", right: "20%" }}  />
                        </TouchableOpacity>
                        <View style={styles.pointer}><FontAwesome5 name="hand-point-right" size={20} color="white" /></View>

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
        top: "5%",
        right: "70",
    },
    discountImg: {
        paddingVertical: 20,
        marginVertical: 10,
        width: '75%',
        height: '65%',
        bottom: '135%',
        left: "22%",
        },
    discountText: {
        fontSize: 35,
        color: '#62d2a2',
        textAlign: 'center',
        bottom: "135%",       
        },
    couponCode: {
        width: "120%",
        height: "21%",
        padding: 10,
        borderWidth: 2,
        borderColor: "black",
        borderStyle: "dashed",
        right: "10%",
        bottom: "60%",
        },
    pointer: {
        top: "66%",
        left: "4%",
        },
    discountBanner: {
        // background: "transparent",
        backgroundColor: 'white',
        borderRadius: 4,
        width: '115%',
        height: '30%',
        top: '23%',
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
    bottom: '69%',
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  innerCard: {
    backgroundColor: 'white',
    borderColor: '#7d7c7c',
    borderWidth: 2,
    overflow:`hidden`,
    paddingVertical: 20,
    paddingHorizontal: 45,
    marginVertical: 10,
    width: '115%',
    height: '90%',
    right: "7%",
    borderRadius: 8,
  },

  closeModalIcon: {
    width: '13%',
    height: '13%',
    bottom: "167%",
    left: "105%",
  },
});
