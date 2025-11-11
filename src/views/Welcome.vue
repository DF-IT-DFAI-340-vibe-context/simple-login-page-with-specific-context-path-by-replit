<template>
  <div class="welcome-container">
    <nav class="navbar">
      <div class="nav-content">
        <h2>我的網站</h2>
        <div class="nav-links">
          <router-link to="/about">關於我們</router-link>
          <button @click="handleLogout" class="logout-btn">登出</button>
        </div>
      </div>
    </nav>
    <div class="welcome-content">
      <div class="welcome-card">
        <h1>歡迎, {{ username }}!</h1>
        <p>您已成功登入系統</p>
        <div class="info-box">
          <h3>系統資訊</h3>
          <p>環境: {{ environment }}</p>
          <p>路徑前綴: {{ contextPath }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Welcome',
  setup() {
    const username = ref('')
    const router = useRouter()
    const contextPath = import.meta.env.VITE_CONTEXT_PATH || '/'
    const environment = import.meta.env.MODE

    onMounted(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn')
      if (!isLoggedIn) {
        router.push('/')
      }
      username.value = localStorage.getItem('username') || '訪客'
    })

    const handleLogout = () => {
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('username')
      router.push('/')
    }

    return {
      username,
      handleLogout,
      contextPath,
      environment
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.welcome-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.navbar {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: $primary-color;
      margin: 0;
    }

    .nav-links {
      display: flex;
      gap: 1rem;
      align-items: center;

      a {
        color: $text-color;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        transition: background 0.3s;

        &:hover {
          background: #f0f0f0;
        }
      }

      .logout-btn {
        padding: 0.5rem 1rem;
        background: $secondary-color;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: darken($secondary-color, 10%);
        }
      }
    }
  }
}

.welcome-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.welcome-card {
  background: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;

  h1 {
    color: $primary-color;
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }

  p {
    color: $text-color;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .info-box {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 2rem;

    h3 {
      color: $primary-color;
      margin-bottom: 1rem;
    }

    p {
      color: $text-color;
      font-size: 1rem;
      margin: 0.5rem 0;
    }
  }
}
</style>
