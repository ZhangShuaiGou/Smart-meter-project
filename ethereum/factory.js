import web3 from './web3';
import MeterContractFactory from './build/MeterContractFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(MeterContractFactory.interface),
  '0x7A8d0dDeEe10C113659926E82e50333E0508021E'
);

export default instance;
