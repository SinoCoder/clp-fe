<template>
  <div class="head">
    <div class="logo-container">
      <img class="logo" src="../assets/image/clp-logo.png" />
    </div>
    <div class="menu-container">
      <el-menu
        class="menu"
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1" path="/">{{ $t("navbar.index") }}</el-menu-item>
        <el-menu-item index="2" path="/problem">{{
          $t("navbar.problem")
        }}</el-menu-item>
        <el-menu-item index="3" path="/contest">{{
          $t("navbar.contest")
        }}</el-menu-item>
      </el-menu>
    </div>
    <div class="right-container">
      <el-dropdown class="theme" @command="themeChange" v-show="false">
        <span class="dropdown-link">
          {{ $t("navbar.theme") }}
          <i class="el-icon-arrow-down el-icon-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="light"
            ><i class="el-icon-sunny"></i
            >{{ $t("navbar.light") }}</el-dropdown-item
          >
          <el-dropdown-item command="dark"
            ><i class="el-icon-moon"></i
            >{{ $t("navbar.dark") }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="language" @command="localeChange">
        <span class="dropdown-link">
          {{ $t("navbar.languageSwitch") }}
          <i class="el-icon-arrow-down el-icon-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh">中文 ZH</el-dropdown-item>
          <el-dropdown-item command="en">英文 EN</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="avatar-dropdown" @command="userChange">
        <el-avatar class="avatar" size="medium" :src="avatarUrl">{{
          $t("navbar.user")
        }}</el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="login">{{
            $t("navbar.login")
          }}</el-dropdown-item>
          <el-dropdown-item command="register">{{
            $t("navbar.register")
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "",
      user: Object,
      avatarUrl: ""
    };
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key;
      this.route(key);
    },
    route(key) {
      let path;
      if (key == 1) {
        path = "/";
      } else if (key == 2) {
        path = "/problem";
      } else if (key == 3) {
        path = "/contest";
      }
      if (this.$route.path.search(path) == -1 || path == "/") {
        this.$router.push(path);
      }
    },
    localeChange(key) {
      this.$store.dispatch("setLanguage", key);
      this.$i18n.locale = key;
    },
    themeChange(key) {
      this.$store.dispatch("setTheme", key);
    },
    userChange(key) {
      if (key == "login") {
        this.$router.push("/login");
      } else if (key == "register") {
        this.$router.push("/register");
      }
    }
  },
  mounted: function() {
    this.avatarUrl = this.$store.getters.getAvatar;
    if (this.$route.path.search("/problem") != -1) {
      this.activeIndex = "2";
    } else if (this.$route.path.search("/contest") != -1) {
      this.activeIndex = "3";
    } else if (this.$route.path.search("/") != -1) {
      this.activeIndex = "1";
    }
  }
};
</script>

<style lang="scss" scoped>
.head {
  background-color: #fff;
  display: inline-flex;
  align-items: stretch;
  width: 100%;
  height: 60px;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.menu-container {
  width: 100%;
}

.language {
  width: 80px;
  text-align: center;
}

.theme {
  width: 70px;
  text-align: center;
}

.logo {
  height: 61px;
  padding: 15px 30px 15px 30px;
  background-image: "./assets/image/clp-logo.png";
}

.dropdown-link {
  cursor: pointer;
  line-height: 60px;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.right-container {
  display: inline-flex;
  align-items: center;
}
.avatar {
  margin: 12px 30px 12px 15px;
  transition: 400ms;
}
.avatar:hover {
  box-shadow: 0 0.2rem 0.27rem rgba(31, 21, 21, 0.1) !important;
}
</style>
