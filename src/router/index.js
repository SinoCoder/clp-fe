import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Head from "../layouts/Head";
import Foot from "../layouts/Foot";

Vue.use(VueRouter);
NProgress.configure({ showSpinner: false });

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      head: Head,
      default: () => import("../layouts/Home"),
      foot: Foot
    }
  },
  {
    path: "/problem",
    name: "Problem",
    components: {
      head: Head,
      default: () => import("../layouts/Problem"),
      foot: Foot
    },
    redirect: "/problem/home",
    children: [
      {
        path: "home",
        name: "ProblemHome",
        component: () => import("../layouts/ProblemHome")
      },
      {
        path: "detail/:id",
        name: "ProblemDetail",
        component: () => import("../layouts/ProblemDetail")
      }
    ]
  },
  {
    path: "/contest",
    name: "Contest",
    components: {
      head: Head,
      default: () => import("../layouts/Contest"),
      foot: Foot
    },
    redirect: "/contest/home",
    children: [
      {
        path: "home",
        name: "ContestHome",
        component: () => import("../layouts/ContestHome")
      },
      {
        path: "detail/:id",
        name: "ContestDetail",
        component: () => import("../layouts/ContestDetail")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    components: {
      head: Head,
      default: () => import("../layouts/Login"),
      foot: Foot
    }
  },
  {
    path: "/register",
    name: "Register",
    components: {
      head: Head,
      default: () => import("../layouts/Register"),
      foot: Foot
    }
  },
  {
    path: "/about",
    name: "About",
    components: {
      head: Head,
      default: () => import("../layouts/About"),
      foot: Foot
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path != from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
