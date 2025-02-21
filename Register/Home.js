import React, {useState} from 'react';
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
import {ProgresBG, p3} from '../Constants/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';

const RHome = props => {
  const [Streetaddress, setStreetaddress] = useState('');
  const [Number, setNumber] = useState('');
  const [City, setCity] = useState('');
  const [Region, setRegion] = useState('');
  const [code, setcode] = useState('');

  return (
    <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
        <View style={[styles.textview]}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('personal')}>
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
              source={p3}></Image>
          </ImageBackground>
          <Text style={[styles.text1]}>Home address</Text>
        </View>
        <View style={[styles.textinputview]}>
          <View style={[styles.textinputview1]}>
            <TextInput
              style={styles.username}
              placeholder={'Street address'}
              placeholderStyle={{fontFamily: 'DMSans-VariableFont_opsz,wght'}}
              color="#000"
              placeholderTextColor="#686873"
              value={Streetaddress}
              onChangeText={text => {
                setStreetaddress(text);
              }}
            />
          </View>
          <View style={[styles.textinputview1]}>
            <TextInput
              style={styles.username}
              placeholder={'Apt / Suite number'}
              placeholderStyle={{fontFamily: 'DMSans-VariableFont_opsz,wght'}}
              color="#000"
              placeholderTextColor="#686873"
              value={Number}
              onChangeText={text => {
                setNumber(text);
              }}
            />
          </View>
          <View style={[styles.textinputview1]}>
            <TextInput
              style={styles.username}
              placeholder={'City'}
              placeholderStyle={{fontFamily: 'DMSans-VariableFont_opsz,wght'}}
              color="#000"
              placeholderTextColor="#686873"
              value={City}
              onChangeText={text => {
                setCity(text);
              }}
            />
          </View>
          <View style={[styles.textinputview1]}>
            <TextInput
              style={styles.username}
              placeholder={'Region'}
              placeholderStyle={{fontFamily: 'DMSans-VariableFont_opsz,wght'}}
              color="#000"
              placeholderTextColor="#686873"
              value={Region}
              onChangeText={text => {
                setRegion(text);
              }}
            />
          </View>
          <View style={[styles.textinputview1]}>
            <TextInput
              style={styles.username}
              placeholder={'Zip code'}
              placeholderStyle={{fontFamily: 'DMSans-VariableFont_opsz,wght'}}
              color="#000"
              placeholderTextColor="#686873"
              value={code}
              onChangeText={text => {
                setcode(text);
              }}
            />
          </View>
          <View style={[styles.textinputview1]}>
            <TouchableOpacity  onPress={() => props.navigation.navigate('Map')} style={[styles.Showonmapview]}>
              <Text style={[styles.Showtext]}>Show on map</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Check')}
              style={[styles.Showonmapview2]}>
                <Ionicons
                                name="chevron-forward-outline"
                                color={'#ffffff'}
                                size={25}
                                style={styles.buttonicon}/>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RHome;

const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textview: {
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1%'),
    marginHorizontal: hp('2%'),
  },
  Progresbg: {
    height: hp('1%'),
    width: wp('40%'),
    bottom: hp('2%'),
  },
  Progres: {
    height: hp('1%'),
    width: wp('24%'),
    start: wp('1%'),
  },
  text1: {
    color: '#12033A',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('25'),
    marginTop: hp('1%'),
  },

  textinputview: {
    height: hp('70%'),
    width: wp('100%'),
    alignSelf: 'center',
  },
  textinputview1: {
    height: hp('9%'),
    width: wp('100%'),
    alignSelf: 'center',
    marginTop: hp('1.5%'),
    flexDirection: 'row',
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
    marginTop: hp('0.5%'),
  },
  Showonmapview: {
    height: hp('7%'),
    width: wp('35%'),
    backgroundColor: '#12033a',
    borderRadius:15,
    start: wp('7%'),
    alignSelf: 'center',
  },
  Showonmapview2: {
    height: hp('7%'),
    width: wp('14%'),
    backgroundColor: '#12033a',
    borderRadius:15,
    start: wp('43%'),
    alignSelf: 'center',
  },
  Showtext: {
    color: '#ffffff',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('12'),
    textAlign: 'center',
    marginTop: hp('2.2%'),
  },
  buttonicon:{
    Color:'#ffffff',
    alignSelf:'center',
    marginTop: hp('1.5%'),
    fontSize: scale('25'),
    
  }
});
