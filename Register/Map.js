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
  FlatList
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ProgresBG, p3} from '../Constants/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';

const Map = props => {
  const [Streetaddress, setStreetaddress] = useState();
  const addressSuggestions = [
    { id: "1", address: "428 Greenwich Ave", city: "Brooklyn, NY" },
    { id: "2", address: "428 Greenwich Ave", city: "Brooklyn, NY" },
    { id: "3", address: "428 Greenwich Ave", city: "Brooklyn, NY" },
    { id: "4", address: "428 Greenwich Ave", city: "Brooklyn, NY" },
    { id: "5", address: "428 Greenwich Ave", city: "Brooklyn, NY" },


  ];
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
              source={p3}></Image>
          </ImageBackground>
          <Text style={[styles.text1]}>Home address</Text>
        </View>
        <View style={[styles.textinputview]}>
          <Ionicons
            name="location-outline"
            style={{
              Color: '#ffffff',
              alignSelf: 'center',
              start: hp('1%'),
              fontSize: scale('20'),
            }}
          />
          <TextInput
            style={styles.username}
            placeholder={'428 Gre'}
            placeholderStyle={{fontFamily: 'DMSans-VariableFont_opsz,wght'}}
            color="#000"
            placeholderTextColor="#686873"
            value={Streetaddress}
            onChangeText={text => {
              setStreetaddress(text);
            }}
          />

          <TouchableOpacity onPress={() => setStreetaddress('')}>
            <Ionicons
              name="close"
              style={{
                Color: '#000',
                alignSelf: 'center',
                right: hp('1%'),
                fontSize: scale('20'),
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.location]}>
          <TouchableOpacity style={styles.locationButton}>
            <Ionicons name="home" size={hp(2.5)} color="#000" />
            <Text style={styles.locationText}>My current location</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.mapview]}>
          <ImageBackground
            resizeMode="cover"
            source={require('../Assets/Map.png')}
            style={{
              height: hp('22%'),
              width: wp('100%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}></ImageBackground>
        </View>
        <View style={[styles.location]}>
          <TouchableOpacity style={styles.locationButton}>
            <Text style={styles.Address}>Address</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.addview]}>

        <FlatList
        data={addressSuggestions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.addressItem}>
            <Ionicons name="location-sharp"  style={{
                Color: '#000',
                alignSelf: 'center',
                right: hp('1%'),
                fontSize: scale('20'),
                bottom: hp('1%'),
              }} />
            <View>
              <Text style={styles.addressText}>{item.address}</Text>
              <Text style={styles.cityText}>{item.city}</Text>
            </View>
            <Ionicons name="chevron-down" 
             style={{ Color: '#363D4E',
                              
                 start: hp('12 %'),
                fontSize: scale('20'),
              }} />
          </TouchableOpacity>
        )}
      />
      
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Map;
const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textview: {
    height: hp('11%'),
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
    width: wp('26%'),
    start: wp('1%'),
  },
  text1: {
    color: '#12033A',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('25'),
    marginTop: hp('1%'),
  },
  textinputview: {
    height: hp('8%'),
    width: wp('85%'),
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#12033a',
    justifyContent: 'center',
    alignItems: 'center',

    alignSelf: 'center',
    marginTop: hp('1%'),

    marginHorizontal: hp('4%'),

    flexDirection: 'row',
  },
  username: {
    start: wp('1.5%'),

    flex: 1,
    fontSize: hp(2),
    paddingHorizontal: wp(2),
  },
  location: {
    height: hp('8%'),
    width: wp('85%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Address: {
    fontSize: scale('20'),
    fontFamily: 'DMSans-Bold',
  },

  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: scale('14'),
    fontFamily: 'DMSans-Bold',
    marginLeft: wp(2),
  },
  mapview: {
    height: hp('22%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addview: {
    height: hp('35%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: hp('2%'),
  },
  addressItem: {
    flexDirection: "row",
    width: wp('85%'),
    marginHorizontal: hp('2%'),
    alignItems: "center",
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  addressText: {
    color: '#12033a',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('18'),
    start: wp('1.5%'),

  },
  cityText: {
    color: '#363D4E',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('13'),
    start: wp('1.5%'),

  },
});
