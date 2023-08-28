import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MyWrapper from '../components/myWrapper';
import {
  Black,
  Gray200,
 
  Gray400,
  Secondary,
  White,
} from '../shared/theme';
import {SmallIcons, TopBar} from '../utils/styles';
import {AllData} from '../Data';
import LinearGradient from 'react-native-linear-gradient';
import MovieDetailPage from './MovieDetailPage';
import {useDispatch, useSelector} from 'react-redux';
import {setRecentSearches, store} from '../shared/redux';
import {LogBox} from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
const SearchMovie = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [masterData, setMasterData] = useState([]);
  const [movie, setMovie] = useState(AllData);
  const [isDataAvailable, setIsDataAvailable] = useState(false);
  const [isRecent, setIsRecent] = useState(true);

  const dispatch = useDispatch();
  const {recentSearches} = useSelector(state => state.root.user);

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.Name ? item.Name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        if (textData.length > 1) {
          setIsRecent(false);
        } else {
          setIsRecent(true);
        }
        return itemData.indexOf(textData) > -1;
      });
      setMovie(newData);
      setSearch(text);
    } else {
      setMovie(masterData);
      setSearch(text);
    }
  };
const recentSearchButtons = (item)=>{
console.log(item,'recent')
searchFilter(item);


}
  const ClickMovie = item => {
    const updatedRecentSearches = [...recentSearches, item.Name];
    dispatch(setRecentSearches(updatedRecentSearches));
    setIsRecent(true)
    setSearch("")
    navigation.navigate('MovieDetailPage');
    
  };

  useEffect(() => {
    if (movie.length < 1) {
      setIsDataAvailable(true);
    } else {
      setIsDataAvailable(false);
    }
    setMasterData(AllData);
  }, [movie]);

  useEffect(() => {
    console.log(recentSearches, 'receeentttttttttttt');
  }, [recentSearches]);
  const SearchView = ({item}) => (
    <TouchableOpacity
      onPress={() => ClickMovie(item)}
      style={styles.SeacrhView1}>
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
    </TouchableOpacity>
  );
  const recentListView = ({item}) => (
    <TouchableOpacity onPress={()=>recentSearchButtons(item)} style={{margin: 10,backgroundColor:Gray200,padding:10,borderRadius:60}}>
      <Text style={{color: Black,fontSize:13,fontFamily:'Raleway-Medium'}}>{item}</Text>
    </TouchableOpacity>
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
        {isRecent ? (
          <View style={{flex: 1}}>
            <Text style={{color: Black}}>Recent Searches</Text>
            <FlatList numColumns={3}
              data={recentSearches}
              renderItem={recentListView}></FlatList>
          </View>
        ) : (
          <View style={{flex: 1}}>
            <Text
              style={{
                color: Black,
                fontFamily: 'raleway-Medium',
                fontSize: 14,
              }}>
              {movie.length} Result Found
            </Text>
            {isDataAvailable ? (
              <View
                style={{
                  flex: 1,
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  resizeMode="contain"
                  style={{height: 300, width: 300}}
                  source={require('../assets/appIcons/error404.png')}></Image>
                <Text
                  style={{
                    color: Secondary,
                    fontFamily: 'raleway-Bold',
                    fontSize: 22,
                  }}>
                  Not Found
                </Text>
                <Text
                  style={{
                    color: Black,
                    fontFamily: 'Raleway-Regular',
                    fontSize: 16,
                    textAlign: 'center',
                  }}>
                  Sorry, the keyword you entered cannot be found, please check
                  again or search with another keyword.
                </Text>
              </View>
            ) : (
              <View style={{alignSelf: 'center', marginTop: 10}}>
                <FlatList
                  numColumns={2}
                  renderItem={SearchView}
                  data={movie}></FlatList>
              </View>
            )}
          </View>
        )}
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
  SeacrhView1:{
    height: 190,
    width: 160,
    margin: 5,
    alignSelf: 'center',
    borderRadius: 19,
    overflow: 'hidden',
  }
});
