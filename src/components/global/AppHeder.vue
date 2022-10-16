<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark nezam2">
            <h2 class="left"><strong> Books</strong></h2>
            <div class="collapse navbar-collapse nezam" id="navbarsExample03">
                <ul class="navbar-nav">
                    <li class="nav-item navmain">
                        <router-link to="/" >
                            <b-icon icon="book" class="navmain2"></b-icon>Books
                        </router-link>
                    </li>
                    <li class="nav-item navmain">
                        <router-link to="/about" exact>
                            <b-icon icon="headphones" class="navmain3"></b-icon> AduioBooks
                        </router-link>
                    </li>
                </ul>
            </div>
            <ul class="navbar-nav rightnav">
                <li class="linavleft">
                    <b-icon icon="bookmark" class="navmain2"></b-icon>
                </li>
                <li class="linavleft">
                    <b-badge class="notif">5</b-badge><b-icon icon="bag" class="navmain2"></b-icon>
                </li>
                <li class="linavleft">
                    <b-avatar class="imgnav" src="https://placekitten.com/300/300" variant="info"></b-avatar>
                </li>
                <li class="linavleft">
                    <b-icon icon="three-dots-vertical" class="navmain2"></b-icon>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: "AppHeder",
};
</script>

<style>
@import '../../assets/css/home.css';
</style>
