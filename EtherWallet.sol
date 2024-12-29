// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EtherWallet {
    address public owner;

    // Устанавливаем владельца
    constructor() {
        owner = msg.sender;
    }

    // Получение Ether
    receive() external payable {}

    // Просмотр баланса контракта
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    // Вывод всех средств (только владелец)
    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
