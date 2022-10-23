<template >
    <div id="single" class="home">
        <div class="flexSingle">
            <img :src="post.formats['image/jpeg']" alt="img not found" class="imgsingle">
            <div class="flex5single">
                <span class="kalamcardsingle start">{{post.title}}</span>
                <p v-if="post.authors[0]" class="kalamnonosingle start"><strong>Author : </strong>
                    {{post.authors[0].name}} <span
                        v-if="post.authors[0].birth_year &&post.authors[0].death_year">(<em>{{post.authors[0].birth_year}}
                            To {{post.authors[0].death_year}}</em>)</span>
                </p>
                <p v-else class="kalamnonosingle start" style="color: red;">none of author</p>
                <p  class="kalamnonosingle start" v-for="lang in post.languages" :key="lang.index">Languages : <span style="text-transform:uppercase" >{{lang}}</span></p>
            <button class="btnsingle">Buy now</button>
            </div>
        </div>
    </div>
</template>
<script>

import axios from "axios";
export default {
    name: "SinglePage",
    data() {
        return {
            id: '',
            post: '',
        }
    },
    created() {
        this.id = this.$route.params.id;
        axios
            .get(`https://gutendex.com/books/` + this.id)
            .then((response) => {
                // JSON responses are automatically parsed.
                this.post = response.data;
            })
            .catch((e) => {
                this.errors.push(e);
            });
    }
}
</script>
<style>

@import "../assets/css/home.css";

