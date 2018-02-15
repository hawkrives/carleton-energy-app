import React, { Component } from 'react';
import { Font, AppLoading, Asset } from 'expo';
import { Platform, StyleSheet, BackHandler, View, StatusBar, AsyncStorage} from 'react-native';
import { TabNavigator, TabBarTop, TabBarBottom, 
  NavigationActions, addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import BuildingListView from './src/BuildingListView';
import EnergyMapViewStack from './src/energymap/EnergyMapView'
import OverviewStack from './src/overview/OverviewListView';
import { GetStyle } from './src/styling/Themes'
import CurrTheme from './src/styling/CurrentTheme'
import CurrFont from './src/styling/CurrentFont';
import { handler, dataReducer, layoutReducer } from './src/helpers/ReduxHandler'
import { getCurrentGenerationGraphFormat, 
  getCurrentConsumptionGraphFormat } from './src/helpers/ApiWrappers';
import SustainStack from './src/SustainView';

import IntroSlider from './src/IntroSlider';
import checkIfFirstLaunch from './src/checkIfFirstLaunch';

const apiGoogleKey = 'AIzaSyA2Q45_33Ot6Jr4EExQhVByJGkucecadyI';
const themeStyles = GetStyle();

// REMOVE ME //
import { getBuildingDataOverTime, getBuildingDataOverPastWeek, getBuildingDataOverPastMonth } from './src/helpers/ApiWrappers.js';

var startDate = new Date("2013", "11", "31", "00", "00", "00", "00");
var endDate = new Date("2014", "00", "01", "00", "00", "00", "00");

// getBuildingDataOverTime("Burton", startDate, endDate);
getBuildingDataOverPastWeek("Myers");
// getBuildingDataOverPastMonth("Severance");
//^^^REMOVE^^^//


function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

const navStyle = StyleSheet.create({
    label: {
        fontFamily: themeStyles.boldFont,
    },

    indicator: {
        backgroundColor: Platform.OS === 'ios' ? '#0B5091' : '#FFFFFF',
    }
})

const tabStyle = [];
tabStyle.tabColors = {
        tab0: '#6699cc',  // blue
        tab1: '#20cef5',  // light blue
        tab2: '#67b868',  // green
        tab3: '#a695c7'   // purple
    }

tabStyle.tabStatusColors = {
        tab0: '#527aa3',
        tab1: '#1aa5c4',
        tab2: '#529353',
        tab3: '#85779f'
    }


const RootTabs = TabNavigator({
    Overview: {
      screen: OverviewStack,
      navigationOptions: {
        tabBarLabel: 'Overview',
        tabBarIcon: ({ tintColor, focused }) => (
          <FontAwesome name="tachometer" size={20} color={focused ? "#0B5091" : "#d3d3d3"} />
        ),
      },
    },
    Buildings: {
      screen: BuildingListView,
      navigationOptions: {
        tabBarLabel: 'Buildings',
        tabBarIcon: ({ tintColor, focused }) => (
          <FontAwesome name="building" size={20} color={focused ? "#0B5091" : "#d3d3d3"} />
        ),
      },
    },
    Sustain: {
      screen: SustainStack,
      navigationOptions: {
        tabBarLabel: 'Learn',
        tabBarIcon: ({ tintColor, focused }) => (
          <FontAwesome name="bolt" size={20} color={focused ? "#0B5091" : "#d3d3d3"} />
        ),
      },
    },
    EnergyMap: {
        screen: EnergyMapViewStack,
        navigationOptions: {
          tabBarLabel: 'Map',
          tabBarIcon: ({ tintColor, focused }) => (
            <FontAwesome name="fire" size={20} color={focused ? "#0B5091" : "#d3d3d3"} />
          ),
        },
      }
  },
   { 
    tabBarComponent: props => {
      const backgroundColor = props.position.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: [tabStyle.tabColors.tab0, 
                      tabStyle.tabColors.tab1, 
                      tabStyle.tabColors.tab2, 
                      tabStyle.tabColors.tab3]
      })
      return (
        Platform.OS === 'ios'
        ? <TabBarBottom {...props} style={{ backgroundColor: '#e1e8ee' }} />
        : <TabBarTop {...props} style={{ backgroundColor: backgroundColor }} />
      );
    },
    // animationEnabled: false,
    // lazy: true,
    tabBarOptions:
        { style: navStyle.header,
          labelStyle: navStyle.label,
          indicatorStyle: navStyle.indicator,
          // showIcon: true, //this is default false on Android
          // showLabel: true,
          activeTintColor: Platform.OS === 'ios' ? '#0B5091' : '#FFFFFF', 
          inactiveTintColor: Platform.OS === 'ios' ? '#9E9E9E' : '#FFFFFF90', 
          pressColor: '#DDD' // Android ripple color onPress
        },
     navigationOptions: ({ navigation }) => ( {
         tabBarOnPress: (tab, jumpToIndex) => {
           // resets stack in tabs if their icon is tapped while focused
           if (tab.focused && (tab.index === 0 || tab.index === 1)) {
             if (tab.route.index !== 0) {
               navigation.dispatch(NavigationActions.reset({
                 index: 0,
                 actions: [
                   NavigationActions.navigate({ routeName: tab.route.routes[0].routeName })
                 ]
               }))
             }
           } else {
             jumpToIndex(tab.index)
           }
         }
       })
});

//for redux
const initialState = RootTabs.router.getStateForAction(
                      RootTabs.router.getActionForPathAndParams('Overview'));

const navReducer = (state = initialState, action) => {
    const nextState = RootTabs.router.getStateForAction(action, state);

    return nextState || state;
}

const appReducer = combineReducers({
    nav: navReducer,
    data: dataReducer,
    ui: layoutReducer

});

const mapStateToProps = (state) => ({
    nav: state.nav,
    data: state.data,
    ui: state.layout,
});

class App extends Component {
  
  // Checks AsyncStorage to see if app has been launched already
  async componentWillMount() {
    const isFirstLaunch = await checkIfFirstLaunch();
    //console.log("Mounting:", isFirstLaunch);
    this.setState({ isFirstLaunch, hasCheckedAsyncStorage: true });
  }

  // Closes intro screen when done button is pressed
  closeIntro = (onDonePress) => {
    if (onDonePress == true) {
      this.setState({ isFirstLaunch: false });
    };
  }  

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
      const { dispatch, nav } = this.props;
      if (nav.index === 0) {
          return false;
      }

      dispatch(NavigationActions.back());
      return true;
  };

  state = {
      isReady: false,
      isFirstLaunch: false,
      hasCheckedAsyncStorage: false,
  };

  async _cacheResourcesAsync() {
      const fontAssets = cacheFonts([FontAwesome.font,
          {'lato-regular': require('./src/assets/fonts/Lato/Lato-Regular.ttf'),},
          {'lato-bold': require('./src/assets/fonts/Lato/Lato-Bold.ttf'),}]);
      const imageAssets = cacheImages([require('./src/assets/windmill.png'),
          require('./src/assets/windmillHeader.png')]);


      await Promise.all([...imageAssets, ...fontAssets]);
  }

  render() {
    const { dispatch, nav, data, ui } = this.props;
    const navigation = addNavigationHelpers({
        dispatch,
        data,
        ui,
        state: nav
    });

    StatusBar.setBarStyle('light-content', false);
    if (Platform.OS === 'android') {
      switch (this.props.nav.index){
         case 0: StatusBar.setBackgroundColor(tabStyle.tabStatusColors.tab0, true); break;
         case 1: StatusBar.setBackgroundColor(tabStyle.tabStatusColors.tab1, true); break;
         case 2: StatusBar.setBackgroundColor(tabStyle.tabStatusColors.tab2, true); break;
         case 3: StatusBar.setBackgroundColor(tabStyle.tabStatusColors.tab3, true); break;
      }
    }

    if (!this.state.isReady) {
        return(
          <AppLoading
              startAsync={this._cacheResourcesAsync}
              onFinish={() => this.setState({ isReady: true })}
              onError={console.warn}/>
        );
    }

    const { hasCheckedAsyncStorage, isFirstLaunch } = this.state;
    //console.log("First launch app:", isFirstLaunch);
    // Check if app has been launched for the first time
    // Comment block out to disable
    if (this.state.isFirstLaunch == true ) {
      return (
        <IntroSlider
          onDone={this.closeIntro}
        />
      );
    }

    return (
      <RootTabs navigation={navigation} />
    );
  }
}

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer, {}, applyMiddleware(handler));
store.dispatch({type: 'GET_GRAPH_DATA'});
store.dispatch({type: 'GET_LAYOUT'});


export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}