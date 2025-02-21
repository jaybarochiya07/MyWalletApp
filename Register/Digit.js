
import React, { useState,useRef } from 'react';


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
import {ProgresBG, Stepper} from '../Constants/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';

const Digit = props => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  // Handle OTP Input
  const handleChange = (text, index) => {
    if (text.length <= 1) {
      let newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Move focus to next input
      if (text && index < 3) {
        inputRefs.current[index + 1].focus();
      }

      // When last digit is entered, navigate
      if (index === 3 && text) {
        setTimeout(() => {
          navigation.navigate('personal');
        }, 500);
        // Small delay for better UX
      }
    }
  };

  return (
    <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
        <View style={[styles.textview]}>
            <TouchableOpacity  onPress={() => props.navigation.navigate('tel')}>
                  <Ionicons
            name="arrow-back"
            color={'#000'}
            size={25}
            style={{right: wp('42%')}}
          />
          </TouchableOpacity>
         
          <ImageBackground
            resizeMode="contain"
            style={[styles.Progresbg]}
            source={ProgresBG}>
            <Image
              resizeMode="contain"
              style={[styles.Progres]}
              source={Stepper}></Image>
          </ImageBackground>
          <Text style={[styles.text1]}>Enter 4-digit code</Text>
          <Text style={[styles.text2]}>We’ve sent the code to ****234</Text>
        </View>

        <View style={styles.otpInputContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={text => handleChange(text, index)}
            />
          ))}
        </View>
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Digit;
const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textview: {
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3%'),
    marginHorizontal: hp('2%'),
  },
  Progresbg: {
    height: hp('1%'),
    width: wp('40%'),
    bottom: hp('2%'),
  },
  Progres: {
    height: hp('1%'),
    width: wp('23%'),
  },
  text1: {
    color: '#12033A',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('25'),
    marginTop: hp('1%'),
  },
  text2: {
    color: '#040415',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('14'),
    marginTop: hp('1.5%'),
  },

  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E4E8',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
    marginTop: hp('8%'),

  },
  resendText: {
    color: '#0047ff',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('14'),
    textAlign:'center',
    marginTop: hp('4%'),

  },
});
