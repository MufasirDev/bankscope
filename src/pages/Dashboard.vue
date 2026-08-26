<template>
  <Navbar />

  <div class="dashboard">


    <header class="top">
      <div>
        <p class="welcome">Welcome back 👋</p>
        <h1>Financial Overview</h1>
      </div>

      <button class="connect-btn" @click="connectBank">
        + Connect Bank
      </button>
    </header>


    <section v-if="connectedBank" class="account-card">

      <div class="account-header">
        <div class="bank-logo">
          {{ connectedBank.shortName }}
        </div>

        <div>
          <p class="label">Connected Bank</p>
          <h2>{{ connectedBank.name }}</h2>
        </div>

        <span class="status">
          ● Connected
        </span>
      </div>

      <div class="balance-section">
        <p>Available Balance</p>
        <h2>₦2,450,000.00</h2>
      </div>

      <div class="account-details">
        <div>
          <span>Account Type</span>
          <strong>Current Account</strong>
        </div>

        <div>
          <span>Account Number</span>
          <strong>**** 4821</strong>
        </div>

        <div>
          <span>Currency</span>
          <strong>NGN</strong>
        </div>
      </div>

    </section>


    <section v-else class="empty-state">

      <h2>No bank connected yet</h2>

      <p>
        Connect your bank account to see your balance
        and transactions.
      </p>

      <button @click="connectBank">
        Connect Your Bank
      </button>

    </section>


    <section class="stats">

      <div class="stat-card">
        <span>Total Income</span>

        <h2>₦850,000</h2>

        <small>This month</small>
      </div>

      <div class="stat-card">
        <span>Total Expenses</span>

        <h2>₦320,500</h2>

        <small>This month</small>
      </div>

      <div class="stat-card">
        <span>Transactions</span>

        <h2>24</h2>

        <small>This month</small>
      </div>

    </section>

    <section class="transactions">

      <div class="section-title">
        <h2>Recent Transactions</h2>

        <button @click="viewTransactions">
          View all
        </button>
      </div>

      <div
        v-for="transaction in transactions"
        :key="transaction.id"
        class="transaction"
      >

        <div>
          <strong>{{ transaction.name }}</strong>

          <p>
            {{ transaction.date }}
            •
            {{ transaction.category }}
          </p>
        </div>

        <strong
          :class="
            transaction.type === 'income'
              ? 'income'
              : 'expense'
          "
        >
          {{ transaction.type === 'income' ? '+' : '-' }}
          ₦{{ transaction.amount.toLocaleString() }}
        </strong>

      </div>

    </section>

  </div>
</template>


<script setup>

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'

const router = useRouter()

const connectedBank = ref(null)

const transactions = ref([
  {
    id: 1,
    name: 'Salary',
    date: 'Today',
    category: 'Income',
    amount: 500000,
    type: 'income'
  },

  {
    id: 2,
    name: 'Electricity Bill',
    date: 'Yesterday',
    category: 'Bill Payment',
    amount: 45000,
    type: 'expense'
  },

  {
    id: 3,
    name: 'Transfer',
    date: 'Yesterday',
    category: 'Transfer',
    amount: 30000,
    type: 'expense'
  }
])


onMounted(() => {

  const bank = localStorage.getItem('connectedBank')

  if (bank) {
    connectedBank.value = JSON.parse(bank)
  }

})


function connectBank() {

  router.push('/connect-bank')

}


function viewTransactions() {

  router.push('/transactions')

}
function goTransactions() {
  router.push('/transactions')
}

function goAccounts() {
  router.push('/accounts')
}

</script>


<style scoped>

.dashboard {
  min-height: 100vh;
  background: #f7f9fc;
  padding: 45px 7%;
  color: #102a43;
}




.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
}

.welcome {
  color: #829ab1;
  margin: 0;
}

.top h1 {
  margin: 5px 0 0;
  font-size: 32px;
}


.connect-btn,
.empty-state button {
  border: none;
  background: #1261ff;
  color: white;
  padding: 13px 22px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}



.account-card {
  background: #102a43;
  color: white;
  border-radius: 20px;
  padding: 30px;
  max-width: 850px;
  box-shadow: 0 20px 45px rgba(16, 42, 67, 0.15);
}

.account-header {
  display: flex;
  align-items: center;
  gap: 15px;
}

.bank-logo {
  width: 55px;
  height: 55px;
  border-radius: 13px;
  background: #1261ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.label {
  margin: 0;
  opacity: 0.7;
  font-size: 14px;
}

.account-header h2 {
  margin: 4px 0;
}

.status {
  margin-left: auto;
  color: #7ee2a8;
  font-size: 14px;
}



.balance-section {
  margin: 45px 0 30px;
}

.balance-section p {
  opacity: 0.7;
  margin-bottom: 5px;
}

.balance-section h2 {
  font-size: 38px;
  margin: 0;
}



.account-details {
  display: flex;
  gap: 60px;
}

.account-details div {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.account-details span {
  opacity: 0.6;
  font-size: 13px;
}



.empty-state {
  background: white;
  padding: 50px;
  border-radius: 18px;
  text-align: center;
  max-width: 850px;
}

.empty-state p {
  color: #627d98;
  margin-bottom: 25px;
}



.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 850px;
  margin: 30px 0;
}

.stat-card {
  background: white;
  padding: 25px;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
}

.stat-card span {
  color: #829ab1;
}

.stat-card h2 {
  margin: 10px 0 5px;
}

.stat-card small {
  color: #829ab1;
}



.transactions {
  background: white;
  max-width: 850px;
  border-radius: 18px;
  padding: 25px;
}

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title button {
  border: none;
  background: transparent;
  color: #1261ff;
  cursor: pointer;
}

.transaction {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #edf2f7;
}

.transaction p {
  color: #829ab1;
  margin: 5px 0 0;
  font-size: 14px;
}

.income {
  color: #16a34a;
}

.expense {
  color: #dc2626;
}



@media (max-width: 768px) {

  .top {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  .account-details {
    flex-direction: column;
    gap: 20px;
  }

  .account-header {
    flex-wrap: wrap;
  }

}

</style>