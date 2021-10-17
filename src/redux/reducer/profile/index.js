import {reducer} from '../../../constants';

const initialStateRoot = {
  profile: {},
  isLogin: false,
  packages: [],
};

const profile = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducer.PROFILE:
      return {
        ...state,
        profile: action.value,
      };
    case reducer.ISLOGIN:
      return {
        ...state,
        isLogin: action.value,
      };
    case reducer.PACKAGES:
      return {
        ...state,
        packages: action.value,
      };
    default:
      return state;
  }
};

export default profile;
