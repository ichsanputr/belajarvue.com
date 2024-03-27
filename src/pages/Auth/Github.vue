<script setup>
const router = useRouter()
const route = useRoute()
const axios = inject('axios')
const tokenStore = useTokenStore()

onMounted(async () => {
    const { data: { token } } = await axios.get(`/auth/github?code=${route.query.code}`)

    tokenStore.token = token
    router.push('/')
})
</script>