import { Easing, Animated } from 'react-native';
import {
  StackNavigator,
  StackNavigatorConfig,
  NavigationStackScreenOptions
} from 'react-navigation';

import { Colors, Fonts, FontSizes } from 'components/ui/theme';
import BackgroundImageHoc from 'components/utils/BackgroundImageHoc';

import LandingScreen from 'screens/LandingScreen';
import HomeScreen from 'screens/HomeScreen';
import PageScreen from 'screens/PageScreen';
import SubMenuScreen from 'screens/SubMenuScreen';
import ScannerScreen from 'screens/ScannerScreen';
import KeyScreen from 'screens/KeyScreen';
import AuthTypeScreen from 'screens/AuthTypeScreen';
import AuthSuccessfulScreen from 'screens/AuthSuccessfulScreen';
import ImportAccountScreen from 'screens/ImportAccountScreen';
import SignInScreen from 'screens/SignInScreen';
import SignUpScreen from 'screens/SignUpScreen';
import SignUpConfirmScreen from 'screens/SignUpConfirmScreen';
import SignUpWarningScreen from 'screens/SignUpWarningScreen';
import AccountSelectScreen from 'screens/AccountSelectScreen';
import TransactionsScreen from 'screens/TransactionsScreen';

enum NAV {
  AUTH = 'AUTH',
  MAIN = 'MAIN'
}

export const navTypes = {
  AUTH: `${NAV.AUTH}/HOME`,
  SCANNER: `${NAV.AUTH}/SCANNER`,
  SIGN_IN: `${NAV.AUTH}/SIGN_IN`,
  IMPORT_ACCOUNT: `${NAV.AUTH}/IMPORT_ACCOUNT`,
  SIGN_UP_CONFIRM: `${NAV.AUTH}/SIGN_UP_CONFIRM`,
  SIGN_UP_WARNING: `${NAV.AUTH}/SIGN_UP_WARNING`,
  SIGN_UP: `${NAV.AUTH}/SIGN_UP`,
  AUTH_SUCCESSFUL: `${NAV.AUTH}/AUTH_SUCCESSFUL`,
  ACCOUNT_SELECT: `${NAV.AUTH}/ACCOUNT_SELECT`,
  HOME: `${NAV.MAIN}/HOME`,
  SUB_MENU: `${NAV.MAIN}/SUB_MENU`,
  PAGE: `${NAV.MAIN}/PAGE`,
  KEY: `${NAV.MAIN}/KEY`,
  TRANSACTIONS: `${NAV.MAIN}/TRANSACTIONS`,
  LANDING: `LANDING`
};

export default StackNavigator(
  {
    [navTypes.AUTH]: { screen: BackgroundImageHoc(AuthTypeScreen)  },
    [navTypes.AUTH_SUCCESSFUL]: { screen: AuthSuccessfulScreen },
    [navTypes.SCANNER]: { screen: ScannerScreen },
    [navTypes.SIGN_IN]: { screen: SignInScreen },
    [navTypes.IMPORT_ACCOUNT]: { screen: ImportAccountScreen },
    [navTypes.SIGN_UP]: { screen: SignUpScreen },
    [navTypes.SIGN_UP_CONFIRM]: { screen: SignUpConfirmScreen },
    [navTypes.SIGN_UP_WARNING]: { screen: BackgroundImageHoc(SignUpWarningScreen) },
    [navTypes.ACCOUNT_SELECT]: { screen: BackgroundImageHoc(AccountSelectScreen) },
    [navTypes.HOME]: { screen: HomeScreen },
    [navTypes.PAGE]: { screen: PageScreen },
    [navTypes.SUB_MENU]: { screen: SubMenuScreen },
    [navTypes.KEY]: { screen: KeyScreen },
    [navTypes.LANDING]: { screen: LandingScreen },
    [navTypes.TRANSACTIONS]: { screen: TransactionsScreen }
  },
  {
    initialRouteName: navTypes.LANDING,
    cardStyle: {
      backgroundColor: 'transparent',
      shadowColor: 'transparent'
    },
    transitionConfig: (): Object => ({
      containerStyle: {
        backgroundColor: 'transparent'
      },
    }),

    navigationOptions({ navigation }) {
      const isAuthRoute = navigation.state.routeName.indexOf(NAV.AUTH) !== -1;

      // const backgroundColor = isAuthRoute ? '#fff' : '#39393f';
      const backgroundColor = 'transparent';
      const headerTintColor = '#fff';
      const headerTitleColor = '#fff';

      return {
        headerTintColor,
        headerStyle: {
          backgroundColor: 'transparent',
          borderBottomWidth: 0,
          elevation: undefined,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          color: headerTitleColor,
          fontFamily: Fonts.regular,
          fontSize: FontSizes.commonSize,
        },
        headerBackTitle: null
      };
    }
  }
);
