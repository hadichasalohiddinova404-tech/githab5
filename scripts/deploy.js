const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying MyNFT contract with the account:", deployer.address);

  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy(deployer.address);

  await myNFT.waitForDeployment();
  const address = await myNFT.getAddress();
  
  console.log(`MyNFT successfully deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
