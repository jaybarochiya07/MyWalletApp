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
import {ProgresBG, p6, Lighticonslarge, Fire} from '../Constants/Images';
import {scale} from 'react-native-size-matters';
// import { Bottom } from '../navigation/RootNavigation';
// import { BottomTabBar } from '@react-navigation/bottom-tabs';

const Congrats = ({ navigation }) => {
  // const navigation = useNavigation()
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
              source={p6}></Image>
          </ImageBackground>
        </View>
        <View style={[styles.textview1]}>
          <View style={[styles.imgview]}>
            <Image
              resizeMode="contain"
              style={[styles.img]}
              source={Fire}></Image>
          </View>

          <Text style={[styles.text1]}>Congrats!</Text>
         

          <Text style={[styles.text2, {top: hp('3%')}]}>
          Your account will be
          </Text>
          <Text style={[styles.text2, {top: hp('2.1%')}]}>
            activated in 3 business days
          </Text>
          <View style={[styles.lastview]}>
            <TouchableOpacity
            
            onPress={() => navigation.navigate("Landingpage",)}
              
              style={[styles.button]}>
              <Text style={[styles.text3]}>Got it</Text>
              
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Congrats;
const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#686873',
  },
  textview: {
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
    marginHorizontal: hp('2%'),
  },
  textview1: {
    height: hp('85%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1%'),
    marginHorizontal: hp('3%'),
    backgroundColor: '#ffffff',
    borderRadius: 40,
  },

  Progresbg: {
    height: hp('1%'),
    width: wp('40%'),
    bottom: hp('2%'),
  },
  Progres: {
    height: hp('1%'),
    width: wp('23%'),
    start: wp('6%'),
  },
  img: {
    height: hp('25%'),
    width: wp('50%'),
    marginHorizontal: hp('1%'),
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
  imgview: {
    height: hp('30%'),
    width: wp('70%'),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: hp('4%'),
  },
  lastview: {
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
    marginHorizontal: hp('1%'),
    backgroundColor: '#fff',
  },
  button: {
    height: hp('8%'),
    width: wp('60%'),
    justifyContent: 'center',
    backgroundColor: '#12033a',
    borderRadius: 18,
    marginTop: hp('15%'),
  },
  text3: {
    color: '#ffffff',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('15'),
    textAlign: 'center',
  },
});
