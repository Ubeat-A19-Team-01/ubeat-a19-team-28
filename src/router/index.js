import Vue from "vue";
import Router from "vue-router";
import Home from "../components/common/Home";
import Album from "../components/albums/Album";
import Artist from "../components/artists/Artist";
import Playlists from "../components/playlists/Playlists";
import Register from '../components/users/register';
import Login from '../components/users/login'
import Dashboard from "../components/common/Dashboard";
import UserProfile from '../components/users/UserProfile' ; 
import Search from '../components/searchs/Search'; 

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/register",
            name: "Register",
            component: Register
        },
        {
            path: "/",
            name: "Login",
            component: Login
        },
        {
            path: "/dashboard",
            component: Dashboard,
            children: [
                {
                    path: "",
                    name: "Home",
                    component: Home,
                },
                {
                    path: "/artist/:id",
                    name: "Artist",
                    component: Artist,
                    props:true
                },
                {
                    path: "/album/:id",
                    name: "Album",
                    component: Album ,
                    props:true
                },
                {
                    path: "/playlists",
                    component: Playlists,
                },
                {
                    path: "/userProfile",
                    component: UserProfile,
                },

                {
                    path: "/search/:name",
                    component: Search,
                    props:true
                }, 
                
                {
                    path: "/search/albums/:name",
                    component: Search,
                    props:true
                }, 
                {
                    path: "/search/artists/:name",
                    component: Search,
                    props:true
                },                  
                {
                    path: "/search/users/:name",
                    component: Search,
                    props:true
                }, 

                {
                    path: "/search/tracks/:name",
                    component: Search,
                    props:true
                }, 
                



            ]
        },
    ]
});