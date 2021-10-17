import {Alert} from 'react-native';

const RNAlert = ({title = 'Oops', message, button, option}) => {
  return Alert.alert(title, message, button, option);
};

export default RNAlert;
