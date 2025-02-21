import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ProgresBG, Progres1,Apple,Google,} from '../Constants/Images';
import PhoneInput from 'react-native-phone-number-input';

import {scale} from 'react-native-size-matters';

const Tel = props => {
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
        <View style={[styles.textview]}>
          <ImageBackground
            resizeMode="contain"
            style={[styles.Progresbg]}
            source={ProgresBG}>
            <Image
              resizeMode="contain"
              style={[styles.Progres]}
              source={Progres1}></Image>
          </ImageBackground>
          <Text style={[styles.text1]}>Getting Started</Text>
        </View>
        <View style={[styles.textinputview]}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            placeholderStyle={{fontFamily: 'DMSans-VariableFont_opsz,wght'}}
            color="#000"
            textInputProps={{
              placeholderTextColor: '#686873',
              style: {
                fontSize: scale('16'),
                fontFamily: 'DMSans-VariableFont_opsz,wght',
                marginTop: hp('0.5%'),
              },
            }}
            placeholder={'0 00 00 00 00'}
            onChangeFormattedText={text => setPhoneNumber(text)}
            withShadow
            autoFocus
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.textInput}
          />
        
          <TouchableOpacity  onPress={() => props.navigation.navigate('digit')} style={[styles.button]}>
            <Text style={[styles.text2]}>Send Code</Text>
          </TouchableOpacity>
        </View>
       <View style={[styles.accountview]}>
        <View><Text style={[styles.accounttext]}>Already have an account?</Text></View>
        <TouchableOpacity  onPress={() => props.navigation.navigate('home')}><Text style={[styles.accounttext1]}>Sign In</Text></TouchableOpacity>
        </View>
        <Text style={[styles.or]}>Or continue with: </Text>
        <View style={[styles.logoview]}>
        <View style={[styles.logoview1]}>
             <Image
              resizeMode="contain"
              style={[styles.Applelogo]}
              source={Apple}></Image>
              </View>
        {/* <View style={[styles.logoview2]}> */}
        <Image
              resizeMode="contain"
              style={[styles.Applelogo]}
              source={Google}></Image>
        {/* </View> */}

        </View>
        <Text style={[styles.agree]}>By creating an account you agree </Text>
        <View style={[styles.accountview]}>
        <View><Text style={[styles.accounttext,{ fontSize: scale('13'),}]}>to our</Text></View>
        <TouchableOpacity><Text style={[styles.accounttext1,{ fontSize: scale('13'),}]}>Terms and Conditions</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tel;
const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textview: {
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
    marginHorizontal: hp('5%'),
  },
  Progresbg: {
    height: hp('1%'),
    width: wp('40%'),
    bottom: hp('2%'),
  },
  Progres: {
    height: hp('1%'),
    width: wp('20%'),
  },
  text1: {
    color: '#12033A',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('34'),
    marginTop: hp('1%'),
  },
  textinputview: {
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('10%'),
    marginHorizontal: hp('2%'),
  },

  phoneContainer: {
    height: hp('8%'),
    width: wp('85%'),
    borderRadius: 15,
    borderWidth:1,
    borderColor: '#E5E4E8',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('12'),
    paddingHorizontal:5,
    marginTop: hp('5%'),
    marginBottom: hp('2%'),
  },
  textInput: {
    backgroundColor: 'transparent',
    height: hp('10%'),

    bottom: wp('2.5%'),
    placeholderTextColor: '#12033a',
  },
  lastview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: hp('1%'),
  },

  button: {
    height: hp('7%'),
    width: wp('87%'),
    justifyContent: 'center',
    backgroundColor: '#12033a',
    borderRadius: 18,
    marginBottom: hp('5%'),
  },
  text2: {
    color: '#ffffff',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('15'),
    textAlign: 'center',
  },
  accountview:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop: hp('1.5%'),
  },
  accounttext:{
    color: '#12033a',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('13'),
},
  accounttext1:{
    color: '#0047FF',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('13.5'),
    start: wp('2%'),

  },
  or:{
    color: '#12033a',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('13'),
    textAlign:'center',
    marginTop: hp('15%'),
  },
  logoview:{
    height: hp('9%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
    marginHorizontal: hp('5%'),
    flexDirection:'row',
    justifyContent:'space-evenly',
 },
 logoview1:{
    // height: hp('9%'),
    // width: wp('18%'),
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth:2,
    // borderRadius:18,
    // // borderColor:'#808080',
    // start: wp('5%'),
 },
 logoview2:{
    height: hp('9%'),
    width: wp('18%'),
right:wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    // borderColor:'#808080',

    borderRadius:18,
 },
 Applelogo:{
  height: hp('9%'),
  width: wp('18%'),
 },
 agree:{
    color: '#12033a',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('13'),
    textAlign:'center',
    marginTop: hp('5%'),
  },
})
