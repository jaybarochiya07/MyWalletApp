import React, {useState,useContext} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ProgresBG, Stepper} from '../Constants/Images';
import {scale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import {useNavigation} from '@react-navigation/native';
import { IdentityContext } from '../IdentityContext';


const Verifystart = props => {
  const navigation = useNavigation();
  const { idUploaded,selfieUploaded } = useContext(IdentityContext);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
        <View style={[styles.mainview]}>
          <ImageBackground
            resizeMode="contain"
            style={[styles.Progresbg]}
            source={ProgresBG}>
            <Image
              resizeMode="contain"
              style={[styles.Progres]}
              source={Stepper}></Image>
          </ImageBackground>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('NewUser')}>
            <Ionicons
              name="close-outline"
              color={'#000'}
              size={30}
              style={{start: wp('40%')}}
            />
          </TouchableOpacity>
          <Text style={[styles.Verifytext]}>Verify identity</Text>
          {/* Government ID */}
          <View style={[styles.idview]}>
            <Text style={[styles.idtext]}>Government ID</Text>
            <Text
              style={[
                styles.idtext,
                {fontSize: scale('13'), color: '#12033acc'},
              ]}>
              Take a driver’s license,
            </Text>
            <Text
              style={[
                styles.idtext,
                {fontSize: scale('13'), color: '#12033acc'},
              ]}>
              national identity card or passport photo
            </Text>
            <TouchableOpacity
            //   onPress={() =>
            //     navigation.navigate(setModalVisible(true))
            //   }
                onPress={() => setModalVisible(true)}
              style={[styles.idbutton]}>
              <View style={[styles.idicon]}>
                <Ionicons
                  name={idUploaded ? 'checkmark' : 'add'}
                  color={'#0047FF'}
                  size={40}
                  style={{start: wp('2.8%')}}
                />
              </View>
              <View>
                <Text style={[styles.idbuttontext]}>Select</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Selfie photo */}
          <View style={[styles.idview]}>
            <Text style={[styles.idtext]}>Selfie photo</Text>
            <Text
              style={[
                styles.idtext,
                {fontSize: scale('13'), color: '#12033acc'},
              ]}>
              It’s required by law
            </Text>
            <Text
              style={[
                styles.idtext,
                {fontSize: scale('13'), color: '#12033acc'},
              ]}>
              to verify your identity as a new user
            </Text>
            <TouchableOpacity   onPress={() => props.navigation.navigate('Selfie')} style={[styles.idbutton]}>
              <View style={[styles.idicon]}>
                <Ionicons
                 name={selfieUploaded ? 'checkmark' : 'add'}
                  color={'#0047FF'}
                  size={40}
                  style={{start: wp('2.8%')}}
                />
              </View>
              <View>
                <Text style={[styles.idbuttontext]}>Select</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Congrats')}
            style={[
              styles.myidbutton,
              (!idUploaded || !selfieUploaded) && styles.buttonDisabled,
            ]}>
                <Text style={[styles.lastbutton]}>Verify my identity</Text>
            </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              // Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <ScrollView>
              <View style={[styles.modalmain]}>
                <View style={[styles.modalmain2]}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <TouchableOpacity
                        style={[styles.button]}
                        // style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Entypo
                          name="minus"
                          color={'#0047FF'}
                          size={50}
                          style={{start: wp('0.5%')}}
                        />
                      </TouchableOpacity>
                      <Text style={styles.modalText}>
                        Which photo ID whould you like to use?
                      </Text>
                      <View style={styles.modaltexttouch}>
                        <TouchableOpacity style={styles.texttouch}>
                          <Text style={styles.modalText1}>
                            Driver's License
                          </Text>
                          <Entypo
                            name="chevron-small-right"
                            color={'#CFCFDB'}
                            size={40}
                            style={{start: wp('35%'), marginTop: hp('0.8%')}}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.texttouch}>
                          <Text style={styles.modalText1}>
                            National Identity Card
                          </Text>
                          <Entypo
                            name="chevron-small-right"
                            color={'#CFCFDB'}
                            size={40}
                            style={{start: wp('18.5%'), marginTop: hp('0.8%')}}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate('PassportPhoto')
                          }
                          style={styles.texttouch}>
                          <Text style={styles.modalText1}>Passport</Text>
                          <Entypo
                            name="chevron-small-right"
                            color={'#CFCFDB'}
                            size={40}
                            style={{start: wp('52%'), marginTop: hp('0.8%')}}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Verifystart;
const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mainview: {
    height: hp('94%'),
    alignItems: 'center',
    marginTop: hp('5%'),
    marginHorizontal: hp('0.5%'),
  },
  Progresbg: {
    height: hp('1%'),
    width: wp('40%'),
    top: hp('2%'),
  },
  Progres: {
    height: hp('1%'),
    width: wp('22%'),
  },
  Verifytext: {
    color: '#12033a',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('30'),
    marginTop: hp('1%'),
    textAlign: 'center',
  },
  idview: {
    height: hp('30%'),
    width: wp('90%'),
    borderRadius: 35,
    backgroundColor: '#f1f3fa',
    marginTop: hp('3%'),
  },
  idtext: {
    color: '#12033a',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('24'),
    marginTop: hp('1.5%'),
    textAlign: 'center',
  },
  idbutton: {
    height: hp('10%'),
    width: wp('50%'),
    borderRadius: 15,
    marginTop: hp('4%'),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  idicon: {
    height: hp('8%'),
    width: wp('16%'),
    borderRadius: 100,
    backgroundColor: '#0047FF1A',
    start: wp('5%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  idbuttontext: {
    color: '#0047FF',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('18'),
    start: wp('10%'),
    top: hp('3.2%'),
  },
  myidbutton: {
     height: hp('8%'),
   width: wp('90%'),
   borderRadius: 15,
   top: hp('5%'),
    backgroundColor: '#3D5AFE',
   
  },
 

  modalmain: {
    height: hp('100%'),
    backgroundColor: '#636471',
    opacity: 0.95,
  },
  modalmain2: {
    height: hp('30%'),
    top: hp('70%'),
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    justifyContent: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: hp('30%'),
    width: wp('100%'),
    backgroundColor: '#ffffff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
  },
  button: {
    height: hp('4%'),
    width: wp('15%'),
    bottom: hp('1%'),
  },
  buttonOpen: {
  },
  buttonClose: {
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: '#12033ACC ',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('14'),
   
  },
  modaltexttouch: {
    height: hp('25%'),
    width: wp('100%'),
   
  },
  texttouch: {
    height: hp('7%'),
    width: wp('85%'),
    borderBottomWidth: 2,
    borderColor: '#e7e7e9',
    alignSelf: 'center',
    flexDirection: 'row',
    
    top: hp('1%'),

   
  },
  modalText1: {
    color: '#12033A',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('18'),
    top: hp('1.5%'),
    start: wp('1%'),
  },
  buttonDisabled: {backgroundColor: '#ccc'},
  lastbutton: {
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('18'),
    marginTop: hp('2%'),
  },
});
