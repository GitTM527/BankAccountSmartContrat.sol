const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BankContractModule", (m) => {

  const BankContract = m.contract("BankContract");

  return { BankContract };
});
