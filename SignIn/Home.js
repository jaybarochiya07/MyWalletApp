import React ,{useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { IconButton } from '../Constants/Images';

import { scale } from 'react-native-size-matters';

const Home = props => {
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  return (
    <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
        <View style={[styles.textview]}>
          <Text style={[styles.text1]}>Welcome back</Text>
          <Text style={[styles.text2]}>Sign in to your account</Text>
        </View>
        <View style={[styles.textinputview]}>
          <View style={[styles.textinputview1]}>
            <TextInput
              style={styles.username}
              placeholder={'Username'}
              placeholderStyle={{ fontFamily: 'DMSans-VariableFont_opsz,wght' }}
              color="#000"
              placeholderTextColor="#686873"
              value={Username}
              onChangeText={text => {
                setUsername(text);
              }}
            />
          </View>
          <View style={[styles.textinputview1, { marginTop: hp('2%') }]}>
            <TextInput
              style={styles.username}
              placeholder={'Password'}
              keyboardType={'numeric'}
              color="#000"
              placeholderTextColor="#686873"
              value={Password}
              onChangeText={text => {
                setPassword(text);
              }}
            />
          </View>
          <View style={[styles.textinputview2]}>
            <View style={[styles.forgotview]}>
              <Text style={[styles.fortext]}>Forgot password?</Text>
            </View>
            <View style={[styles.forgotview1]}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('pin')}>
                <Image
                  resizeMode="contain"
                  style={[styles.img]}
                  source={IconButton}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
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

  text1: {
    color: '#12033A',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('34'),
  },
  text2: {
    color: '#686873',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('12'),
    marginTop: hp('2%'),
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
  textinputview: {
    height: hp('35%'),
    width: wp('100%'),

    marginTop: hp('3%'),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textinputview1: {
    height: hp('9%'),
    width: wp('100%'),

    alignSelf: 'center',
  },
  username: {
    height: hp('8%'),
    width: wp('85%'),
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E5E4E8',
    start: wp('7%'),
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('12'),
    paddingHorizontal: 15,
    marginTop: hp('0.6%'),
  },
  textinputview2: {
    height: hp('8%'),
    width: wp('100%'),

    marginTop: hp('3%'),
    flexDirection: 'row',
  },
  forgotview: {
    height: hp('8%'),
    width: wp('50%'),
  },
  forgotview1: {
    height: hp('8%'),
    width: wp('50%'),

    justifyContent: 'center',
  },
  fortext: {
    color: '#12033a',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('12'),
    start: wp('8%'),
  },
  img: {
    height: hp('7%'),
    width: wp('20%'),

    alignSelf: 'flex-end',
  },
});
