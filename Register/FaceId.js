import React from 'react';
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
import {Base, Icon, ProgresBG, p5, p7, p8} from '../Constants/Images';
import {scale} from 'react-native-size-matters';

const FaceId = props => {
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
              source={p8}></Image>
          </ImageBackground>
          <Text style={[styles.text1]}>Face ID for faster </Text>
          <Text style={[styles.text1]}>payment</Text>
          <Text style={[styles.text2]}>Enable Face ID to let you log in</Text>
          <Text style={[styles.text2, {bottom: hp('1%')}]}>
            & proceed with your transactions faster
          </Text>
        </View>
        <View style={[styles.textview, {top: hp('10%')}]}>
          <ImageBackground
            resizeMode="contain"
            style={[styles.Basebg]}
            source={Base}>
            <Image
              resizeMode="contain"
              style={[styles.Baseimg]}
              source={Icon}></Image>
          </ImageBackground>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('home')}
          style={[styles.button]}>
          <Text style={[styles.textb]}>Enable face ID</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={[styles.textb, {color: '#0047FF', marginTop: hp('2%')}]}>
          Skip, I’ll do this later
        </Text>
        </TouchableOpacity>
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default FaceId;

const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textview: {
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('7%'),
    marginHorizontal: hp('2%'),
  },
  textview2: {
    height: hp('40%'),
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
    width: wp('27%'),
    start: wp('6%'),
  },
  text1: {
    color: '#12033A',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('27'),
    marginTop: hp('1%'),
  },
  text2: {
    color: '#12033a',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('14'),
    marginTop: hp('1.5%'),
  },
  Basebg: {
    height: hp('10%'),
    width: wp('20%'),
  },
  Baseimg: {
    height: hp('4%'),
    width: wp('8%'),
    marginTop: hp('2.7%'),

    alignSelf: 'center',
  },
  button: {
    height: hp('7%'),
    width: wp('85%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#0047FF',
    borderRadius: 18,
    marginTop: hp('25%'),
  },
  textb: {
    color: '#ffffff',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('15'),
    textAlign: 'center',
  },
});
