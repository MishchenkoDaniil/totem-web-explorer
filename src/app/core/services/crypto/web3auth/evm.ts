
import type { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";
import { contractABI } from "../abi/FactoryERC1155";

export default class EthereumRpc {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }
  async getAccounts(): Promise<string[]> {
    try {
      const web3 = new Web3(this.provider as any);
      const accounts = await web3.eth.getAccounts();
      return accounts;
    } catch (error: unknown) {
      return error as string[];
    }
  }

  async getBalance(): Promise<string> {
    try {
      const web3 = new Web3(this.provider as any);
      const accounts = await web3.eth.getAccounts();
      const balance = await web3.eth.getBalance(accounts[0]);
      return balance;
    } catch (error) {
      return error as string;
    }
  }

  async signMessage() {
    try {
      const web3 = new Web3(this.provider as any);
      const accounts = await web3.eth.getAccounts();
      const message = "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
      (web3.currentProvider as any)?.send(
        {
          method: "eth_sign",
          params: [accounts[0], message],
          from: accounts[0],
        },
        (err: Error, result: any) => {
          if (err) {
            return console.error(err);
          }
          return result;
        }
      );
    } catch (error) {
      return error as string;
    }
    return;
  }

  async signTransaction(): Promise<string> {
    try {
      const web3 = new Web3(this.provider as any);
      const accounts = await web3.eth.getAccounts();
      const txRes = await web3.eth.signTransaction({
        from: accounts[0],
        to: accounts[0],
        value: web3.utils.toWei("0.01"),
      });
      return txRes.raw;
    } catch (error) {
      return error as string;
    }
  }

  async mintNft(): Promise<string> {

    const web3 = new Web3(this.provider as any);
    const accounts = await web3.eth.getAccounts();

    
      

    const wallet = accounts[0];
    const contractAddress = '0x2ed437BECc3EAEC833deA9fBe546aC1C03fc913d';
    const ABI = contractABI;

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const tx = await web3.eth.sendTransaction({
      from: wallet,
      to: contractAddress,
      maxPriorityFeePerGas: "5000000000",
      maxFeePerGas: "6000000000000",
      data: contract.methods.mintERC1155('Test NFT', 1).encodeABI(),
    });

    console.log(tx);

    return 'Ok';
  }

  async signAndSendTransaction(wallet: string, contract: string): Promise<string> {
    try {
      const web3 = new Web3(this.provider as any);
      const accounts = await web3.eth.getAccounts();

      const txRes = await web3.eth.sendTransaction({
        from: wallet,
        to: contract,
        value: web3.utils.toWei("0.01"),
        maxPriorityFeePerGas: "5000000000",
        maxFeePerGas: "6000000000000",
      });
      return txRes.transactionHash;
    } catch (error) {
      return error as string;
    }
  }
}