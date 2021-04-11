import { expect } from "chai"
import { ethers } from "hardhat"

// Start test block
describe('Box', () => {
  let Box: any
  let box: any
  before(async () => {
    Box = await ethers.getContractFactory("Box");
  });

  beforeEach(async function () {
    box = await Box.deploy();
    await box.deployed();
  });

  // Test case
  it('retrieve returns a value previously stored', async function () {
    // Store a value
    await box.store(42);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await box.retrieve()).toString()).to.equal('42');
  });
});
