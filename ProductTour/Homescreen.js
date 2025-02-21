import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Start} from '../Constants/Images';
import {scale} from 'react-native-size-matters';

const Homescreen = props => {
  return (
    <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
        <View style={[styles.textview]}>
          <Text style={[styles.text1]}>Easiest way</Text>
          <Text style={[styles.text1]}>to start investing</Text>
        </View>
        <View style={[styles.imageview]}>
          <Image resizeMode="contain" style={[styles.img]} source={Start} />
        </View>
        <View style={[styles.lastview]}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('welcomemessage')}
            style={[styles.button]}>
            <Text style={[styles.text2]}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
            <Text style={[styles.text3]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#12033A',
  },
  textview: {
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('10%'),
    marginHorizontal: hp('4%'),
  },
  text1: {
    color: '#fff',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('34'),
  },
  imageview: {
    height: hp('45%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: hp('1%'),
  },
  img: {
    height: hp('50%'),
    width: wp('90%'),
    marginTop: hp('4%'),
  },
  lastview: {
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('4%'),
    marginHorizontal: hp('1%'),
  },
  button: {
    height: hp('7%'),
    width: wp('87%'),
    justifyContent: 'center',
    backgroundColor: '#0047FF',
    borderRadius: 18,
  },
  text2: {
    color: '#ffffff',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('15'),
    textAlign: 'center',
  },
  text3: {
    color: '#ffffff',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('15'),
    textAlign: 'center',
    marginTop: hp('3%'),
  },
});
