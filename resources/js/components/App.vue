<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <router-link to="/"><a class="navbar-brand">Home</a></router-link>
            <button
                class="btn btn-outline-success my-2 my-sm-0"
                @click="show"
                v-if="this.$route.path === '/'"
            >
                Войти
            </button>
        </nav>

        <modal name="login">
            <form @submit.prevent class="p-4">
                <h3>Введите адрес электронной почты и пароль</h3>

                <div class="form-group mb-4">
                    <input type="email"
                           placeholder="адрес электронной почты"
                           v-model="email"
                           class="form-control"
                           :class="{ error: $v.email.$error }"
                           @blur="$v.email.$touch()"
                    >
                    <div v-if="$v.email.$error">
                        <p v-if="!$v.email.email" class="errorMessage">Пожалуйста, введите корректный адрес</p>
                        <p v-if="!$v.email.required" class="errorMessage">Обязательное поле</p>
                    </div>
                </div>

                <div class="form-group">
                    <input type="password"
                           placeholder="пароль"
                           v-model="password"
                           class="form-control"
                           :class="{ error: $v.password.$error }"
                           @blur="$v.password.$touch()"
                    >
                    <div v-if="$v.password.$error">
                        <p v-if="!$v.password.minLength" class="errorMessage">Слишком короткиq пароль</p>
                        <p v-if="!$v.password.required" class="errorMessage">Обязательное поле</p>
                    </div>

                </div>

                <button type="submit" :disabled="$v.$invalid || loading" class="btn btn-primary" @click="toProfile">
                    Войти
                </button>
                <p v-if="$v.$anyError" class="errorMessage">Пожалуйста, заполните все обязательные поля</p>
            </form>
        </modal>

        <router-view />
    </div>
</template>

<script>
    import { required, email, minLength } from 'vuelidate/lib/validators'
    export default {
        name: "App",
        data() {
            return {
                password: '',
                email: null,
                loading: false
            }
        },
        methods: {
            show () {
                this.$modal.show('login');
            },
            async toProfile() {
                await axios.post('api/profile', {
                    password: this.password,
                    email: this.email
                })
                .catch(error => {
                    console.log(error)
                });
                await this.$router.push('/profile');
                this.$modal.hide('login');
            }
        },
        mounted() {
            axios.interceptors.request.use(response => {
                this.loading = true;
                return response;
            });

            axios.interceptors.response.use(response => {
                this.loading = false;
                return response;
            });
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(5)
            }
        }
    }
</script>

<style scoped>
    .errorMessage {
        color: red;
    }
    .error {
        border: 1px solid red;
    }
</style>
