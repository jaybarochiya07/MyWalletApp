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
import {ProgresBG, p6, Lighticonslarge} from '../Constants/Images';
import {scale} from 'react-native-size-matters';
const RActivity = props => {
  return (
    <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default RActivity;
const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
