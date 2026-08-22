const STORAGE_KEYS = {
      transactions: "fintrack_transactions",
      profile: "fintrack_profile",
      theme: "fintrack_theme",
      filter: "fintrack_filter"
};

const currencySymbols = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      INR: "₹",
      JPY: "¥"
};

let transactions = [];

let activeFilter = localStorage.getItem(STORAGE_KEYS.filter) || "all";
let cashFlowChart = null;

const dashboardPage = document.getElementById("dashboardPage");
const settingsPage = document.getElementById("settingsPage");
const navLinks = document.querySelectorAll(".nav-link");

const balanceValue = document.getElementById("balanceValue");
const incomeValue = document.getElementById("incomeValue");
const expenseValue = document.getElementById("expenseValue");
const transactionsValue = document.getElementById("transactionsValue");
const currencyBadge = document.getElementById("currencyBadge");
const welcomeText = document.getElementById("welcomeText");


const modalOverlay = document.getElementById("modalOverlay");
const openAddModalBtn = document.getElementById("openAddModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelBtn = document.getElementById("cancelBtn");
const transactionForm = document.getElementById("transactionForm");
const formError = document.getElementById("formError");


const typeInput = document.getElementById("type");
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("description");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");

const saveProfileBtn = document.getElementById("saveProfileBtn");
const resetBtn = document.getElementById("resetBtn");


function loadTransactions() {
      const data = localStorage.getItem(STORAGE_KEYS.transactions);
      return data ? JSON.parse(data) : [];
}

function saveTransactions() {
      localStorage.setItem(STORAGE_KEYS.transactions, JSON.stringify(transactions));
}

function loadProfile() {
      const profile = JSON.parse(localStorage.getItem(STORAGE_KEYS.profile) || "{}");
      return {
        name: profile.name || "Guest",
        currency: profile.currency || "INR"
    };
}

function getTheme() {
      return localStorage.getItem(STORAGE_KEYS.theme) || "light";
}

function setTheme(theme){
    if(theme === "dark"){
        document.body.classList.add("dark");
    }
    else{
        document.body.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEYS,theme);
}

function formatMoney(amount) {
      const profile = loadProfile();
      const symbol = currencySymbols[profile.currency] || "₹";
      return `${symbol}${Number(amount).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
}

function calculateTotals(list) {
      let income = 0;
      let expense = 0;

      list.forEach(tx => {
        if (tx.type === "income") income += Number(tx.amount);
        if (tx.type === "expense") expense += Number(tx.amount);
      });
      
      return {
        income,
        expense,
        balance:income-expense
      };
}
