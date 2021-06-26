import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 0,
    alignItems: 'center',
  },
  searchbarWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  searchbar: {
    width: '85%',
    borderRadius: 20,
  },
  filterArrow: {display: 'flex', alignSelf: 'center', marginLeft: 5},
  cardFilter: {
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
  },
  switchWrapper: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 15,
  },
  fullFlex: {
    flex: 1,
  },
  locationWrapper: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 15,
  },
  centering: {
    alignSelf: 'center',
  },
  locationInput: {
    // borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'transparent',
    flex: 1,
    fontSize: 12,
    maxHeight: 35,
    marginLeft: 5,
    justifyContent: 'center',
  },
  buttonWrapper: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
  },
  colorPrimary: {backgroundColor: '#000FFF'},
  listWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingMargin: {
    marginVertical: 20,
  },
  cardList: {
    display: 'flex',
    justifyContent: 'center',
    marginVertical: 5,
    padding: 1.5,
    width: '95%',
    flexDirection: 'column',
  },
  flexRow: {flexDirection: 'row', justifyContent: 'center'},
  companyLogo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textWrapper: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 0.5,
  },
  roleWrapper: {
    fontSize: 14,
    fontWeight: '700',
    flexWrap: 'wrap',
  },
  descWrapper: {
    fontSize: 12,
    marginTop: 5,
    flexWrap: 'wrap',
    color: '#9e9e9e',
  },
});
