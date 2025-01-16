import Web3 from 'web3';

const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const address = '0xE9004bD335833d7a933eCb6934D20Ed0959Bb4f1';
const web3 = new Web3('http://127.0.0.1:7545'); // Ganache

const contract = new web3.eth.Contract(abi, address);

const interact = async () => {
    const accounts = await web3.eth.getAccounts();

    // Получение баланса контракта до отправки средств
    const contractBalanceBefore = await contract.methods.getBalance().call();
    console.log('Contract balance before:', web3.utils.fromWei(contractBalanceBefore, 'ether'));

    // Отправка Ether
    await web3.eth.sendTransaction({
        from: accounts[0],
        to: address,
        value: web3.utils.toWei('1', 'ether'),
        gas: 210000 // Увеличьте лимит газа при необходимости
    });

    console.log('1 Ether sent to contract.');

    // Проверка баланса контракта после отправки
    const contractBalanceAfter = await contract.methods.getBalance().call();
    console.log('Contract balance after sending Ether:', web3.utils.fromWei(contractBalanceAfter, 'ether'));

    // Вывод средств
    await contract.methods.withdraw().send({ from: accounts[0] });
    console.log('All funds withdrawn.');

    // Проверка баланса контракта после вывода средств
    const contractBalanceFinal = await contract.methods.getBalance().call();
    console.log('Contract balance after withdrawal:', web3.utils.fromWei(contractBalanceFinal, 'ether'));
};

interact();
