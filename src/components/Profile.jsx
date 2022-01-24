import React, { useEffect, useState } from "react";
import {ethers} from 'ethers'
import { useSelector, useDispatch } from "react-redux";
import walletReducers from "../reducers/walletReducers";
import { requestBalance } from "../actions/walletActions";
import {useHistory} from 'react-router-dom';
function Profile() {
  const dispatch = useDispatch();
  
const history = useHistory();
  const account = useSelector((state) => state.walletReducers.account);
  const balance = useSelector((state) => state.walletReducers.balance);
  console.log(account, "account");
  console.log(balance, "balance");

  useEffect(() =>{
    loadBalance(account);
  }) 

  const loadBalance = async (account) => {
    await window.ethereum
      .request({ method: 'eth_getBalance', params: [account, 'latest'] })
      .then( async (result) => {
        await dispatch(requestBalance(ethers.utils.formatEther(result)));
        
      });
  };

  const accountChange = () =>{
    history.push("/");
  }

window.ethereum.on('chainChanged', accountChange)
  return (
    <div className="container">
      <img
        src="https://images.pexels.com/photos/8452844/pexels-photo-8452844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <h1>
        Addres: <br />
        <span style={{ right: "200px" }}>{account}</span>
      </h1>
      <h1>
        Balance: <br />
        <span>{balance}</span>
      </h1>

      <h1>
        Status: <br /> <span>Logged in successfully</span>
      </h1>
    </div>
  );
}

export default Profile;
