// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import hre from "hardhat";
// 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
const HelpingPlatform = await hre.ethers.getContractFactory("HelpingPlatform");
const helpingPlatform = await HelpingPlatform.deploy();

await helpingPlatform.deployed();

console.log(
  ` Contarct deployed to :${helpingPlatform.address}`
);
