
const initialState = {
  account: '',
  balance: ''
};

const walletReducers = (state = initialState,action) => {
  switch (action.type) {
    case 'GET_ACCOUNT':
      return{ ...state, account: action.payload} ;
      case 'GET_BALANCE':
      return{ ...state, balance: action.payload} ;
    default:
      return state;
  }
};

export default walletReducers;