<template>
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="card col-md-4 mr-5">
                <label for="photo">Ссылка на фотографию</label>
                <input id="photo" type="text" :value="profile.photo" ref="photo">
            </div>
            <div class="card col-md-7">
                <h1 class="">Редактирование профиля:</h1>
                <hr>
                <label for="first_name">Имя</label>
                <input id="first_name" type="text" v-model="profile.first_name" ref="first_name">
                <hr>
                <label for="last_name">Фамилия</label>
                <input id="last_name" type="text" :value="profile.last_name" ref="last_name">
                <hr>
                <label for="email">Почта</label>
                <input id="email" type="text" :value="profile.email" ref="email">
                <hr>
                <p>Статус</p>
                <select ref="status">
                    <option>{{ profile.status }}</option>
                    <option v-if="profile.status !== 'Admin'">Admin</option>
                    <option v-if="profile.status !== 'User'">User</option>
                </select>
                <hr>
                <p>Страна</p>
                <select ref="country">
                    <option>{{ profile.country }}</option>
                    <option v-if="profile.country !== 'Россия'">Россия</option>
                    <option v-if="profile.country !== 'Америка'">Америка</option>
                    <option v-if="profile.country !== 'Германия'">Германия</option>
                </select>
                <hr>
                <p>Город</p>
                <select ref="city">
                    <option>{{ profile.city }}</option>
                    <option v-if="profile.city !== 'Берлин'">Берлин</option>
                    <option v-if="profile.city !== 'Вашингтон'">Вашингтон</option>
                    <option v-if="profile.city !== 'Москва'">Москва</option>
                </select>
                <hr>
            </div>
            <button type="button" class="btn btn-primary btn-lg mt-5" @click="edit">
                Сохранить изменения
            </button>
        </div>
        <modal name="success">
            <div class="d-flex flex-column align-items-center">
                <h4 class="mt-4 alert alert-success">Данные успешно изменены</h4>
                <button class="btn btn-primary btn-lg mt-5" @click="toProfile">
                    Вернуться на страницу профиля
                </button>
            </div>
        </modal>
    </div>
</template>

<script>
    export default {
        name: "Edit",
        data() {
            return {
                profile: {},
            }
        },
        methods: {
            async edit() {
                await axios.put('api/profile', {
                    first_name: this.$refs['first_name'].value,
                    last_name: this.$refs['last_name'].value,
                    photo: this.$refs['photo'].value,
                    email: this.$refs['email'].value,
                    status: this.$refs['status'].value,
                    city: this.$refs['city'].value,
                    country: this.$refs['country'].value,
                })
                .catch(error => {
                    console.log(error);
                });
                this.$modal.show('success');
            },
            toProfile() {
                this.$router.push('/profile');
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
