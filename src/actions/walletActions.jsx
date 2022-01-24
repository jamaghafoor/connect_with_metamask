//Get MetaMask Account
export const requestAccounts = (result) => ({
  type: 'GET_ACCOUNT',
  payload: result
});

//Get MetaMask Balance
export const requestBalance = (balance) => ({
  type: 'GET_BALANCE',
  payload: balance
});
