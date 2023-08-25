import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MyWrapper from '../components/myWrapper';
import {
  Black,
  Gray200,
  Gray300,
  Gray400,
  Secondary,
  White,
} from '../shared/theme';
import {SmallIcons, TopBar} from '../utils/styles';
import {AllData} from '../Data';
import LinearGradient from 'react-native-linear-gradient';

const SearchMovie = () => {
  const [search, setSearch] = useState('');
  const [masterData, setMasterData] = useState([]);
  const [emp, setEmp] = useState(AllData);
  const [isDataAvailable, setIsDataAvailable] = useState(false);
  const [isRecent, setIsRecent] = useState(true);

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.Name ? item.Name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        // console.log(text.length)
       if(textData.length>1)
       {
        setIsRecent(false)
       }
       else{
        setIsRecent(true)
       }
        return itemData.indexOf(textData) > -1;
      });
      setEmp(newData);
      setSearch(text);
    } else {
      setEmp(masterData);
      setSearch(text);
    }
  };

  useEffect(() => {
    // console.log(AllData, 'ggggg');
    // console.log(isDataAvailable, 'searchhhhhhhhhhhhhhs');
    
    if (emp.length < 1) {
      setIsDataAvailable(true);
    } else {
      setIsDataAvailable(false);
    }
    setMasterData(AllData);
  }, [emp]);
  const SearchView = ({item}) => (
    <View
      style={{
        height: 190,
        width: 160,

        margin: 5,
        alignSelf: 'center',
        borderRadius: 19,
        overflow: 'hidden',
      }}>
      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
        }}
        source={{uri: item.IMG}}>
        <LinearGradient
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}>
          <Text
            style={{
              color: White,
              fontFamily: 'Raleway-Bold',
              marginBottom: 8,
              fontSize: 17,
            }}>
            {item.Name}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
  return (
    <MyWrapper>
      <View style={TopBar}>
        <Image
          resizeMode="contain"
          style={SmallIcons}
          source={require('../assets/appIcons/arrow.png')}></Image>
        <View style={styles.InputView}>
          <Image
            style={SmallIcons}
            source={require('../assets/appIcons/search.png')}></Image>
          <TextInput
            value={search}
            onChangeText={text => searchFilter(text)}
            placeholder="Search Movies"
            placeholderTextColor={Gray400}
            color="gray"
            style={{width: '90%'}}></TextInput>
        </View>
      </View>
      <View style={{flex: 1, padding: 10}}>
        {isRecent?<View style={{flex:1}}><Text style={{color:Black}}>Recent Searches</Text></View>:
      <View style={{flex:1}}>
        <Text
          style={{color: Black, fontFamily: 'raleway-Medium', fontSize: 14}}>
          {emp.length} Result Found
        </Text>
        {isDataAvailable ? (
          <View
            style={{
              flex: 1,
              marginTop:30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              resizeMode="contain"
              style={{height: 300, width: 300}}
              source={require('../assets/appIcons/error404.png')}></Image>
            <Text style={{
                color: Secondary,
                fontFamily: 'raleway-Bold',
                fontSize: 22,
              }}>Not Found</Text>
            <Text
              style={{
                color: Black,
                fontFamily: 'Raleway-Regular',
                fontSize: 16,
                textAlign:'center'
                
              }}>
              Sorry, the keyword you entered cannot be found, please check again or search with another keyword.
            </Text>
          </View>
        ) : (
          <View style={{alignSelf: 'center', marginTop: 10}}>
            <FlatList
              numColumns={2}
              renderItem={SearchView}
              data={emp}></FlatList>
          </View>
        )}
        </View>}
      </View>
    </MyWrapper>
  );
};

export default SearchMovie;

const styles = StyleSheet.create({
  InputView: {
    height: 40,
    width: '90%',
    backgroundColor: White,
    borderRadius: 60,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
