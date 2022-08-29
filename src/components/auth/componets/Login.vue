<script setup lang="ts">
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const auth = getAuth()
const isLoading = ref<boolean>(false)

const router = useRouter()

async function loginWithGoogle(): Promise<void> {
  const provider = new GoogleAuthProvider()
  try {
    isLoading.value = true
    const loginResult = await signInWithPopup(auth, provider)
    console.log(loginResult)
    router.push({ name: 'user.dashboard' })
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="grid grid-cols-1">
    <div>
      <button
        @click="loginWithGoogle"
        class="h-8 w-auto bg-blue-400 border border-blue-800"
      >
        Google
      </button>
    </div>
  </div>
</template>
