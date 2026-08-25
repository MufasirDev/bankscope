<template>
    <Navbar />
  <div class="transactions">
    <h1>Transactions</h1>
    <p>View your Open Banking transaction history.</p>

    <div class="filters">
      <input
        v-model="search"
        type="text"
        placeholder="Search transactions..."
      />

      <select v-model="filter">
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expenses</option>
      </select>
    </div>

    <div
      v-for="transaction in filteredTransactions"
      :key="transaction.id"
      class="transaction"
    >
      <div>
        <strong>{{ transaction.name }}</strong>
        <p>{{ transaction.date }} · {{ transaction.category }}</p>
      </div>

      <strong :class="transaction.type">
        {{ transaction.type === 'income' ? '+' : '-' }}
        ₦{{ transaction.amount.toLocaleString() }}
      </strong>
    </div>

    <p v-if="filteredTransactions.length === 0">
      No transactions found.
    </p>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { ref, computed } from 'vue'

const search = ref('')
const filter = ref('all')

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
  },
  {
    id: 4,
    name: 'Freelance Payment',
    date: '20 Aug',
    category: 'Income',
    amount: 350000,
    type: 'income'
  }
])

const filteredTransactions = computed(() => {
  return transactions.value.filter(transaction => {
    const matchesSearch =
      transaction.name
        .toLowerCase()
        .includes(search.value.toLowerCase())

    const matchesFilter =
      filter.value === 'all' ||
      transaction.type === filter.value

    return matchesSearch && matchesFilter
  })
})
</script>

<style scoped>
.transactions {
  padding: 50px;
  max-width: 800px;
  margin: auto;
}

.transaction {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 12px 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
}

.transaction p {
  color: #829ab1;
  margin: 5px 0 0;
}

.income {
  color: green;
}

.expense {
  color: red;
}

.filters {
  display: flex;
  gap: 12px;
  margin: 25px 0;
}

.filters input,
.filters select {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.filters input {
  flex: 1;
}
</style>