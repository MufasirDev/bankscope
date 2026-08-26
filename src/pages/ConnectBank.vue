<template>
  <div class="connect-page">

    <div class="connect-card">

      <button class="back" @click="goDashboard">
        ← Back to Dashboard
      </button>

      <div class="header">
        <div class="icon">🏦</div>

        <h1>Connect your bank</h1>

        <p>
          Select your bank to securely connect your
          account to BankScope.
        </p>
      </div>

      <div class="banks">

        <button
          v-for="bank in banks"
          :key="bank.name"
          class="bank"
          :class="{ selected: selectedBank?.name === bank.name }"
          @click="selectBank(bank)"
        >

          <div class="bank-logo">
            {{ bank.shortName }}
          </div>

          <div class="bank-info">
            <strong>{{ bank.name }}</strong>
            <span>{{ bank.type }}</span>
          </div>

          <div
            v-if="selectedBank?.name === bank.name"
            class="check"
          >
            ✓
          </div>

        </button>

      </div>


      <button
        class="connect-button"
        :disabled="!selectedBank"
        @click="connectBank"
      >
        {{ selectedBank
          ? `Connect ${selectedBank.name}`
          : 'Select a bank first'
        }}
      </button>

      <p class="security">
        🔒 Your banking information is protected.
        BankScope does not store your banking password.
      </p>

    </div>

  </div>
</template>


<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const selectedBank = ref(null)

const banks = [
  {
    name: 'OPay',
    shortName: 'OP',
    type: 'Digital Bank'
  },
  {
    name: 'Moniepoint',
    shortName: 'MP',
    type: 'Digital Bank'
  },
  {
    name: 'Kuda',
    shortName: 'KU',
    type: 'Digital Bank'
  },
  {
    name: 'Summit Bank',
    shortName: 'SB',
    type: 'Commercial Bank'
  },
  {
    name: 'GTBank',
    shortName: 'GT',
    type: 'Commercial Bank'
  },
  {
    name: 'Zenith Bank',
    shortName: 'ZB',
    type: 'Commercial Bank'
  },
  {
    name: 'UBA',
    shortName: 'UBA',
    type: 'Commercial Bank'
  }
   
]


function selectBank(bank) {

  selectedBank.value = bank

}


function connectBank() {

  if (!selectedBank.value) {
    return
  }

  localStorage.setItem(
    'connectedBank',
    JSON.stringify(selectedBank.value)
  )

  router.push('/dashboard')

}


function goDashboard() {

  router.push('/dashboard')

}

</script>


<style scoped>

.connect-page {
  min-height: 100vh;
  background: #f7f9fc;

  display: flex;
  justify-content: center;

  padding: 60px 20px;
}

.connect-card {
  width: 100%;
  max-width: 700px;

  background: white;

  padding: 35px;

  border-radius: 18px;

  box-shadow: 0 15px 40px rgba(16, 42, 67, 0.08);
}

.back {
  border: none;
  background: transparent;

  color: #627d98;

  cursor: pointer;

  margin-bottom: 30px;
}

.header {
  text-align: center;
}

.icon {
  width: 60px;
  height: 60px;

  margin: auto;

  border-radius: 15px;

  background: #eaf0ff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
}

.header h1 {
  color: #102a43;
  margin: 18px 0 8px;
}

.header p {
  color: #829ab1;

  max-width: 500px;

  margin: auto;

  line-height: 1.6;
}



.banks {
  margin-top: 35px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 12px;
}

.bank {
  display: flex;

  align-items: center;

  gap: 12px;

  padding: 15px;

  background: white;

  border: 1px solid #e1e8f0;

  border-radius: 12px;

  cursor: pointer;

  text-align: left;
}

.bank:hover {
  border-color: #1261ff;
}

.bank.selected {
  border-color: #1261ff;

  background: #f0f4ff;
}

.bank-logo {
  width: 42px;
  height: 42px;

  border-radius: 10px;

  background: #1261ff;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;

  font-weight: 800;
}

.bank-info {
  display: flex;

  flex-direction: column;

  gap: 4px;

  flex: 1;
}

.bank-info strong {
  color: #102a43;
}

.bank-info span {
  color: #829ab1;

  font-size: 12px;
}

.check {
  width: 24px;
  height: 24px;

  border-radius: 50%;

  background: #1261ff;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
}



.connect-button {
  width: 100%;

  margin-top: 25px;

  padding: 15px;

  border: none;

  border-radius: 9px;

  background: #1261ff;

  color: white;

  font-size: 15px;

  font-weight: 700;

  cursor: pointer;
}

.connect-button:disabled {
  background: #bcccdc;

  cursor: not-allowed;
}



.security {
  text-align: center;

  color: #829ab1;

  font-size: 12px;

  margin-top: 20px;
}



@media (max-width: 600px) {

  .connect-card {
    padding: 25px 18px;
  }

  .banks {
    grid-template-columns: 1fr;
  }

}

</style>