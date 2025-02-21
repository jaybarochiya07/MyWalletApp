import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native';

const Stack = createNativeStackNavigator();

import Homescreen from '../ProductTour/Homescreen';
import Welcomemessage from '../ProductTour/Welcomemessage';
import Home from '../SignIn/Home';
import Pin from '../SignIn/Pin';
import Tel from '../Register/Tel';
import Digit from '../Register/Digit';
import Personal from '../Register/Personal';
import RHome from '../Register/Home';
import Map from '../Register/Map';
import Check from '../Register/Check';
import Acceptance from '../Register/Acceptance';
import Rpin from '../Register/Rpin';
import FaceId from '../Register/FaceId';
import NewUser from '../VerifyIdentity/NewUser';
import Landingpage from '../Home/Landingpage';
import explorescreen from '../Explore/explorescreen';
import Add from '../Explore/Add';
import RActivity from '../MyFunds/RActivity';
import Profile1 from '../Profiles/Profile1';
import Verifystart from '../VerifyIdentity/Verifystart';
import PassportPhoto from '../VerifyIdentity/PassportPhoto';
import PassportCheck from '../VerifyIdentity/PassportCheck';
import {IdentityProvider } from '../IdentityContext';
import Selfie from '../VerifyIdentity/Selfie';
import Checkquality from '../VerifyIdentity/Checkquality';
import Congrats from '../VerifyIdentity/Congrats';
import { createStackNavigator } from "@react-navigation/stack";
// import { useNavigation } from '@react-navigation/native';
import UpdatedHomeScreen from "../Home/UpdatedHomeScreen";
// import NewUsertab from '../VerifyIdentity/NewUsertab';






// import { IdentityProvider } from '../VerifyIdentity/IdentityContext';
const HomeStack  = createStackNavigator();

// const HomeStackScreen = () => (
//   // <HomeStack.Navigator screenOptions={{ headerShown: true }}>
//   <HomeStack.Navigator screenOptions={{ headerShown: false }}
//   //  initialRouteName="NewUser"
//    >
//     <HomeStack.Screen name="NewUser"  component={NewUser} />
//     <HomeStack.Screen  name="Landingpage" initialRouteName="Landingpage" component={Landingpage} />
    
   
    
    
//   </HomeStack.Navigator>
// );

const Tab = createBottomTabNavigator();

const CustomTabButton = ({Children, onPress}) => (
  <TouchableOpacity
    style={{
      top: hp('-4%'),
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: '#0047',
      }}>
      {Children}
      <Feather
        name="plus"
        color={'#e1e3ff'}
        size={30}
        style={{
          height: 70,
          width: 70,
          padding: 20,
          borderRadius: 100,
          backgroundColor: '#0047FF',
          elevation: 10,
        }}
      />
    </View>
  </TouchableOpacity>
);
const CustomImage1 = ({ focused }) => (
  <Image
    source={focused ? require('../Assets/Navigation1.png') : require('../Assets/Navigation.png')}
    style={[
      styles.image,
      focused ? styles.focusedImage : styles.unfocusedImage  
      ,]}
  />
);
const CustomImage2 = ({ focused }) => (
  <Image
    source={focused ? require('../Assets/search1.png') : require('../Assets/search.png')}
    style={[   styles.image,
      focused ? styles.focusedImage : styles.unfocusedImage  ]}
  />
);
const CustomImage3 = ({ focused }) => (
  <Image
    source={focused ? require('../Assets/profile1.png') : require('../Assets/profile.png')}
    style={[   styles.image,
      focused ? styles.focusedImage : styles.unfocusedImage  ]}
  />
);
const CustomImage = ({ focused }) => (
  <Image
    source={focused ? require('../Assets/Group1.png') : require('../Assets/Group.png')}
    style={[   styles.image,
      focused ? styles.focusedImage : styles.unfocusedImage  ]}
  />
);





const RootNavigation = props => {
  
 
  
  const Bottom = () => {
    
   
    return (
      <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {position: 'absolute',elevation: 10,opacity: 1,backgroundColor: '#ffff',height: 50,headerShown: false},
       })}
      

>
        <Tab.Screen name="NewUser"component={NewUser}
        options={{tabBarShowLabel:false,tabBarIcon:({ focused })=><CustomImage1 focused={focused} /> }}
        />
        <Tab.Screen name="Explorescreen"component={explorescreen}
        options={{tabBarShowLabel:false,tabBarIcon:({ focused })=><CustomImage2 focused={focused} /> }}
        />
        <Tab.Screen name="Add"component={Add}
        options={{tabBarShowLabel:false,tabBarButton:props =><CustomTabButton{...props} />,}}
        />
        <Tab.Screen name="rActivity"component={RActivity}
        options={{tabBarShowLabel:false,tabBarIcon:({ focused})=><CustomImage focused={focused} />}}
        />
        <Tab.Screen name="Profile"component={Profile1}
        options={{tabBarShowLabel: false,tabBarIcon:({focused})=><CustomImage3 focused={focused} />}}
        />
      </Tab.Navigator>
    );
  };
  
  
  

  return (
    
    <NavigationContainer>
     
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Homescreen">
        {/* ProductTour */}
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name="welcomemessage" component={Welcomemessage} />

        {/* Register */}
        <Stack.Screen name="tel" component={Tel} />
        <Stack.Screen name="digit" component={Digit} />
        <Stack.Screen name="personal" component={Personal} />
        <Stack.Screen name="RHome" component={RHome} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Check" component={Check} />
        <Stack.Screen name="Acceptance" component={Acceptance} />
        <Stack.Screen name="Rpin" component={Rpin} />
        <Stack.Screen name="FaceId" component={FaceId} />

        {/* Signin */}
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="pin" component={Pin} />

        {/* Verify Identity */}
        <Stack.Screen name="NewUser" component={Bottom}
        />
         {/* <Stack.Screen name="NewUsertab" component={NewUsertab}
        /> */}
        <Stack.Screen name="Verifystart" component={Verifystart} />
        <Stack.Screen name="PassportPhoto" component={PassportPhoto} />
        <Stack.Screen name="PassportCheck" component={PassportCheck} />
        <Stack.Screen name="Selfie" component={Selfie} />
        <Stack.Screen name="Checkquality" component={Checkquality} />
        <Stack.Screen name="Congrats" component={Congrats} />
        
         {/* home  */}
         <Stack.Screen name="Landingpage" component={Landingpage} />

         {/* explore */}
        <Stack.Screen name="explorescreen" component={explorescreen} />
        <Stack.Screen name="Add" component={Add} />

        {/* myfunds */}
        <Stack.Screen name="RActivity" component={RActivity} />

        {/* profiles */}
        <Stack.Screen name="Profile1" component={Profile1} />
         <HomeStack.Screen name="UpdatedHome" component={UpdatedHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};




export default RootNavigation;



const styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  tabContainer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
  tabButton: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  fabContainer: {position: 'absolute', bottom: 35, alignSelf: 'center'},
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  shadow: {
    // shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      // height: 10,
    },
    shadowOpacity: 0.75,
    shadowRadius: 2.5,
    elevation: 10,
  },
  image:{
    height: hp('5%'),
    width: wp('10%'), marginTop: hp('1.5%'),
  },
  unfocusedImage:{
    height: hp('3%'),
    width: wp('6%'), marginTop: hp('1.5%'),
  },
  focusedImage:{
    height: hp('5%'),
    width: wp('10%'), marginTop: hp('1.5%'),
  }
});
