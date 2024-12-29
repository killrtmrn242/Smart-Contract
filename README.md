# Smart-Contract

## 1. Написание смарт-контракта
1. **Установка и настройка среды разработки:**
    - Установите Node.js (включает npm)
    - Убедитесь, что Node.js установлен:
          `node -v`
          `npm -v`
2. **Сам контракт содержится в файле `EtherWallet.sol`**

## 2. Установка и настройка web3.js
1. **Создание проекта:**
   - Откройте консоль (PowerShell или CMD) и перейдите в папку проекта:
     `cd C:\web3-demo`
   - Инициализируйте проект:
     `npm init -y`
2. **Установка web3.js:**
   - `npm install web3`

3. **Установка Ganache и настройка сети**
    1. **Установка Ganache:**

        - Скачайте Ganache с официального сайта.
        - Установите Ganache и запустите его.
        - Выберите **Quickstart Ethereum**.
    2. **Настройка подключения к Ganache:**

        - В Ganache отобразится RPC URL (например, `http://127.0.0.1:7545`).
        - Скопируйте RPC URL для использования в web3.js.
