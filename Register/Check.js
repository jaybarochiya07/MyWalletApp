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
import {ProgresBG,p5} from '../Constants/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';

const Check = props => {


  return (
    <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
        <View style={[styles.textview]}>
          <TouchableOpacity onPress={() => props.navigation.navigate('RHome')}>
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
              source={p5}></Image>
          </ImageBackground>
          <Text style={[styles.text1]}>Almost there!</Text>
          <Text style={[styles.text2]}>Please take a moment to ensure all</Text>
          <Text style={[styles.text2, {bottom: hp('0.5%')}]}>
            of the information you provide is correct
          </Text>
        </View>
        <View style={[styles.textview2]}>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Full name</Text>
            <View style={styles.row}>
              <Text style={styles.value}>Robert Wilson</Text>
              <TouchableOpacity>
                <Text style={[styles.edit, {}]}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Date of birth</Text>
            <View style={styles.row}>
              <Text style={styles.value}>05/03/1992</Text>
              <TouchableOpacity>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.infoBox, {height: hp('10.2%')}]}>
            <Text style={styles.label}>Residential address</Text>
            <View style={styles.row}>
              <Text style={[styles.value]}>
                428 Greenwich Ave 88,{'\n'}Brooklyn, NY 11239
              </Text>
              <TouchableOpacity>
                <Text style={[styles.edit, {marginTop: hp('1%')}]}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.lastview]}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Acceptance')}
            style={[styles.button]}>
            <Text style={[styles.text3]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Check;

const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textview: {
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3%'),
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
    width: wp('20%'),
    start: wp('6%'),
  },
  text1: {
    color: '#12033A',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('25'),
    marginTop: hp('1%'),
  },
  text2: {
    color: '#12033a',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('14'),
    marginTop: hp('1.5%'),
  },
  infoBox: {
    height: hp('8%'),
    width: wp('85%'),
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E5E4E8',
    marginTop: hp('1.5%'),

    paddingHorizontal: 15,
  },
  label: {
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('13'),
    color: '#686873',
    marginTop: hp('1%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('0.7%'),
    fontFamily: 'DMSans-Bold',
    fontSize: scale('15'),
    color: '#12033a',
  },
  edit: {
    fontFamily: 'DMSans-Bold',
    fontSize: scale('15'),
    color: '#12033a',
    bottom: hp('0.7%'),
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
  text3: {
    color: '#ffffff',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('15'),
    textAlign: 'center',
  },
});
