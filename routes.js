import voice from './voice';
import main from './main'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import gioithieu from './gioithieu'
import lienhe from './lienhe';
import { createAppContainer, createStackNavigator } from 'react-navigation';
 


const bottom = createBottomTabNavigator({
   
    Home: { screen: voice },
    main: { screen: main },
    gioithieu:{screen:gioithieu},
    lienHe:{screen:lienhe}

  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  })
export default createAppContainer(bottom);
