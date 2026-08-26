<template>
  <div class="transactions-page">

    <div class="page-header">
      <div>
        <p class="welcome">BankScope</p>
        <h1>Transactions</h1>
        <p class="subtitle">
          View and manage your recent banking activity.
        </p>
      </div>

      <button class="back-btn" @click="goDashboard">
        ← Dashboard
      </button>
    </div>

    <div class="summary">

      <div class="summary-card">
        <span>Total Income</span>
        <strong>₦850,000</strong>
      </div>

      <div class="summary-card">
        <span>Total Expenses</span>
        <strong>₦320,500</strong>
      </div>

      <div class="summary-card">
        <span>Transactions</span>
        <strong>{{ filteredTransactions.length }}</strong>
      </div>

    </div>

    <div class="filters">

      <input
        v-model="search"
        type="text"
        placeholder="🔍 Search transactions..."
      />

      <select v-model="typeFilter">
        <option value="All">All Transactions</option>
        <option value="Income">Income</option>
        <option value="Expense">Expenses</option>
      </select>

    </div>
    <div class="transaction-card">

      <div class="transaction-header">
        <h2>Recent Transactions</h2>
        <span>{{ filteredTransactions.length }} records</span>
      </div>

      <div
        v-for="transaction in filteredTransactions"
        :key="transaction.id"
        class="transaction"
      >

        <div class="transaction-icon">
          {{ transaction.icon }}
        </div>

        <div class="transaction-info">
          <strong>{{ transaction.description }}</strong>
          <span>
            {{ transaction.date }} · {{ transaction.bank }}
          </span>
        </div>

        <div
          class="transaction-amount"
          :class="transaction.type.toLowerCase()"
        >
          {{ transaction.type === 'Income' ? '+' : '-' }}
          ₦{{ transaction.amount.toLocaleString() }}
        </div>

      </div>

      <div
        v-if="filteredTransactions.length === 0"
        class="empty"
      >
        No transactions found.
      </div>

    </div>

  </div>
</template>


<script setup>

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const search = ref('')
const typeFilter = ref('All')

const transactions = ref([
  {
    id: 1,
    description: 'Transfer from Ahmed',
    date: '26 Aug 2026',
    bank: 'Moniepoint',
    type: 'Income',
    amount: 50000,
    icon: '↗️'
  },
  {
    id: 2,
    description: 'Netflix Subscription',
    date: '25 Aug 2026',
    bank: 'Moniepoint',
    type: 'Expense',
    amount: 8500,
    icon: '🎬'
  },
  {
    id: 3,
    description: 'Salary Payment',
    date: '24 Aug 2026',
    bank: 'Moniepoint',
    type: 'Income',
    amount: 300000,
    icon: '💰'
  },
  {
    id: 4,
    description: 'Electricity Bill',
    date: '23 Aug 2026',
    bank: 'Moniepoint',
    type: 'Expense',
    amount: 25000,
    icon: '⚡'
  },
  {
    id: 5,
    description: 'Transfer to John',
    date: '22 Aug 2026',
    bank: 'Moniepoint',
    type: 'Expense',
    amount: 75000,
    icon: '↙️'
  },
  {
    id: 6,
    description: 'Cashback',
    date: '21 Aug 2026',
    bank: 'Moniepoint',
    type: 'Income',
    amount: 15000,
    icon: '🎁'
  },
  {
    id: 7,
    description: 'Airtime Purchase',
    date: '20 Aug 2026',
    bank: 'Moniepoint',
    type: 'Expense',
    amount: 5000,
    icon: '📱'
  }
])


const filteredTransactions = computed(() => {

  return transactions.value.filter(transaction => {

    const matchesSearch =
      transaction.description
        .toLowerCase()
        .includes(search.value.toLowerCase())

    const matchesType =
      typeFilter.value === 'All' ||
      transaction.type === typeFilter.value

    return matchesSearch && matchesType

  })

})


function goDashboard() {
  router.push('/dashboard')
}

</script>


<style scoped>

.transactions-page {
  min-height: 100vh;
  background: #f6f8fc;
  padding: 45px 7%;
}



.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.welcome {
  color: #1261ff;
  font-weight: 600;
  margin: 0;
}

h1 {
  color: #102a43;
  margin: 5px 0;
  font-size: 36px;
}

.subtitle {
  color: #829ab1;
  margin: 0;
}

.back-btn {
  padding: 12px 18px;
  border: none;
  border-radius: 8px;
  background: #1261ff;
  color: white;
  cursor: pointer;
}



.summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 25px;
}

.summary-card {
  background: white;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 5px 20px rgba(0,0,0,.04);
}

.summary-card span {
  display: block;
  color: #829ab1;
  margin-bottom: 10px;
}

.summary-card strong {
  font-size: 24px;
  color: #102a43;
}



.filters {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
}

.filters input,
.filters select {
  padding: 14px;
  border: 1px solid #d9e2ec;
  border-radius: 9px;
  background: white;
  outline: none;
}

.filters input {
  flex: 1;
}



.transaction-card {
  background: white;
  border-radius: 16px;
  padding: 25px;
}

.transaction-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.transaction-header h2 {
  color: #102a43;
}

.transaction-header span {
  color: #829ab1;
  font-size: 14px;
}

.transaction {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 5px;
  border-bottom: 1px solid #edf2f7;
}

.transaction-icon {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: #edf3ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.transaction-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.transaction-info strong {
  color: #243b53;
}

.transaction-info span {
  color: #829ab1;
  font-size: 13px;
}

.transaction-amount {
  font-weight: 700;
}

.transaction-amount.income {
  color: #16a34a;
}

.transaction-amount.expense {
  color: #dc2626;
}

.empty {
  text-align: center;
  padding: 40px;
  color: #829ab1;
}



@media (max-width: 700px) {

  .transactions-page {
    padding: 30px 20px;
  }

  .page-header {
    align-items: flex-start;
    gap: 15px;
  }

  h1 {
    font-size: 28px;
  }

  .summary {
    grid-template-columns: 1fr;
  }

  .filters {
    flex-direction: column;
  }

  .transaction-amount {
    font-size: 13px;
  }

}

</style>