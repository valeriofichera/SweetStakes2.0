

const transaction1 = {
    txHash: '0x1234',
    id: 1,
    title: 'got Flashloan',
    description:'Took flashloan from AAVE -> Deposited to Master Contract | 500 wBTC',
    from:'AAVE',
    to:'Master Contract',
    amount: 500,
    currency: 'wBTC',
    category: 'Flashloan',
    note: '',
};

const transaction2 = {
    txHash: '0x1234',
    id: 2,
    title: 'transfer funds',
    description:'Transfer Flashloan funds from Master Contract -> Drainer Contract | 500 wBTC',
    from:'Master Contract',
    to:'Drainer Contract',
    amount: 500,
    currency: 'wBTC',
    category: 'transfer funds',
    note: '',
};

const transaction3 = {
    txHash: '0x1234',
    id: 3,
    title: 'Mint hWBTC to wBTC/hWBTC Pool',
    description: 'use 4 wBTC of the Flashloan to mint 200 hWBTC',
    from: 'Drainer Contract',
    to: 'wBTC/hWBTC Pool',
    amount: 4,
    currency: 'wBTC',
    category: 'Mint',
    note: '',
  };

const transaction4 = {
    txHash: '0x1234',
    id: 4,
    title: 'get 200 hwBTC for 4 wBTC',
    description:'redeem all hwBTC from the wBTC/hwBTC Pool',
    from:'hwBTC/wBTC Pool',
    to:'Drainer Contract',
    amount: 200,
    currency: 'hwBTC',
    category: 'redeem',
    note: '2 wei of hwBTC left in Pool, result in manipulated exchange rate',
};

const transaction5 = {
    txHash: '0x1234',
    id: 5,
    title: 'return all hwBTC to get back 4 wBTC, but leave 2 wei of hwBTC',
    description:'return 199.9998 hwBTC for 4 wBTC, causing exchange rate to be manipulated ',
    from:'Drainer Contract',
    to:'hwBTC/wBTC Pool',
    amount: 199.99998,
    currency: 'wBTC',
    category: 'return',
    note: 'this happens together with the redeem of the hwBTC',
};

const transaction6 = {
    txHash: '0x1234',
    id: 6,
    title: 'redeem all wBTC by returning all hwBTC from Pool, but leave 2 wei of hwBTC',
    description:'return the back the 4 wBTC out of the wBTC/hwBTC Pool',
    from:'hwBTC/wBTC Pool',
    to:'Drainer Contract',
    amount: 4,
    currency: 'wBTC',
    category: 'redeem',
    note: 'this happens together with the return of the hwBTC',
};



const transaction7 = {
    txHash: '0x1234',
    id: 7,
    title: 'deposit all wBTC to wBTC/hwBTC Pool',
    description:'deposit all flashloaned wBTC to hwBTC/wBTC Pool, resulting in manipulated hwBTC exchange rate',
    from:'Drainer Contract',
    to:'hwBTC/wBTC Pool',
    amount: 500,
    currency: 'wBTC',
    category: 'deposit',
    note: 'based on manipulated exchange rate, 500 wBTC will result in x hwBTC in the Pool, inflating Market Price of 2 wei hwBTC the Drainer Contract is holding',
};

const transaction8 = {
    txHash: '0x1234',
    id: 8,
    title: 'deposit 2 wei of hwBTC to hwBTC/ETH Pool',
    description:'deposit 2 wei of hwBTC to hwBTC/ETH Pool',
    from:'Drainer Contract',
    to:'hwBTC/ETH Pool',
    amount: 0.000002,
    currency: 'hwBTC',
    note: 'the remaining 2 wei are worth 1021.91 ETH, based on manipulated exchange rate',
};

const transaction9 = {
    txHash: '0x1234',
    id: 9,
    title: 'move the 1021.91 ETH to Drainer Contract',
    description:'mint hwBTC of wBTC on Pool | 1 wBTC',
    from:'hwBTC/ETH Pool',
    to:'Drainer Contract',
    amount: 1021.91,
    currency: 'ETH',
    note: 'the remaining 2 wei are worth 1021.91 ETH, based on manipulated exchange rate',
};

const transaction10 = {
    txHash: '0x1234',
    id:10,
    title: 'transfer ETH from Drainer Contract to Master Contrac',
    description:'',
    from:'Drainer Contract',
    to:'Master Contract',
    amount: 1021.91,
    currency: 'ETH',
    category: 'transfer',
};

const transaction11 = {
    txHash: '0x1234',
    id: 11,
    title: 'redeem the 500 wBTC from the hwBTC/wBTC Pool',
    description:'mint hwBTC of wBTC on Pool | 1 wBTC',
    from:'hwBTC/wBTC Pool',
    to:'Drainer Contract',
    amount: 500,
    currency: 'wBTC',
    note: '',

};

const transaction12 = {
    txHash: '0x1234',
    id: 12,
    title: 'redeem the 500 wBTC from the hwBTC/wBTC Pool',
    description:'mint hwBTC of wBTC on Pool | 1 wBTC',
    from:'Drainer Contract',
    to:'Master Contract',
    amount: 500,
    currency: 'wBTC',
    note: '',

};


const transaction13 = {
    txHash: '0x1234',
    id: 13,
    title: 'pay back Flashloan',
    description:'return the 500 wBTC used for the Exploit back to AAVE',
    from:'Master Contract',
    to:'AAVE',
    amount: 500,
    currency: 'wBTC',
    note: '',

};

const transactions = [
                      transaction1,
                      transaction2,
                      transaction3,
                      transaction4,
                      transaction5, 
                      transaction6,
                      transaction7,
                      transaction8,
                      transaction9,
                      transaction10,
                      transaction11, 
                      transaction12,
                      transaction13,
                     ];

export default transactions;
