import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Card, Frame, Imagepassport} from '../Constants/Images';
import {scale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';


// import { Container } from './styles';

const PassportPhoto = props => {
  return (
    <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
        <View style={[styles.mainview]}>
          <ImageBackground
            resizeMode="cover"
            style={[styles.passportimg]}
            source={Imagepassport}>
            <View style={[styles.passportview]}>
              <View style={[styles.passportview1]}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Verifystart')}>
                  <Ionicons
                    name="arrow-back"
                    color={'#ffffff'}
                    size={28}
                    style={{top: 10, right:wp('42%'),}}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={[styles.Verifytext]}>Passport</Text>
                </View>
              </View>
              <View style={[styles.frameview]}>
                <ImageBackground
                  resizeMode="contain"
                  style={[styles.framimg]}
                  source={Frame}>
                  <ImageBackground
                    resizeMode="contain"
                    style={[styles.framimg]}
                    source={Card}>
                    <Image
                      resizeMode="cover"
                      style={[styles.framimg1]}
                      source={Imagepassport}></Image>
                  </ImageBackground>
                </ImageBackground>
              </View>
              <View style={[styles.frameview1]}>
                <Text style={[styles.Verifytext1]}>Front of card</Text>
                <Text style={[styles.Verifytext2]}>
                  Position all 4 corners of the front{' '}
                </Text>
                <Text style={[styles.Verifytext2, {top: hp('3%')}]}>
                  clearly in the frame
                </Text>
              </View>
              <View style={[styles.frameview2]}>
                <View>
                  <TouchableOpacity style={[styles.flastouch]}>
                    <Ionicons
                      name="flash-off"
                    //   color={'#'}
                      size={30}
                      style={{color: '#12033a',}}></Ionicons>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity    onPress={() => props.navigation.navigate('PassportCheck')}
                    style={[
                      styles.flastouch,
                      {
                        height: hp('11%'),
                        width: wp('22%'),
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderColor: '#636471',
                      },
                    ]}></TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={[styles.flastouch]}>
                          <Ionicons
                      name="camera-reverse-sharp"
                    //   color={'#'}
                      size={30}
                      style={{color: '#12033a',}}></Ionicons>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PassportPhoto;

const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },
  mainview: {
    height: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  passportimg: {
    height: hp('100%'),
    width: wp('100%'),
  },
  passportview: {
    height: hp('100%'),
    backgroundColor: '#040415CC',
    alignItems: 'center',
  },
  passportview1: {
    height: hp('10%'),
    width: wp('90%'),
    justifyContent: 'center',
    alignItems: 'center',
    top: hp('5%'),
  },
  Verifytext: {
    color: '#ffffff',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('28'),
    bottom: hp('3%'),
    textAlign: 'center',
  },
  frameview: {
    height: hp('30%'),
    width: wp('90%'),
    justifyContent: 'center',
    alignItems: 'center',
    top: hp('18%'),
  },
  framimg: {
    height: hp('28%'),
    width: wp('88%'),
    justifyContent: 'center',
  },
  framimg1: {
    height: hp('27%'),
    width: wp('83.5%'),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  frameview1: {
    height: hp('16%'),
    width: wp('90%'),
    alignItems: 'center',
    top: hp('22%'),
  },
  Verifytext1: {
    color: '#ffffff',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('25'),
    textAlign: 'center',
  },
  Verifytext2: {
    color: '#ffffff',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('15'),
    top: hp('2%'),
    textAlign: 'center',
  },
  frameview2: {
    height: hp('12%'),
    width: wp('90%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    top: hp('28%'),
    flexDirection: 'row',
    padding: 20,
  },
  flastouch: {
    height: hp('9%'),
    width: wp('18%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,

    backgroundColor: '#ffffff',
  },
});
