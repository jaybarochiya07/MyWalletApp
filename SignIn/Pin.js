import React,{useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewUser from '../VerifyIdentity/NewUser';

import {scale} from 'react-native-size-matters';

const Pin = props => {
  const [pin, setPin] = useState('');
  const PIN_LENGTH = 4;

  const handlePress = value => {
    if (pin.length < PIN_LENGTH) {
      setPin(pin + value);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleReset = () => {
    setPin('');
  };

  return (
    <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
        <View style={[styles.textview]}>
          <Text style={[styles.text1]}>Enter your PIN</Text>
        </View>

        {/* Dots for PIN */}

        <View style={styles.pinDots}>
          {Array(PIN_LENGTH)
            .fill(0)
            .map((_, index) => (
              <View
                key={index}
                style={[styles.dot, pin.length > index && styles.filledDot]}
              />
            ))}
        </View>

        {/* Keypad */}
        <View style={styles.keypad1}>
          <View style={styles.keypad}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.key}
                onPress={() =>
                  item === 'del' ? handleDelete() : handlePress(item)
                }>
                {item === 'del' ? (
                  <Ionicons
                    name="backspace-outline"
                    size={24}
                    color="#12033a"
                  />
                ) : (
                  <Text style={styles.keyText}>{item}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Reset Button */}
        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('NewUser')}
          style={[styles.button]}>
          <Text style={[styles.text2]}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pin;

const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textview: {
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
    marginHorizontal: hp('5%'),
  },

  text1: {
    color: '#12033A',
    fontFamily: 'DMSans-Boldt',
    fontSize: scale('34'),
  },
  pinDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('8%'),
  },
  dot: {
    width: hp('2%'),
    height: wp('4%'),
    borderRadius: 6,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
  filledDot: {
    backgroundColor: '#0047FF',
  },
  keypad: {
    width: wp('100%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: hp('15%'),
  },
  keypad1: {
    height: hp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
   
  },
  key: {
    width: '30%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  keyText: {
    fontSize: 24,
  },
  resetText: {
    color: '#0057FF',

    textAlign: 'center',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('15'),
  },
  button: {
    height: hp('7%'),
    width: wp('85%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#0047FF',
    borderRadius: 18,
    marginTop: hp('10%'),
  },
  text2: {
    color: '#ffffff',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('15'),
    textAlign: 'center',
  },
});
