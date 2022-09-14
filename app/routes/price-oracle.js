const express = require('express');
const router = express.Router();
const { Contract } = require("@ethersproject/contracts");
const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(`https://rpc.ankr.com/avalanche_fuji`);
const CYGNUS_PRICE_ORACLE_CONTRACT_ADDRESS = "0x165Bd223dE484b3429e06EC37a8BBD8bC8f81362";
const priceOracleContractABI = require("../../abi/price-oracle.json");
const priceOracleContract = new Contract(CYGNUS_PRICE_ORACLE_CONTRACT_ADDRESS, priceOracleContractABI, provider);

router.get('/nebula-size', async (req, res) => {
    console.log("Getting nebula size from oracle...");

    const time = new Date();
    const nebulaSize = await priceOracleContract.nebulaSize();
    const resultString = "It took " + (new Date() - time) / 1000 + " seconds to pull data\n" + nebulaSize.toString();
    
    console.log(resultString);
    console.log(nebulaSize);

    res.type('text/plain');
    res.send(resultString);
});

router.get('/dai-price', async (req, res) => {
    console.log("Getting dai price from oracle...");

    const time = new Date();
    const daiPrice = await priceOracleContract.daiPrice();
    const resultString = "It took " + (new Date() - time) / 1000 + " seconds to pull data\n" + daiPrice.toString();
    
    console.log(resultString);
    console.log(daiPrice);

    res.type('text/plain');
    res.send(resultString);
});

router.get('/dai', async (req, res) => {
    console.log("Getting dai from oracle...");

    const time = new Date();
    const dai = await priceOracleContract.dai();
    const resultString = "It took " + (new Date() - time) / 1000 + " seconds to pull data\n" + dai.toString();
    
    console.log(resultString);
    console.log(dai);

    res.type('text/plain');
    res.send(resultString);
});

router.get('/lp-token-price-dai', async (req, res) => {
    console.log("Getting lpTokenPriceDai from oracle...");
    console.log(req.body);

    const time = new Date();
    const lpTokenPriceDai = await priceOracleContract.lpTokenPriceDai(0xae461ca67b15dc8dc81ce7615e0320da1a9ab8d5);
    const resultString = "It took " + (new Date() - time) / 1000 + " seconds to pull data\n" + lpTokenPriceDai.toString();
    
    console.log(resultString);
    console.log(lpTokenPriceDai);

    res.type('text/plain');
    res.send(resultString);
});

router.get('/symbol', async (req, res) => {
    console.log("Getting symbol from oracle...");

    const time = new Date();
    const symbol = await priceOracleContract.symbol();
    const resultString = "It took " + (new Date() - time) / 1000 + " seconds to pull data\n" + symbol.toString();
    
    console.log(resultString);
    console.log(symbol);

    res.type('text/plain');
    res.send(resultString);
});

module.exports = router;