<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
    })
    if (error) throw error
    alert('请检查您的电子邮件以获取登录链接!')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <!-- 使用魔法链接方式登录 -->
    <div class="col-6 form-widget">
      <h1 class="header">MemFire Cloud + Vue 3</h1>
      <p class="description">通过发送魔法链接至您的电子邮件来完成登录</p>
      <div>
        <input class="inputField" required type="email" placeholder="请输入邮箱" v-model="email" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : '发送魔法链接'"
          :disabled="loading"
        />
      </div>
    </div>
<!-- 邮箱和密码方式登录注册 -->
    <!-- <div class="col-6 form-widget">
      <h1 class="header">MemFire Cloud + Vue 3</h1>
      <p class="description">邮箱和密码方式登录注册</p>
      <div>
        <input class="inputField" required type="email" placeholder="请输入邮箱" v-model="email" />
      </div>
        <div>
        <input class="inputField" required type="password" placeholder="请输入密码" v-model="password" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : ''"
          :disabled="loading"
        />
      </div>
    </div> -->
  </form>
</template>