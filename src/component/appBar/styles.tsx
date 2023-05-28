import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  ivCenter: {
    height: 30,
    width: 30,
    shadowColor: '#63F4F766',
  },
  screenName: {
    fontSize: 14,
    color: 'white',
  },
  tvBackTitle: {
    fontSize: 14,
    color: '#0bbd7d',
    marginEnd: 7,
    textDecorationLine: 'underline',
    textDecorationColor: 'red',
  },
  container: {
    paddingHorizontal: 12,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  titleView: {
    
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,

  },
  rightIconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
