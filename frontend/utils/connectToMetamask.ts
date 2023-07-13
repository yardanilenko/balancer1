export const connectToMetaMask = async () => {
    try {
      if (!((window as any).ethereum)) {
        alert('Please install MetaMask');
        return false;
      }
  
      const connected = await (window as any).ethereum.isConnected();
      if (!connected) {
        alert('Please connect MetaMask to a network');
        return false;
      }
  
      const networkId = await (window as any).ethereum.request({ method: 'net_version' });
  
      if (networkId !== '97') {
        alert('Please switch to BSC Testnet');
        return false;
      }
  
      await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
  
      return true;
    } catch (error) {
      console.log('Failed to connect to MetaMask:', error);
      return false;
    }
  };
  