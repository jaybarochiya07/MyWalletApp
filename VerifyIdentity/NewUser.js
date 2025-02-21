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
import {invite, LinkIcon, VerifyTop} from '../Constants/Images';
import {scale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// const Stack = createNativeStackNavigator();

const NewUser = props => {
  return (
    // <Stack.Screen name="Homescreen" component={Homescreen} />
    <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
        <View style={[styles.mainview]}>
          <ImageBackground
            resizeMode="stretch"
            style={[styles.Topimgbackground]}
            source={VerifyTop}>
            <View style={[styles.textview]}>
              <Text style={[styles.Welcometext]}>Welcome, Robert</Text>
              <Text style={[styles.Welcometext, {marginTop: hp('2%')}]}>
                $0.00
              </Text>
              <Text
                style={[
                  styles.Welcometext,
                  {fontSize: scale('20'), color: '#808080'},
                ]}>
                Your account value
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.unlockview]}>
          <Text
            style={[
              styles.Welcometext,
              {bottom: hp('1%'), fontSize: scale('23')},
            ]}>
            Unlock all features
          </Text>
          <Text
            style={[
              styles.Welcometext,
              {
                fontSize: scale('13'),
                fontFamily: 'DMSans-VariableFont_opsz,wght',
              },
            ]}>
            Please, confirm your ID and unlock
          </Text>
          <Text
            style={[
              styles.Welcometext,
              {
                fontSize: scale('15'),
                fontFamily: 'DMSans-VariableFont_opsz,wght',
              },
            ]}>
            all app features
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Verifystart')} style={{flexDirection: 'row'}}>
            <View style={[styles.unlockview1]}>
              <Entypo
                name="plus"
                color={'#e1e3ff'}
                size={30}
                style={{
                  height: hp('8%'),
                  width: wp('16%'),
                  marginTop: hp('1.9%'),
                  borderRadius: 100,
                  start: 15,
                }}
              />
            </View>
            <Text
              style={[
                styles.Welcometext,
                {
                  fontSize: scale('18'),
                  marginTop: hp('5.5%'),
                  start: 15,
                  fontFamily: 'DMSans-VariableFont_opsz,wght',
                },
              ]}>
              Add documents
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.Linkview]}>
          <View style={[styles.Linkview1]}>
            <ImageBackground
              resizeMode="contain"
              style={[styles.linkimgbackground]}
              source={LinkIcon}></ImageBackground>
            <Text style={[styles.linktext]}>Link your bank account</Text>
            <Text style={[styles.linktext1]}>Transfer your cash to</Text>
            <Text style={[styles.linktext1]}>
              investments to meet your goals
            </Text>
            <TouchableOpacity   style={[styles.linkbutton]}>
              <View>
                <Entypo
                  name="plus"
                  color={'#ffffff'}
                  size={25}
                  style={{}}
                />
              </View>
              <View>
                <Text style={[styles.linkbuttontext]}>Add card</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.inviteview]}>
          <View style={[styles.inviteviewback]}>
            <View style={[styles.inviteview1]}>
              <Image
                resizeMode="stretch"
                style={[styles.inviteimg]}
                source={invite}></Image>
            </View>
            <View style={[styles.inviteview2]}>
              <Text style={[styles.invitetext1]}>Invite friends </Text>
              <Text style={[styles.invitetext2]}>Code LP867J</Text>
              <TouchableOpacity style={[styles.invitetou]}>
                <Text style={[styles.invitetext3]}>Earn $200</Text>
              </TouchableOpacity>
            </View>
            <View>
              <MaterialCommunityIcons
                name="checkbox-multiple-blank-outline"
                color={'#12033a'}
                size={25}
                style={{start: wp('1%')}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewUser;
const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mainview: {
    height: hp('45%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Topimgbackground: {
    height: hp('45%'),
    width: wp('100%'),
  },
  Welcometext: {
    color: '#ffffff',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('27'),
    marginTop: hp('1%'),
    textAlign: 'center',
  },
  textview: {
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
    marginHorizontal: hp('2%'),
  },
  unlockview: {
    height: hp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: hp('16%'),
    marginHorizontal: hp('3%'),
    backgroundColor: '#0047ff',
    borderRadius: 35,
  },
  unlockview1: {
    height: hp('8%'),
    width: wp('16%'),
    borderRadius: 100,
    backgroundColor: '#6790ff',
    marginTop: hp('3%'),
  },
  Linkview: {
    height: hp('45%'),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: hp('12%'),
    marginHorizontal: hp('3%'),
    backgroundColor: '#f1f3fa',
    borderRadius: 35,
  },
  linkimgbackground: {
    height: hp('18%'),
    width: wp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  linktext: {
    color: '#12033a',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('20'),
    marginTop: hp('1%'),
    textAlign: 'center',
  },
  Linkview1: {
    height: hp('42%'),
    width: wp('78%'),
    alignItems: 'center',
  },
  linktext1: {
    color: '#808080',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('13'),
    marginTop: hp('1%'),
    textAlign: 'center',
  },
  linkbutton: {
    height: hp('8%'),
    width: wp('70%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3%'),
    borderRadius: 15,
    backgroundColor: '#12033a',
    flexDirection: 'row',
  },
  linkbuttontext: {
    color: '#ffffff',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('18'),
    start: wp('2%'),
    bottom: hp('0.2%'),
    textAlign: 'center',
  },
  inviteview: {
    height: hp('18%'),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: hp('10%'),
    marginHorizontal: hp('3%'),
    backgroundColor: '#f1f3fa',
    borderRadius: 35,
  },
  inviteviewback: {
    height: hp('16%'),
    width: wp('80%'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  inviteview1: {
    height: hp('14.50%'),
    width: wp('29.50%'),
    backgroundColor: '#dfd4f9',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inviteimg: {
    height: hp('12%'),
    width: wp('24%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inviteview2: {
    height: hp('16%'),
    width: wp('35%'),
    start: wp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  invitetext1: {
    color: '#12033a',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('18'),
    textAlign: 'center',
  },
  invitetext2: {
    color: '#808080',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('14'),
    right: wp('5%'),
  },
  invitetou: {
    height: hp('4.4%'),
    width: wp('27%'),
    borderRadius: 10,
    backgroundColor: '#e1e3ff',
    marginTop: hp('1%'),
    right: wp('4%'),
  },
  invitetext3: {
    color: '#0047ff',
    fontFamily: 'DMSans-Bold',
    fontSize: scale('14'),
    marginTop: hp('0.8%'),
    textAlign: 'center',
  },
});
