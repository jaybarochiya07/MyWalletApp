import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';

import {Graph, invite, LinkIcon, VerifyTop} from '../Constants/Images';import {scale} from 'react-native-size-matters';
const Landingpage =({ navigation }) => {
  return (
   <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
         <View style={[styles.mainview]}>
                 <ImageBackground
                   resizeMode="stretch"
                   style={[styles.Topimgbackground]}
                   source={VerifyTop}>
                   <View style={[styles.textview]}>
                     <Text style={[styles.Welcometext]}>Welcome, Robert</Text>
                     <Text style={[styles.Welcometext, {marginTop: hp('2%')}]}>
                       $1200.00
                     </Text>
                     <Text
                       style={[
                         styles.Welcometext,
                         {fontSize: scale('20'), color: '#808080'},
                       ]}>
                       Your account value
                     </Text>
                   </View>
                 </ImageBackground>
               </View>
                 <View style={[styles.unlockview]}>
                  <View style={[styles.unlockview1]}></View>
                    
                  </View>
                  
      </ScrollView>
    </SafeAreaView>
  );
};

export default Landingpage;
const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mainview: {
    height: hp('45%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Topimgbackground: {
    height: hp('45%'),
    width: wp('100%'),
  },
  Welcometext: {
    color: '#ffffff',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('27'),
    marginTop: hp('1%'),
    textAlign: 'center',
  },
  textview: {
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
    marginHorizontal: hp('2%'),
  },
  unlockview: {
    height: hp('35%'),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: hp('16%'),
    marginHorizontal: hp('3%'),
    backgroundColor: '#f1f3fa',
    borderRadius: 35,
    flexDirection:'row',
    
  },
  unlockview1: {
    height: hp('34%'),
    width: wp('80%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    
    
  },
  Graphimgbackground: {
    height: hp('18%'),
    width: wp('40%'),
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  
});
