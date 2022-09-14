const express = require('express');
const router = express.Router();
const { Contract } = require("@ethersproject/contracts");
const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(`https://rpc.ankr.com/avalanche_fuji`);
const CYGNUS_ROUTER_CONTRACT_ADDRESS = "0xC403e69cE39725b5DFf9056fAbff45A235228c9e";
const routerContractABI = require("../../abi/router.json");
const routerContract = new Contract(CYGNUS_ROUTER_CONTRACT_ADDRESS, routerContractABI, provider);

router.get('/native-token', async (req, res) => {
    console.log("Getting native token from router...");

    const time = new Date();
    const nativeToken = await routerContract.nativeToken();
    const resultString = "It took " + (new Date() - time) / 1000 + " seconds to pull data\n" + nativeToken;
    
    console.log(resultString);
    console.log(nativeToken);

    res.type('text/plain');
    res.send(resultString);
});

module.exports = router;