<script setup>
import LayoutDefault from '@/layouts/Default.vue'
import Login from '@/components/Login.vue'
import { useJwt } from '@vueuse/integrations/useJwt'

onMounted(() => {
  const tokenStore = useTokenStore()
  const router = useRouter()
  const { payload } = useJwt(tokenStore.token)

  if (payload.value){
    router.push('/')
  }
  window.scrollTo(0, 0)
})
</script>

<template>
  <LayoutDefault>
    <Login />
  </LayoutDefault>
</template>
