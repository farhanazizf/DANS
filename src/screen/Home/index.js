import axios from 'axios';
import React from 'react';
import {SafeAreaView, View, Text, ScrollView, Image} from 'react-native';
import {
  Searchbar,
  Appbar,
  Switch,
  Card,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './style';

const Homepage = () => {
  const [loading, setLoading] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [filter, setFilter] = React.useState(false);
  const [switchToggle, setSwitch] = React.useState(true);
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    const getAPI = async () => {
      try {
        setLoading(true);
        const {data} = await axios.get(
          `http://dev3.dansmultipro.co.id/api/recruitment/positions.json`,
        );
        setList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getAPI();
  }, []);

  const applyFilter = async () => {
    try {
      setLoading(true);
      const {data} = await axios.get(
        `http://dev3.dansmultipro.co.id/api/recruitment/positions.json`,
        {
          params: {
            description: searchQuery.toLowerCase(),
            location: location.toLowerCase(),
            full_time: switchToggle,
          },
        },
      );
      setList(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onChangeSearch = async query => {
    try {
      setLoading(true);
      setSearchQuery(query);
      const queryParams = filter
        ? {location: location, full_time: switchToggle}
        : {location: '', full_time: true};
      const {data} = await axios.get(
        `http://dev3.dansmultipro.co.id/api/recruitment/positions.json`,
        {
          params: {
            description: query.toLowerCase(),
            queryParams,
          },
        },
      );
      setList(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Appbar.Header style={styles.header}>
              <Appbar.Content
                title="Job List"
                // subtitle={'Subtitle'}
                color="black"
                style={styles.header}
              />
            </Appbar.Header>
          </View>
          <View style={styles.searchbarWrap}>
            <Searchbar
              style={styles.searchbar}
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            <View style={styles.filterArrow}>
              <Icon
                name={filter ? 'chevron-up-outline' : 'chevron-down-outline'}
                size={30}
                color="black"
                onPress={() => setFilter(!filter)}
              />
            </View>
          </View>
          {filter ? (
            <Card style={styles.cardFilter}>
              <View>
                <View style={styles.switchWrapper}>
                  <Text style={styles.fullFlex}>Fulltime</Text>
                  <Switch
                    color="#0000FF"
                    value={switchToggle}
                    onValueChange={() => setSwitch(!switchToggle)}
                  />
                </View>
                <View style={styles.locationWrapper}>
                  <Text style={styles.centering}>Location</Text>
                  <TextInput
                    mode="flat"
                    dense={false}
                    underlineColor="transparent"
                    style={styles.locationInput}
                    value={location}
                    onChangeText={text => setLocation(text)}
                  />
                </View>
                <View style={styles.buttonWrapper}>
                  <View style={styles.fullFlex} />
                  <Button
                    mode="contained"
                    onPress={applyFilter}
                    disabled={loading}
                    style={styles.colorPrimary}
                    uppercase={false}>
                    Apply Filter
                    {loading ? <ActivityIndicator animating /> : null}
                  </Button>
                </View>
              </View>
            </Card>
          ) : null}
        </View>

        {loading ? (
          <ActivityIndicator
            animating
            color="#000FFF"
            style={styles.loadingMargin}
          />
        ) : null}

        <View style={styles.listWrapper}>
          {list.length < 1 ? (
            <Card style={styles.cardList}>
              <Card.Content style={styles.flexRow}>
                {loading ? (
                  <ActivityIndicator animating color="#000FFF" />
                ) : (
                  <Text>Empty Data</Text>
                )}
                {/* <Image
                source={{uri: company_logo}}
                style={styles.companyLogo}
              />
              <View style={styles.textWrapper}>
                <Text style={styles.roleWrapper}>{title}</Text>
                <Text style={styles.descWrapper}>{company}</Text>
              </View>
              <View style={styles.listWrapper}>
                <Icon
                  name="chevron-forward-outline"
                  size={30}
                  color="#9e9e9e"
                />
              </View> */}
              </Card.Content>
            </Card>
          ) : (
            list.map(({id, company, company_logo, title}) => {
              return (
                <Card key={id} style={styles.cardList}>
                  <Card.Content style={styles.flexRow}>
                    <Image
                      source={{uri: company_logo}}
                      style={styles.companyLogo}
                    />
                    <View style={styles.textWrapper}>
                      <Text style={styles.roleWrapper}>{title}</Text>
                      <Text style={styles.descWrapper}>{company}</Text>
                    </View>
                    <View style={styles.listWrapper}>
                      <Icon
                        name="chevron-forward-outline"
                        size={30}
                        color="#9e9e9e"
                      />
                    </View>
                  </Card.Content>
                </Card>
              );
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;
