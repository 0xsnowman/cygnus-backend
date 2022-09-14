const express = require('express');
const router = express.Router();
const { Contract } = require("@ethersproject/contracts");
const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(`https://rpc.ankr.com/avalanche_fuji`);
const CYGNUS_COLLATORAL_CONTRACT_ADDRESS = "0x281CcAFDeE9a281A2Fe55Df3AaF451DFD71Ac8Ea";
const collateralContractABI = require("../../abi/collatoral.json");
const collateralContract = new Contract(CYGNUS_COLLATORAL_CONTRACT_ADDRESS, collateralContractABI, provider);

router.get('/collateral-parameters', async (req, res) => {
    console.log("Getting collateral parameters...");

    const time = new Date();
    const collateralParameters = await collateralContract.collateralParameters();
    const resultString = "It took " + (new Date() - time) / 1000 + " seconds to pull data\n" + collateralParameters;
    
    console.log(resultString);
    console.log(collateralParameters);

    res.type('text/plain');
    res.send(resultString);
});

module.exports = router;