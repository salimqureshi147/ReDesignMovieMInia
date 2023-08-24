import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Modal,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '../shared/theme/Responsive';
import {caution, clock, play, playFrame, timer} from '../assets';
import {
  Gray400,
  Primary,
  Primary_Light,
  Secondary,
  White,
} from '../shared/theme';
import HeadingText from '../components/appText/CustomText';
import {Extra, FlexDirection} from '../utils/styles';
import {Cast, Screenshots} from '../appStack/data/flatlistData';
const MovieDetailPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const Movies_Info_Pattern = () => {
    return (
      <>
        <View style={FlexDirection}>
          <HeadingText title={'Teen Titans'} size={24} semi_bold />
          <TouchableOpacity style={styles.playframe}>
            <Image style={{height: RF(21), width: RF(21)}} source={playFrame} />
          </TouchableOpacity>
        </View>
        <View style={[FlexDirection, Extra.marginTop]}>
          <View style={{flexDirection: 'row'}}>
            <HeadingText title={'Category :'} regular size={16} R_Margin={10} />
            <HeadingText title={'Hollywood'} regular size={16} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: RF(18), width: RF(18), marginRight: RF(10)}}
              source={timer}
            />
            <HeadingText title={'3h 1m'} medium size={16} />
          </View>
        </View>
      </>
    );
  };
  const Play_Button = ({setModalVisible}) => {
    return (
      <View style={styles.playButton}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            style={{height: RF(40), width: RF(40)}}
            resizeMode={'contain'}
            source={play}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const renderShots = ({item}) => {
    return (
      <View style={styles.screenshot_images}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          imageStyle={{borderRadius: RF(20)}}
          resizeMode={'contain'}
          source={{uri: item.img}}></ImageBackground>
      </View>
    );
  };
  const renderCast = ({item}) => {
    return (
      <View style={styles.cast_Images}>
        <Image
          style={{
            height: RF(65),
            width: RF(65),
            borderRadius: 35,
            alignSelf: 'center',
          }}
          resizeMode={'contain'}
          source={{uri: item.img}}
        />
        <HeadingText title={item.cast} semi_bold size={16} lines={1} />
      </View>
    );
  };
  const Reviews_Section = () => {
    return (
      <View
        style={{
          height: RF(120),
          width: '100%',
          marginTop: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: RF(40), width: RF(40), borderRadius: 20}}
            source={{
              uri: 'https://www.themoviedb.org/t/p/w138_and_h175_face/AbXKtWQwuDiwhoQLh34VRglwuBE.jpg',
            }}
            resizeMode={'contain'}
          />
          <View style={{marginLeft: 10}}>
            <HeadingText title={'Ronald Richard'} medium size={14} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{height: RF(15), width: RF(15), marginRight: 5}}
                source={clock}
                resizeMode={'contain'}
              />
              <HeadingText
                title={'13 Sep, 2020'}
                medium
                size={11}
                regular
                color={Gray400}
                top={-5}
              />
            </View>
          </View>
        </View>
        <HeadingText
          title={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...'
          }
          light
          size={14}
          top={10}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      {modalVisible ? <View style={styles.modal_FadeView} /> : null}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
            <Image style={{height: RF(90), width: RF(90)}} source={caution} />
            <HeadingText title={'OPPOSES...'} bold size={20} top={5} />
            <HeadingText
              title={
                'It seems you are using our Guest Mode! Please Login or Signup to perform this action.'
              }
              regular
              size={16}
              top={10}
              alignCenter
            />
            <View style={styles.button_View}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <HeadingText
                  title={'Login'}
                  semi_bold
                  size={16}
                  color={White}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.signUp_Button]}>
                <HeadingText
                  title={'Sign Up'}
                  semi_bold
                  size={16}
                  color={Secondary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <ImageBackground
        style={{height: RF(350), width: '100%'}}
        source={{
          uri: 'https://c4.wallpaperflare.com/wallpaper/884/965/115/movies-flash-superman-wonder-woman-wallpaper-preview.jpg',
        }}
        resizeMode={'stretch'}>
        <View style={[styles.chevronTriangle, styles.chevronTopLeft]} />

        {/* Play_Button */}

        <Play_Button setModalVisible={setModalVisible} />
        <View style={[styles.chevronTriangle, styles.chevronTopRight]} />
      </ImageBackground>

      {/* White Container */}
      <ScrollView
        style={styles.detail_Container}
        showsVerticalScrollIndicator={false}>
        <Movies_Info_Pattern />
        <HeadingText
          title={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          light
          size={14}
          top={20}
        />
        <HeadingText title={'Screenshots'} size={16} semi_bold top={20} />
        <FlatList
          data={Screenshots}
          renderItem={renderShots}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={{paddingBottom: 40}}>
          <HeadingText title={'Cast'} size={16} semi_bold top={20} />
          <FlatList
            data={Cast}
            renderItem={renderCast}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View style={FlexDirection}>
            <HeadingText title={'Reviews'} size={16} semi_bold top={20} />
            <HeadingText title={'View All'} size={16} medium top={20} />
          </View>
          <Reviews_Section />
          <TouchableOpacity>
            <HeadingText
              title={'+ Add Feedback'}
              color={Secondary}
              size={16}
              semi_bold
              self
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
    bottom: -20,
    backgroundColor: White,
    elevation: 1,
    zIndex: 200,
    position: 'absolute',
    borderRadius: 35,
    alignSelf: 'center',
  },
  detail_Container: {
    padding: RF(20),
    height: '100%',
    width: '100%',
    backgroundColor: White,
  },

  playframe: {
    height: RF(35),
    width: RF(35),
    borderRadius: 20,
    backgroundColor: Primary_Light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenshot_images: {
    height: RF(95),
    width: RF(93),
    marginTop: 10,
    marginRight: 10,
  },
  cast_Images: {
    height: RF(95),
    marginRight: 10,
    justifyContent: 'center',
    width: RF(95),
  },
  modal_FadeView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 500,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  button: {
    height: RF(40),
    width: '45%',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Primary,
  },
  button_View: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    marginTop: RF(20),
  },
  signUp_Button: {
    borderWidth: 1,
    backgroundColor: White,
    borderColor: Secondary,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    height: RF(300),
    width: '100%',
    borderRadius: RF(30),
    backgroundColor: White,
    padding: 20,
    alignItems: 'center',
  },
});
