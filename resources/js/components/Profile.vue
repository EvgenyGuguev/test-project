<template>
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="card col-md-4 mr-5">
                <img :src="photo" style="width: 22rem">
            </div>
            <div class="card col-md-7">
                <h1 class="">Информация о профиле:</h1>
                <hr>
                <h4><b>Имя:</b> {{ profile.first_name }}</h4>
                <hr>
                <h4>Фамилия: {{ profile.last_name }}</h4>
                <hr>
                <h4>Адрес электронной почты: {{ profile.email }}</h4>
                <hr>
                <h4>Статус в системе: {{ profile.status }}</h4>
                <hr>
                <h4>Страна: {{ profile.country }}</h4>
                <hr>
                <h4>Город: {{ profile.city }}</h4>
                <hr>
            </div>
            <button type="button" class="btn btn-primary btn-lg mt-5" @click="toEdit">
                Внести изменения в профиль
            </button>
        </div>
        <h4 v-if="!profile.photo" class="text-center mt-4 alert alert-info">
            Внесите недостающие данные в свой профиль
        </h4>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        data() {
            return {
                profile: {},
            }
        },
        methods: {
            toEdit() {
                this.$router.push('/edit');
            }
        },
        computed: {
            photo() {
                return this.profile.photo
            }
        },
        async mounted() {
            await axios.get('api/profile')
                .then(res => {
                    this.profile = res.data;
                })
        }
    }
</script>

<style scoped>

</style>
