import { useState } from "react";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { requestAccounts, requestBalance } from "../actions/walletActions";

function ConnectMeta() {
  const dispatch = useDispatch();
  const history = useHistory(); 
  const connectHandler = async () => {
    if (window.ethereum) {
      await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (result) => {
          await dispatch(requestAccounts(result[0]));
          toast.success('logged in! you will be directed to profile page shortly.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          
          setTimeout(() => {
            history.push('/myprofile')
          }, 4000);
          
        });
    } else {
      alert("Install MetaMask first.");
    }
  };


// const signMessage = async (message) => {
// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const signer =  provider.getSigner();
// const message = await provider.signMessage(message);
// const signature = await provider.getAddress();

//   }

  return (
    <>
    <div className="container">
      <button className="two" onClick={() => connectHandler()}>
        Connect With MetaMask
      </button>
    </div>
    <ToastContainer></ToastContainer>
    </>
  );
}

export default ConnectMeta;
