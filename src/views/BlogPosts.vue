<template>
    <div>
        <div class="grid-container">
            <div class="grid-item" v-for="post in posts" :key="post.id" id="my-table" :per-page="perPage"
                :current-page="currentPage">
                <router-link :to="'/SinglePage/'+post.id">
                    <div class="flex2">
                        <img :src="post.formats['image/jpeg']" alt="img not found" class="smallimg" id="my-table2" />
                        <div class="flex5 ">
                            <div class="star">
                                <b-icon icon="star-fill" class="checked"></b-icon>
                                <b-icon icon="star-fill" class="checked"></b-icon>
                                <b-icon icon="star-fill" class="checked"></b-icon>
                                <b-icon icon="star" class="unchecked"></b-icon>
                                <b-icon icon="star" class="unchecked"></b-icon>
                            </div>
                            <span class="kalamcard start">{{post.title}}</span>
                            <p v-if="post.authors[0]" class="kalamnono start">{{post.authors[0].name}}</p>
                            <p v-else class="kalamnono start" style="color: red;">none of author</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="mt-3" @click="navAction">
            <b-pagination v-model="currentPage" align="center" :total-rows="rows" :per-page="perPage"
                aria-controls="my-table">
            </b-pagination>
            The currentPage is {{currentPage}}
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "BlogPosts",

    data() {
        return {
            posts: [],
            errors: [],
            server: [],
            currentPage: 1,
            perPage: 32,
            rows: 0,
            id1: 0,
        };
    },
    methods: {
        getUsers(page) {
            return new Promise((resolve) => {
                axios.get('https://gutendex.com/books/?page=' + page)
                    .then((response) => {
                        resolve(response.data);
                    })
            })
        },
        navAction: function () {

            //window.location.reload(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.getUsers(this.currentPage).then((data1) => {
                this.posts = data1.results;
            });
        },
    },


    // Fetches posts when the component is created.
    created() {
        this.getUsers(1).then((data) => {
            this.rows = data.count;
            this.posts = data.results;
        });
    },


    // Fetches posts when the component is created.
}
</script>

<style>
@import "../assets/css/home.css";
</style>
<style lang="scss">
.grid-item {
    a {
        color: black;
        text-decoration: none;

        &:hover {
            color: black;
        }
    }
}
</style>
