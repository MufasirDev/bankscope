<template>
    <Navbar />
  <div class="accounts">
    <div class="header">
      <div>
        <p>BankScope</p>
        <h1>My Accounts</h1>
      </div>

      <button @click="connectBank">
        + Connect Bank
      </button>
    </div>

    <div v-if="accounts.length === 0" class="empty">
      <h2>No connected accounts</h2>
      <p>Connect a bank account to see it here.</p>

      <button @click="connectBank">
        Connect Bank
      </button>
    </div>

    <div v-else class="account-grid">
      <div
        v-for="account in accounts"
        :key="account.id"
        class="account-card"
      >
        <div class="account-top">
          <div class="logo">
            {{ account.shortName }}
          </div>

          <span class="connected">
            ● Connected
          </span>
        </div>

        <p class="bank-name">
          {{ account.bank }}
        </p>

        <h2>
          ₦{{ account.balance.toLocaleString() }}
        </h2>

        <div class="account-info">
          <span>{{ account.type }}</span>
          <span>{{ account.number }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const accounts = ref([])

onMounted(() => {
  const bank = localStorage.getItem('connectedBank')

  if (bank) {
    const connectedBank = JSON.parse(bank)

    accounts.value = [
      {
        id: 1,
        bank: connectedBank.name,
        shortName: connectedBank.shortName,
        balance: 2450000,
        type: 'Current Account',
        number: '**** 4821'
      }
    ]
  }
})

function connectBank() {
  router.push('/connect-bank')
}
</script>

<style scoped>
.accounts {
  min-height: 100vh;
  background: #f7f9fc;
  padding: 45px 7%;
  color: #102a43;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.header p {
  color: #1261ff;
  margin: 0;
}

.header h1 {
  margin: 5px 0;
}

button {
  border: none;
  background: #1261ff;
  color: white;
  padding: 13px 22px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.account-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  max-width: 900px;
}

.account-card {
  background: #102a43;
  color: white;
  padding: 30px;
  border-radius: 18px;
}

.account-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: #1261ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.connected {
  color: #7ee2a8;
  font-size: 13px;
}

.bank-name {
  opacity: 0.7;
  margin-top: 25px;
}

.account-card h2 {
  font-size: 30px;
}

.account-info {
  display: flex;
  justify-content: space-between;
  opacity: 0.7;
  font-size: 14px;
}

.empty {
  background: white;
  padding: 50px;
  text-align: center;
  max-width: 600px;
  border-radius: 18px;
}
</style>