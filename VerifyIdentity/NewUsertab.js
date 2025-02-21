// import React from 'react';
// import {
//   View,
//   StyleSheet,
//   ScrollView,
//   Text,
//   Image,
//   ImageBackground,
//   TouchableOpacity,
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// import {invite, LinkIcon, VerifyTop} from '../Constants/Images';
// import {scale} from 'react-native-size-matters';
// import Entypo from 'react-native-vector-icons/Entypo';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { createStackNavigator } from "@react-navigation/stack";

// import NewUser from './NewUser';
// import Landingpage from '../Home/Landingpage';
// import Congrats from './Congrats';
// import Verifystart from './Verifystart';
// const Stack = createStackNavigator();

// const NewUsertab = props => {
//   return (
//     <Stack.Navigator>
//     <Stack.Screen name="NewUser" component={NewUser} />
//     <Stack.Screen name="Verifystart" component={Verifystart}  screenOptions={{headerShown: false}} />

//     <Stack.Screen name="Congrats" component={Congrats}  screenOptions={{headerShown: false}} />

//     <Stack.Screen name="Landingpage" component={Landingpage}  screenOptions={{headerShown: false}} />

//     </Stack.Navigator>
    
//   );
// };
// export default NewUsertab;