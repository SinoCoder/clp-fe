<template>
  <clp-container>
    <clp-container class="container">
      <el-page-header
        class="page-header"
        @back="goBack"
        :content="$t('navbar.register')"
      ></el-page-header>
      <el-form
        class="register-form"
        ref="register-form"
        :model="form"
        label-width="100px"
        :rules="rules"
      >
        <el-form-item :label="$t('register.username')" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.password')" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.repassword')" prop="repassword">
          <el-input type="password" v-model="form.repassword"></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.email')" prop="email">
          <el-input type="email" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('login.captcha')"
          prop="captcha"
          class="captcha-form"
        >
          <el-input v-model="form.captcha"></el-input>
          <img
            src="http://localhost:10086/captcha"
            alt="CAPTCHA"
            class="captcha"
            onclick="this.src=this.src+'?'"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">{{
            $t("register.submit")
          }}</el-button>
          <el-button @click="resetForm()">{{ $t("register.reset") }}</el-button>
        </el-form-item>
      </el-form>
    </clp-container>
  </clp-container>
</template>

<script>
import request from "../util/request";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        email: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 4,
            max: 32,
            message: "长度在 4 到 32 字符之间",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 4,
            max: 32,
            message: "长度在 4 到 32 字符之间",
            trigger: "blur"
          }
        ],
        repassword: [
          { required: true, message: "请再次输入密码以确认", trigger: "blur" },
          {
            min: 4,
            max: 32,
            message: "长度在 4 到 32 字符之间",
            trigger: "blur"
          }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            min: 5,
            max: 40,
            message: "长度在 5 到 40 字符之间",
            trigger: "blur"
          }
        ],
        captcha: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          {
            min: 4,
            max: 4,
            message: "验证码长度4位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    submitForm: function() {
      this.$refs["register-form"].validate(valid => {
        if (valid) {
          request({
            method: "post",
            url: "/user",
            params: {
              username: this.form.username,
              password: this.form.password,
              email: this.form.email,
              captcha: this.form.captcha
            }
          }).then(() => {
            {
              this.$notify.success({
                title: this.$t("register.success"),
                showClose: false
              });
              this.$router.push("/login");
            }
          });
        }
      });
    },
    resetForm: function() {
      this.$refs["register-form"].resetFields();
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 40px;
  box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.075) !important;
  background-color: rgb(255, 255, 255);
}

.page-header {
  padding: 20px 40px 25px 40px;
}

.register-form {
  padding: 10px 40px 20px 40px;
  width: 400px;
}

.el-form-item {
  margin-bottom: 30px;
}

.captcha {
  width: 90px;
  height: 36px;
  border-radius: 5px;
  margin: 10px 0 0 0;
}
</style>
