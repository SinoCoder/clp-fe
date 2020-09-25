<template>
  <clp-container>
    <clp-container class="container">
      <el-page-header
        class="page-header"
        @back="goBack"
        :title="$t('navbar.back')"
        :content="$t('navbar.login')"
      ></el-page-header>
      <el-form
        class="login-form"
        ref="login-form"
        :model="form"
        label-width="100px"
        :rules="rules"
      >
        <el-form-item :label="$t('login.username')" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
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
            $t("login.submit")
          }}</el-button>
          <el-button @click="resetForm()">{{ $t("login.reset") }}</el-button>
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
        captcha: ""
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
      this.$refs["login-form"].validate(valid => {
        if (valid) {
          request({
            method: "post",
            url: "/login",
            params: {
              username: this.form.username,
              password: this.form.password,
              captcha: this.form.captcha
            }
          }).then(() => {
            {
              this.$notify.success({
                title: this.$t("login.success"),
                showClose: false
              });
              this.$router.push("/");
            }
          });
        }
      });
    },
    resetForm: function() {
      this.$refs["login-form"].resetFields();
    }
  }
};
</script>

<style scoped>
.login-container {
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

.login-form {
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
