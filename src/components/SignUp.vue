<script setup>
import Google from './Icons/Google.vue';
import Github from './Icons/Github.vue';
import FacebookPlain from './Icons/FacebookPlain.vue';
import { useTokenStore } from '@/stores/token'
import { useSignupStore } from '@/stores/signup'

const signupStore = useSignupStore()
const tokenStore = useTokenStore()
const router = useRouter()
const route = useRoute()

const axios = inject('axios')
const form = reactive({
    name: '',
    email: '',
    password: ''
})
const errName = ref(false)
const errEmail = ref(false)
const errPassword = ref(false)
const showPassword = ref(false)
const loadingSignup = ref(false)
const otp = ref()
const otpSection = ref(false)
const loadingVerification = ref(false)
const errVerificationCode = ref(false)

onMounted(() => {
    if (route.query.email){
        form.email = route.query.email
    }

    if (signupStore.password){
        form.password = signupStore.password
    }
})

async function register() {
    validateForm()
    if (!errName.value && !errEmail.value && !errPassword.value) {
        loadingSignup.value = true
        try {
            await axios.post('/register', form)
            setTimeout(() => {
                loadingSignup.value = false
                otpSection.value = true
            }, 500)
        } catch (err) {
            if (err.response.data == 'USER_REGISTERED') {
                setTimeout(() => {
                    loadingSignup.value = false
                    errEmail.value = true
                }, 500)
            }
        }
    }
}

function validateForm() {
    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if (/\s/g.test(form.name) || form.name.length == 0) {
        errName.value = true
    } else {
        errName.value = false
    }

    if (regexEmail.test(form.email)) {
        errEmail.value = false
    } else {
        errEmail.value = true
    }

    if (form.password.length > 6 && form.password.length < 21) {
        errPassword.value = false
    } else {
        errPassword.value = true
    }
}

async function verification() {
    loadingVerification.value = true
    try {
        const { data: { token } } = await axios.post('/verification', {
            email: form.email,
            code: otp.value
        })

        tokenStore.token = token
        router.push('/')
    } catch (err) {
        errVerificationCode.value = true
    }
    loadingVerification.value = false
}

const handleOtpComplete = (value) => {
    otp.value = value
}
</script>

<template>
    <div class="bg-dotted py-10 md:py-14 border-t border-slate-300">
        <div v-if="!otpSection" class="mx-auto max-[900px]:w-[90%] md:w-[60%] xl:w-[35%]">
            <h1 class="font-semibold">Buat akun Belajarvue.com</h1>
            <label class="form-control w-full mt-4">
                <div class="label">
                    <span class="label-text font-medium">Username</span>
                </div>
                <input :class="{ 'border-2 border-red-300': errName }" v-model="form.name" type="text" maxlength="12"
                    placeholder="Masukkan nama Anda" class="border input input-bordered w-full" />
                <div class="label">
                    <span class="label-text-alt" :class="{ 'text-[red]': errName }">Username tidak boleh mengandung
                        spasi</span>
                </div>
            </label>
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text font-medium">Email</span>
                </div>
                <input v-model="form.email" type="text" placeholder="Masukkan email Anda"
                    class="input input-bordered w-full" :class="{ 'border-red-400 border': errEmail }" />
                <div class="label">
                    <span class="label-text-alt" :class="errEmail ? 'text-[red]' : 'text-black'">Pastikan email
                        valid & belum terdaftar</span>
                </div>
            </label>
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text font-medium">Password</span>
                </div>
                <label class="input input-bordered flex items-center gap-2"
                    :class="{ 'border-red-400 border': errPassword }">
                    <input v-if="!showPassword" v-model="form.password" type="password" minlength="6"
                        placeholder="••••••" maxlength="20" class="w-full outline-none" />
                    <input v-else v-model="form.password" type="text" minlength="6" placeholder="••••••" maxlength="20"
                        class="w-full outline-none" />
                    <div class="cursor-pointer" @click="showPassword = !showPassword">
                        <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="1.3em" viewBox="0 0 24 24">
                            <g fill="none">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                <path fill="currentColor"
                                    d="M12 5c3.679 0 8.162 2.417 9.73 5.901c.146.328.27.71.27 1.099c0 .388-.123.771-.27 1.099C20.161 16.583 15.678 19 12 19c-3.679 0-8.162-2.417-9.73-5.901C2.124 12.77 2 12.389 2 12c0-.388.123-.771.27-1.099C3.839 7.417 8.322 5 12 5m0 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4" />
                            </g>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.3em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7" />
                        </svg>
                    </div>
                </label>
                <div class="label">
                    <span class="label-text-alt" :class="errPassword ? 'text-[red]' : 'text-black'">Minimal 6 huruf,
                        bebas mengandung karakter apapun</span>
                </div>
            </label>
            <div class="mt-4">
                <span class="font-light text-sm">Dengan mendaftar akun, Anda menyetujui <span
                        class="text-[#4349FF] underline cursor-pointer" @click="$router.push('/privacy-policy')">Terms
                        of Service
                    </span> & <span class="text-[#4349FF] underline cursor-pointer"
                        @click="$router.push('/privacy-policy')">Privacy
                        Policy</span> BelajarVue.</span>
            </div>
            <button @click="register"
                class="bg-[#4349ff] py-2 text-white font-medium rounded-md text-sm mt-4 mb-4 w-[100px]">
                <span v-if="!loadingSignup">Daftar</span>
                <span v-else class="loading loading-spinner loading-xs"></span>
            </button>
            <div class="mb-4">
                <span class="font-medium text-sm md:text-md">Atau daftar dengan:</span>
            </div>
            <div class="flex">
                <div
                    class="bg-white border border-black w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-lg justify-center items-center flex cursor-pointer">
                    <Google class="w-[16px] md:w-[20px]" />
                </div>
                <div
                    class="bg-white mx-3 border border-black w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-lg justify-center items-center flex cursor-pointer">
                    <Github class="w-[16px] md:w-[20px]" />
                </div>
                <div
                    class="bg-white border border-black w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-lg justify-center items-center flex cursor-pointer">
                    <FacebookPlain class="w-[16px] md:w-[20px]" />
                </div>
            </div>
        </div>
        <div v-else class="mx-auto py-8 max-[900px]:w-[90%] md:w-[60%] xl:w-[35%]">
            <h1 class="font-semibold">Verifikasi Email</h1>
            <div class="w-full mt-6">
                <v-otp-input ref="otpInput"
                    input-classes="w-[56px] shadow rounded-md mr-3 h-[56px] text-[18px] block pl-[22px]" separator=""
                    inputType="numeric" :num-inputs="5" :should-auto-focus="true" @on-complete="handleOtpComplete"
                    :should-focus-order="true" :placeholder="[]" />
            </div>
            <div class="mt-4">
                <span class="font-light text-sm">Masukkan 5 digit kode yang telah kami kirim ke emailmu, belum menerima
                    kode verifikasi? <span class="ml-[2px] font-medium underline text-[#4349FF]">Kirim
                        ulang</span></span>
            </div>
            <button @click="register"
                class="bg-[#4349ff] py-2 text-white font-medium rounded-md text-sm mt-4 mb-2 w-[100px]">
                <span v-if="!loadingVerification" @click="verification">Verifikasi</span>
                <span v-else class="loading loading-spinner loading-xs"></span>
            </button>
            <div v-if="errVerificationCode">
                <span class="text-[red] label-text-alt">Kode yang anda masukkan sepertinya salah</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
li {
    margin-top: 12px;
    font-weight: 300;
    font-size: 14px;
}

.bg-dotted {
    background-color: #FBEEE4;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23FBEEE4' stroke-width='0.4' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%23f8ece2' href='%23s' y='2'/%3E%3Cuse fill='%23f8ece2' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f6e9df' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f6e9df' href='%23s'/%3E%3Cuse fill='%23f3e7dd' href='%23s' x='2'/%3E%3Cuse fill='%23f3e7dd' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23f1e4db'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23f1e4db'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23eee2d8'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23FBEEE4'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23ebdfd6'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23EEE2D8'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23EEE2D8'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23EEE2D8'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}

input::placeholder {
    font-size: 0.9rem;
}
</style>