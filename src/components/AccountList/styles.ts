import { StyleSheet } from 'react-native';
import { Colors, Fonts, FontSizes } from '../ui/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  touchableContainer: {
    shadowColor: 'transparent',
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0
  },
  scrollView: {},
  loginAs: {
    fontFamily: Fonts.regular,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10,
    // paddingLeft: 7,
  },
  buttonContainerStyle: {
    marginVertical: 5,
  },
  buttonStyle: {
    justifyContent: 'flex-start',
  },
  buttonTextStyle: {
    flex: 1,
    paddingLeft: 5,
    textAlign: 'right'
  },
  removeButton: {
    backgroundColor: '#f05050',
    width: 40,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  rowContainer: {
    height: 70,
    flex: 1,
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  decorStick: {
    backgroundColor: Colors.green,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 5,
    height: 70,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  rowTextContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 14,
    color: Colors.white,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  avatarImageWrapper: {
    width: 40,
    height: 40,
    borderRadius: 180,
    position: 'relative',
    top: 10,
    left: 10,
    overflow: 'hidden',
  },
  avatarImage: {
    width: 40,
    height: 40,
  },
  notificationCircle: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: Colors.green,
    borderRadius: 180,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 123,
    top: 5,
    right: 5,
  },
  notificationText: {
    color: Colors.white,
    fontSize: FontSizes.smallCommonSize,
  }
});
