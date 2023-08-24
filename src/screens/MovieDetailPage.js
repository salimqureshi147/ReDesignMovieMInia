import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import MyWrapper from '../components/myWrapper';
import {RF} from '../shared/theme/Responsive';
import {play} from '../assets';
import {White} from '../shared/theme';
const MovieDetailPage = () => {
  return (
    <MyWrapper>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <ImageBackground
        style={{height: RF(350), width: '100%'}}
        source={{
          uri: 'https://img2.wallspic.com/previews/6/9/6/6/6/166696/166696-thanos-marvel_avengers-thanos_vs_spiderman-spider_man-iron_man-550x310.jpg',
        }}>
        <View style={[styles.chevronTriangle, styles.chevronTopLeft]} />
        <View style={[styles.chevronTriangle, styles.chevronTopRight]} />
      </ImageBackground>
      <TouchableOpacity style={styles.playButton}>
        <Image
          style={{height: RF(40), width: RF(40)}}
          resizeMode={'contain'}
          source={play}
        />
      </TouchableOpacity>
    </MyWrapper>
  );
};

export default MovieDetailPage;

const styles = StyleSheet.create({
  chevron: {
    width: '100%',
    borderWidth: 1,
    height: 200,
  },

  chevronTriangle: {
    backgroundColor: 'transparent',
    borderTopWidth: 80,
    borderLeftWidth: 200,
    borderTopColor: 'transparent',
    borderBottomColor: 'green',
    borderRightColor: 'transparent',
    borderLeftColor: '#fff',
  },
  chevronTopLeft: {
    position: 'absolute',
    left: -5,
    bottom: 0,
  },
  chevronTopRight: {
    position: 'absolute',
    right: -5,
    bottom: 0,
    transform: [{scaleX: -1}],
  },
  playButton: {
    height: RF(65),
    alignItems: 'center',
    width: RF(65),
    justifyContent: 'center',
    backgroundColor: White,
    elevation: 1,
    bottom: 50,
    borderRadius: 35,
    alignSelf: 'center',
  },
});
