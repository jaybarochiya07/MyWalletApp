import React, {useContext} from 'react';
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
import {bhuro1, p2, ProgresBG} from '../Constants/Images';
import {scale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation,useRoute} from '@react-navigation/native';
import { IdentityContext } from '../IdentityContext';



const Checkquality = props => {
    const navigation = useNavigation();
    const { setSelfieUploaded  ,} = useContext(IdentityContext);
    const handleUpload = () => {
        setSelfieUploaded (true);
        props.navigation.navigate('Verifystart',);
      };
  return (
    <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
        <View style={[styles.checkview]}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Selfie')}>
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
              source={p2}></Image>
          </ImageBackground>
          <Text style={[styles.text1]}>Check quality</Text>
          <Text style={[styles.text2]}>
            Please make sure your card details{' '}
          </Text>
          <Text style={[styles.text2, {bottom: hp('0.5%')}]}>
            are clear to read with no blur or glare
          </Text>
        </View>
        <View style={[styles.checkview1]}>
          <Image
          resizeMode="contain"
          source={bhuro1}
           style={[styles.checkview2]}>

          </Image>
        </View>
        <View style={[styles.checkview3]}>
          <TouchableOpacity onPress={handleUpload} style={[styles.checktouch]}>
            <Text style={[styles.checktouchtext]}>All clear</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.checktouchtext1]}>Take a new photo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkquality;

const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  checkview: {
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
    marginHorizontal: hp('2%'),
  },
  Progresbg: {
    height: hp('1%'),
    width: wp('40%'),
    bottom: hp('2%'),
  },
  Progres: {
    height: hp('1%'),
    width: wp('22%'),
    start: wp('1%'),
  },
  text1: {
    color: '#12033A',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('25'),
    marginTop: hp('1%'),
    alignItems: 'flex-end',
  },
  text2: {
    color: '#12033a',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('14'),
    marginTop: hp('1.5%'),
  },
  checkview1: {
    height: hp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('10%'),
    marginHorizontal: hp('2%'),
  },
  checkview2: {
    height: hp('28%'),
    width: wp('90%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    
  },
  checkview3: {
    height: hp('15%'),
    alignItems: 'center',
    marginTop: hp('20%'),
    marginHorizontal: hp('2%'),
  },
  checktouch: {
    height: hp('8%'),
    width: wp('90%'),
    borderRadius: 15,
    top: hp('2%'),
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#0047FF',
  },
  checktouchtext: {
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('18'),
  },
  checktouchtext1: {
    textAlign: 'center',
    color: '#0047FF',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('15'),
    marginTop: hp('5%'),
  },
});
