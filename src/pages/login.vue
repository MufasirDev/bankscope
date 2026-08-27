<template>
  <div class="login-page">
    <div class="login-info">
      <div class="brand">Fin<span>View</span></div>

      <div class="info-content">
        <div class="secure-badge">🔐 Secure Open Banking</div>

        <h1>
          Your financial world,
          <span>in one place.</span>
        </h1>

        <p>
          Securely connect your bank accounts and manage your finances from one
          simple dashboard.
        </p>

        <div class="benefits">
          <div>
            <strong>✓</strong>
            <span>Connect multiple bank accounts</span>
          </div>

          <div>
            <strong>✓</strong>
            <span>View balances and transactions</span>
          </div>

          <div>
            <strong>✓</strong>
            <span>Understand your spending</span>
          </div>
        </div>
      </div>

      <p class="copyright">© 2026 FinView</p>
    </div>

    <div class="login-section">
      <div class="login-card">
        <button class="back-btn" @click="goHome">← Back to home</button>

        <div class="FinView-logo">Fin<span>View</span></div>

        <h2>Welcome back</h2>

        <p class="subtitle">Sign in to access your financial dashboard.</p>

        <form @submit.prevent="login">
          <div class="form-group">
            <label>Email address</label>

            <input
              v-model="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div class="form-group">
            <div class="password-label">
              <label>Password</label>

              <button type="button" class="forgot" @click="forgotPassword">
                Forgot password?
              </button>
            </div>

            <div class="password-input">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                required
              />

              <button
                type="button"
                class="show-btn"
                @click="showPassword = !showPassword"
              >
                {{ showPassword ? "Hide" : "Show" }}
              </button>
            </div>
          </div>

          <div class="remember">
            <label>
              <input v-model="rememberMe" type="checkbox" />

              Remember me
            </label>
          </div>

          <p v-if="errorMessage" class="error">
            {{ errorMessage }}
          </p>

          <button type="submit" class="login-button">Sign In →</button>
        </form>

        <div class="divider">
          <span>OR</span>
        </div>

        <div class="demo-box">
          <strong>Demo Account</strong>

          <p>Use any valid email and a password with at least 4 characters.</p>
        </div>

        <p class="signup">
          Don't have an account?

          <button @click="createAccount">Create one</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const showPassword = ref(false);
const errorMessage = ref("");

function login() {
  errorMessage.value = "";

  if (!email.value || !password.value) {
    errorMessage.value = "Please enter your email and password.";

    return;
  }

  if (password.value.length < 4) {
    errorMessage.value = "Password must contain at least 4 characters.";

    return;
  }

  localStorage.setItem(
    "FinViewUser",
    JSON.stringify({
      email: email.value,
      rememberMe: rememberMe.value,
    }),
  );

  router.push("/dashboard");
}

function goHome() {
  router.push("/");
}

function forgotPassword() {
  alert("Password recovery will be added later.");
}

function createAccount() {
  alert(router.push("/register"));
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f7f9fc;
}

.login-info {
  background: #102a43;
  color: white;
  padding: 50px 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand {
  font-size: 25px;
  font-weight: 800;
}

.brand span {
  color: #4d8dff;
}

.info-content {
  max-width: 500px;
}

.secure-badge {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.1);
  font-size: 13px;
  margin-bottom: 25px;
}
FinView .info-content h1 {
  font-size: 50px;
  line-height: 1.1;
  margin: 0 0 25px;
}

.info-content h1 span {
  color: #4d8dff;
}

.info-content > p {
  color: #bcccdc;
  font-size: 17px;
  line-height: 1.7;
}

.benefits {
  margin-top: 35px;
}

.benefits div {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 18px 0;
  color: #d9e2ec;
}

.benefits strong {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #1261ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copyright {
  color: #829ab1;
  font-size: 13px;
}

.login-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.login-card {
  width: 100%;
  max-width: 450px;
}

.back-btn {
  border: none;
  background: transparent;
  color: #627d98;
  cursor: pointer;
  padding: 0;
  margin-bottom: 45px;
}

.back-btn:hover {
  color: #1261ff;
}

.mobile-logo {
  display: none;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 30px;
}

.mobile-logo span {
  color: #1261ff;
}

.login-card h2 {
  font-size: 36px;
  margin: 0;
  color: #102a43;
}

.subtitle {
  color: #829ab1;
  margin: 10px 0 35px;
}

.form-group {
  margin-bottom: 22px;
}

.form-group label {
  display: block;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
  color: #334e68;
}

.form-group input {
  width: 100%;
  box-sizing: border-box;
  padding: 14px;
  border: 1px solid #d9e2ec;
  border-radius: 9px;
  outline: none;
  font-size: 15px;
  background: white;
}

.form-group input:focus {
  border-color: #1261ff;
  box-shadow: 0 0 0 3px rgba(18, 97, 255, 0.08);
}

.password-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.password-label label {
  margin-bottom: 8px;
}

.forgot {
  border: none;
  background: transparent;
  color: #1261ff;
  cursor: pointer;
  font-size: 13px;
}

.password-input {
  position: relative;
}

.password-input input {
  padding-right: 65px;
}

.show-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: #1261ff;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
}

.remember {
  margin: 5px 0 20px;
}

.remember label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #627d98;
  font-size: 14px;
}

.remember input {
  width: 16px;
  height: 16px;
}

.error {
  background: #fff1f2;
  color: #dc2626;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 15px;
}

.login-button {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 9px;
  background: #1261ff;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.login-button:hover {
  background: #0b52df;
}

.divider {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 30px 0 20px;
  color: #9fb3c8;
  font-size: 12px;
}

.divider::before,
.divider::after {
  content: "";
  height: 1px;
  background: #e5e7eb;
  flex: 1;
}

.demo-box {
  background: #f0f4ff;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
}

.demo-box strong {
  color: #1261ff;
}

.demo-box p {
  color: #627d98;
  font-size: 13px;
  margin: 7px 0 0;
}

.signup {
  text-align: center;
  color: #829ab1;
  margin-top: 25px;
  font-size: 14px;
}

.signup button {
  border: none;
  background: transparent;
  color: #1261ff;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 850px) {
  .login-page {
    grid-template-columns: 1fr;
  }

  .login-info {
    display: none;
  }

  .mobile-logo {
    display: block;
  }

  .login-section {
    min-height: 100vh;
    padding: 30px 7%;
  }
}
</style>
