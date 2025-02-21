import React,{useState} from 'react';
import {SafeAreaView,Image,StyleSheet,FlatList,View,Text,TouchableOpacity,Dimensions,ScrollView,ImageBackground,} from 'react-native';
import {heightPercentageToDP as hp,widthPercentageToDP as wp,} from 'react-native-responsive-screen';
import { scale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('window');
const COLORS = { primary: '#fff', white: '#000' };
const slides = [
  {
    id: '1',
    ImageBackground: require('../Assets/welcomebackground.png'),
    image: require('../Assets/welcome1.png'),
    title: 'Automate ',
    title1: 'your savings',
    title2: 'Save automatically, so you never',
    title3: 'have to think about it',
  },
  {
    id: '2',
    ImageBackground: require('../Assets/welcomebackground.png'),
    image: require('../Assets/welcome2.png'),
    title: 'No manual',
    title1: ' trading required',
    title2: 'Just set your parameters and choose ',
    title3: 'the best amount for your goal',
  },
  {
    id: '3',
    ImageBackground: require('../Assets/welcomebackground.png'),
    image: require('../Assets/welcome3.png'),
    title: 'Account',
    title1: 'protection',
    title2: 'Keep your funds and transaction information ',
    title3: 'safe with our security standards',
  },
];

const Slide = ({ item }) => {
  return (
    <View style={[styles.backgview]}>
      <View>
        <ImageBackground
          resizeMode="stretch"
          source={item?.ImageBackground}
          style={{
            height: hp('50%'),
            width: wp('100%'),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={item?.image} style={styles.image} />
        </ImageBackground>
      </View>
      <View style={[styles.textview]}>
        <Text
          style={{
            fontFamily: 'DMSans-Bold',
            fontSize: scale('30'),
            textAlign: 'center',
            color: '#12033A',
            marginTop: hp('2%'),
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-Bold',
            fontSize: scale('30'),
            textAlign: 'center',
            color: '#12033A',
          }}>
          {item.title1}
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-VariableFont_opsz,wght',
            fontSize: scale('12'),
            textAlign: 'center',
            color: '#12033A',
            marginTop: hp('3%'),
          }}>
          {item.title2}
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-VariableFont_opsz,wght',
            fontSize: scale('12'),
            textAlign: 'center',
            color: '#12033A',
            marginTop: hp('0.5%'),
          }}>
          {item.title3}
        </Text>
      </View>
    </View>
  );
};
const Welcomemessage = props => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState();
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: hp('18%'),
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => props.navigation.navigate('tel')}>
                <Text style={styles.create}>
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                height: hp('7%'),
                width: wp('90%'),
                bottom: hp('3%'),
              }}>
              <View
                style={{
                  height: hp('7%'),
                  width: wp('30%'),
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    styles.btn1,
                    {
                      borderColor: COLORS.white,

                    },
                  ]}
                  onPress={skip}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: scale('14'),
                      fontFamily: 'DMSans-VariableFont_opsz,wght',
                      color: "#12033A",
                      marginTop: hp('1%'),

                    }}>
                    Skip
                  </Text>
                </TouchableOpacity>
              </View>


              <View
                style={{
                  height: hp('7%'),
                  width: wp('30%'),
                  start: wp('30%'),
                }}
              >
                <TouchableOpacity
                  // activeOpacity={0.8}
                  onPress={goToNextSlide}
                  style={[styles.btn1, { start: wp('6.5%'), }]}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: scale('14'),
                      fontFamily: 'DMSans-VariableFont_opsz,wght',
                      color: "#12033A",
                      marginTop: hp('1%'),
                    }}>
                    Next
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          )}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={[styles.s1Mainv]}>
      <ScrollView>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{ height: height * 0.75 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({ item }) => <Slide item={item} />}
        />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Welcomemessage;
const styles = StyleSheet.create({
  s1Mainv: {
    flex: 1,
  },
  title1: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 2,
    textAlign: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: hp('25%'),
    width: wp('50%'),
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 3,
    borderRadius: 2,
    bottom: hp('1.5%'),
  },
  btn: {
    height: hp('7%'),
    width: wp('87%'),
    justifyContent: 'center',
    backgroundColor: '#0047FF',
    borderRadius: 18,
    bottom: hp('3.5%'),
  },
  btn1: {
    height: hp('5%'),
    width: wp('20%'),
    // backgroundColor:'red',
    // bottom: hp('3.5%'),
  },

  backgview: {
    height: hp('56%'),
  },
  textview: {
    height: hp('33%'),
    width: wp('100%'),
    marginTop: hp('2%'),
  },
  create: {
    color: '#ffffff',
    fontFamily: 'DMSans-VariableFont_opsz,wght',
    fontSize: scale('15'),
    textAlign: 'center',
  }
});
