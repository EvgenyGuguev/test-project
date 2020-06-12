<template>
    <div class="container mt-3">
        <div class="row justify-content-center">
            <h1>Laravel + Vue Fullstack Application</h1>
            <div class="col-md-10 mt-2">
                <div class="card">
                    <carousel :perPage="1" :navigationEnabled="true" autoplay :autoplayTimeout="5000">
                        <slide>
                            <img src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=918">
                        </slide>
                        <slide>
                            <img src="https://images.pexels.com/photos/40896/larch-conifer-cone-branch-tree-40896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=918">
                        </slide>
                        <slide>
                            <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=918">
                        </slide>
                        <slide>
                            <img src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=918">
                        </slide>
                        <slide>
                            <img src="https://images.pexels.com/photos/40896/larch-conifer-cone-branch-tree-40896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=918">
                        </slide>
                        <slide>
                            <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=918">
                        </slide>

                    </carousel>
                    <div class="card-body">
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis cupiditate debitis, dicta distinctio dolores eius eligendi error expedita quaerat quam quasi quis reiciendis, vitae voluptatum. Facere, quo, tempora. Velit.</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        components: {
            Carousel,
            Slide
        }
    }
</script>
