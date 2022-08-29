<script setup lang="ts">
import { getAuth } from '@firebase/auth'
import { useRouter } from 'vue-router'

const auth = getAuth()
const router = useRouter()
async function logOut(): Promise<void> {
  try {
    await auth.signOut()
    router.push({ name: 'auth.login' })
  } catch (error) {
    console.log()
  }
}
</script>

<template>
  <div class="grid grid-cols-1">
    <div>Dashboard</div>
    <div>
      <button
        @click="logOut"
        class="h-8 w-auto bg-blue-400 border border-blue-800"
      >
        Close Session
      </button>
    </div>
  </div>
</template>
