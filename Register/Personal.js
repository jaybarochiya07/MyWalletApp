import React, {useState,} from 'react';
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
import {ProgresBG, p2} from '../Constants/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from "react-native-date-picker";


import {scale} from 'react-native-size-matters';

const Digit = props => {
    const [Username, setUsername] = useState();
    const [Password, setPassword] = useState();
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
   
    return (
        <SafeAreaView style={[styles.s1Mainv]}>
          <ScrollView>
            <View style={[styles.textview]}>
                <TouchableOpacity  onPress={() => props.navigation.navigate('digit')}>
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
              <Text style={[styles.text1]}>Personal information</Text>
              <Text style={[styles.text2]}>We ask for your personal information</Text>
              <Text style={[styles.text2, {bottom: hp('0.5%')}]}>to verify your identity</Text>
            </View>
            <View style={[styles.textinputview]}>
          <View style={[styles.textinputview1]}>
            <TextInput
              style={styles.username}
              placeholder={'First name'}
              placeholderStyle={{ fontFamily: 'DMSans-VariableFont_opsz,wght' }}
              color="#000"
              placeholderTextColor="#686873"
              value={Username}
              onChangeText={text => {
                setUsername(text);
              }}
            />
          </View>
          <View style={[styles.textinputview1, { marginTop: hp('0.5%') }]}>
            <TextInput
              style={styles.username}
              placeholder={'Last name'}
              // keyboardType={'numeric'}
              color="#000"
              placeholderTextColor="#686873"
              value={Password}
              onChangeText={text => {
                setPassword(text);
              }}
            />
          </View>
          <TouchableOpacity style={styles.username} onPress={() => setOpen(true)}>
        <Text style={{ fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('12'), marginTop: hp('2.9%'),
    color:"#686873" }}>
          {date ? date.toDateString() : "Date of birth (MM / DD / YYYY)"}
        </Text>
      </TouchableOpacity>
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        
        // placeholder="Select a date"
        // placeholder={'Last name'}
        maximumDate={new Date()}
        onConfirm={(selectedDate) => {
          setOpen(false);
          setDate(selectedDate);
        }}
        onCancel={() => setOpen(false)}
      /> 
          
          <TouchableOpacity  style={styles.button} title="Next >" onPress={() => props.navigation.navigate('RHome')}>
          <Ionicons
                name="chevron-forward-outline"
                color={'#ffffff'}
                size={25}
                style={styles.buttonicon}
              /></TouchableOpacity>
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
    alignItems:'flex-end'
  },
  text2: {
    color: '#12033a',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('14'),
    marginTop: hp('1.5%'),
  },
  textinputview: {
    height: hp('35%'),
    width: wp('100%'),
    marginTop: hp('1.5%'),
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
  },
  textinputview2: {
    height: hp('8%'),
    width: wp('100%'),

    marginTop: hp('3%'),
    flexDirection: 'row',
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    justifyContent: "center",
    marginBottom: 15,
  },
  button: {
    height: hp('7%'),
    width: wp('14%'),
    backgroundColor:'#12033a',
    alignSelf:'flex-end',
    marginHorizontal: hp('4%'),
    borderRadius:15
  },
  buttonicon:{
    Color:'#ffffff',
    alignSelf:'center',
    marginTop: hp('1.5%'),
    fontSize: scale('25'),
    
  }

})
            