<template>
  <div class="home" id="home">
    <div class="flex">
      <div class="mainside">
        <div class="leftside">
          <p class="kalam">New & &nbsp; <br />&nbsp;Trending</p>
          <p class="kalamshort">
            &nbsp; &nbsp;&nbsp;&nbsp;Exploer new worlds from authors
          </p>
        </div>
        <img :src="posts[0].formats['image/jpeg']" alt="d7k" class="mainimg" />
        <p class="kalamnonno2">Author of the week</p>
        <b-card no-body class="cardmain">
          <b-card-body class="card1">
            <p class="kalamcard">steven king <br />collection</p>
            <p class="kalamnono">78 book</p>
          </b-card-body>
        </b-card>
        <b-card no-body class="cardmain2">
          <div class="card2">
            <p class="kalamcard2">False witness:A<br />noval</p>
            <p class="kalamnono">karin slaughter</p>
          </div>
        </b-card>
      </div>
      <div class="grid-container" style="margin-top: 3%; grid-template-columns: auto auto auto auto;">
        <div class="grid-item kalamcc" >
          <div class="kalamnonno3">Recent Bestseller</div>
        </div>
        <div class="grid-item">
          <div class="flex2">
            <img :src="posts[1].formats['image/jpeg']" alt="d7k" class="smallimg" />
            <div class="flex5 ">
              <div class="star">
                <b-icon icon="star-fill" class="checked"></b-icon>
                <b-icon icon="star-fill" class="checked"></b-icon>
                <b-icon icon="star-fill" class="checked"></b-icon>
                <b-icon icon="star" class="unchecked"></b-icon>
                <b-icon icon="star" class="unchecked"></b-icon>
              </div>
              <span class="kalamcard start">{{posts[1].title}}</span>
              <p v-if="posts[1].authors[0]" class="kalamnono start">{{posts[1].authors[0].name}}</p>
              <p v-else class="kalamnono start" style="color: red;">none of author</p>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <div class="flex2">
            <img :src="posts[2].formats['image/jpeg']" alt="d7k" class="smallimg" />
            <div class="flex5 ">
              <div class="star">
                <b-icon icon="star-fill" class="checked"></b-icon>
                <b-icon icon="star-fill" class="checked"></b-icon>
                <b-icon icon="star-fill" class="checked"></b-icon>
                <b-icon icon="star" class="unchecked"></b-icon>
                <b-icon icon="star" class="unchecked"></b-icon>
              </div>
              <span class="kalamcard start">{{posts[2].title}}</span>
              <p v-if="posts[2].authors[0]" class="kalamnono start">{{posts[2].authors[0].name}}</p>
              <p v-else class="kalamnono start" style="color: red;">none of author</p>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <div class="flex2">
            <img :src="posts[3].formats['image/jpeg']" alt="d7k" class="smallimg" />
            <div class="flex5 ">
              <div class="star">
                <b-icon icon="star-fill" class="checked"></b-icon>
                <b-icon icon="star-fill" class="checked"></b-icon>
                <b-icon icon="star-fill" class="checked"></b-icon>
                <b-icon icon="star" class="unchecked"></b-icon>
                <b-icon icon="star" class="unchecked"></b-icon>
              </div>
              <span class="kalamcard start">{{posts[3].title}}</span>
              <p v-if="posts[3].authors[0]" class="kalamnono start">{{posts[3].authors[0].name}}</p>
              <p v-else class="kalamnono start" style="color: red;">none of author</p>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-sm navbar-dark nezam2">
        <div class="collapse navbar-collapse nezam" id="navbarsExample03" style="margin-left: 0px">
          <ul class="navbar-nav">
            <li class="nav-item navmain">
              <router-link to="/BlogPosts">
                <b-icon icon="arrow-down" class="navmain2"></b-icon>View More
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script></script>
<script>
import axios from "axios";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      posts: [],
      errors: [],
    };
  },

  // Fetches posts when the component is created.
  created() {
    axios
      .get(`https://gutendex.com/books/?page=1`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.posts = response.data.results;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
<style>
@import "../assets/css/home.css";
</style>
