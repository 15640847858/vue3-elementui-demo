<template>
  <el-row justify="center">
    <div class="login-title">IBUN</div>
    <div>企业级后台管理系统</div>
  </el-row>

  <el-tabs v-model="activeTab" @tab-click="changeTabs">
    <el-tab-pane label="登录" name="login" id="loginForm">
      <el-row justify="center" class="el-row-margin-60">
        <el-input
          v-model="userName"
          color="#002e58"
          placeholder="请输入用户名"
          prefix-icon="User"
        />
      </el-row>

      <el-row justify="center" class="el-row-margin-30">
        <el-input
          v-model="passWord"
          type="password"
          placeholder="请输入密码"
          prefix-icon="Lock"
          show-password
        />
      </el-row>

      <el-row justify="center" class="el-row-margin-20">
        <a href="#" @click="forgetPsd">忘记密码？</a>
      </el-row>

      <el-row justify="center" class="el-row-margin-50">
        <el-button round @click="btnSubmit">登录</el-button>
      </el-row>
      <el-row justify="center" class="el-row-margin-30">
        <el-button round @click="btnCancel">清空</el-button>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="注册" name="regist" id="registForm">
      <el-row justify="center" class="el-row-margin-60">
        <label>用&nbsp户&nbsp名 ：</label>

        <el-input
          v-model="userName"
          color="#002e58"
          placeholder="请输入用户名"
          prefix-icon="User"
        />
      </el-row>

      <el-row justify="center" class="el-row-margin-30">
        <label>密 &nbsp&nbsp&nbsp&nbsp 码：</label>
        <el-input
          v-model="passWord"
          type="password"
          placeholder="请输入密码"
          prefix-icon="Lock"
          show-password
        />
      </el-row>

      <el-row justify="center" class="el-row-margin-30">
        <label>密码确认：</label>
        <el-input
          v-model="passWord"
          type="password"
          placeholder="确认密码"
          prefix-icon="Lock"
          show-password
        />
      </el-row>

      <el-row justify="center" class="el-row-margin-30">
        <label>手机号码：</label>
        <el-input
          v-model="phoneNumber"
          type="password"
          placeholder="请输入手机号"
          prefix-icon="iphone"
        />
      </el-row>

      <el-row justify="center" class="el-row-margin-50">
        <el-button round @click="btnSubmit">注册</el-button>
      </el-row>
      <el-row justify="center" class="el-row-margin-30">
        <el-button round @click="btnCancel">取消</el-button>
      </el-row>
    </el-tab-pane>
  </el-tabs>

  <el-footer>
    <div>©IBUN Solution Innovators, Ltd 2024</div>
    <a href="https://ibun.top/login">ibun.top</a>
  </el-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "LoginView",
  data() {
    return {
      activeTab: "login" as string,
      userName: "" as string,
      passWord: "" as string,
      phoneNumber: "" as string,
    };
  },
  methods: {
    changeTabs(): void {},
    forgetPsd(): void {
      ElMessage({
        dangerouslyUseHTMLString: true,
        type: "error",
        message: "<strong><i>找回不了！！！</i></strong>",
      });
    },
    btnSubmit(): void {
      this.$router.push("/");
    },
    btnCancel(): void {
      this.userName = "";
      this.passWord = "";
      this.phoneNumber = "";
    },
  },
});
</script>

<style scoped>
.login-title {
  width: 100%;
  color: #002e58;
  text-align: center;
  margin-top: 100px;
  font-size: 70px;
}

.el-tabs {
  text-align: center;
  margin-top: 30px;
  margin-left: 35%;
  width: 30%;
}

:deep(.el-tabs__header) {
  margin: 0 !important;
}

:deep(div.el-tabs__nav.is-top) {
  color: #002e58;
}

.el-tabs .el-tab-pane label {
  margin-top: 10px;
  margin-right: 15px;
}

.el-input {
  width: 380px;
  height: 40px;
}

div.el-row-margin-20 a {
  margin-left: 300px;
}

:deep(.el-input__inner) {
  font-size: 20px;
}

@media (max-width: 768px) {
  .login-title {
    margin-top: 0;
  }

  .el-tabs {
    text-align: left;
    margin-left: 15%;
    width: 70%;
  }

  .el-tabs .el-tab-pane label {
    display: block;
    width: 100%;
    margin-left: 10px;
    margin-bottom: 3px;
    background-color: #ebf1ff;
  }

  #registForm .el-row-margin-50,
  #registForm .el-row-margin-60 {
    margin-top: 20px !important;
  }

  #registForm .el-row-margin-30 {
    margin-top: 10px !important;
  }

  .el-input {
    width: 480px;
    height: 40px;
    border-bottom: 3px solid #002e58 !important; /* 下划线样式 */
  }

  :deep(.el-input__wrapper),
  :deep(.el-input__wrapper.isfocus),
  :deep(.el-input__wrapper:hover) {
    box-shadow: 0 0 0 1.5px #ffffff !important;
    --el-input-focus-border-color: #ffffff !important;
  }

  :deep(.el-input__inner) {
    font-size: 15px;
    margin-top: 6px;
  }

  div.el-row-margin-20 a {
    margin-top: 5px;
    margin-left: 60%;
  }
}

/* :deep(.el-tabs__content) {
  background-color: chartreuse !important;
} */

.el-row-margin-20 {
  margin-top: 10px;
}

.el-row-margin-30 {
  margin-top: 30px;
}

.el-row-margin-50 {
  margin-top: 50px;
}

.el-row-margin-60 {
  margin-top: 60px;
}

:deep(.el-input__wrapper),
:deep(.el-input__wrapper.isfocus),
:deep(.el-input__wrapper:hover) {
  box-shadow: 0 0 0 1.5px #002e58;
  --el-input-focus-border-color: #002e58;
}

:deep(.el-icon) {
  color: #002e58;
  height: 2em;
  width: 2em;
}

:deep(.el-icon svg) {
  height: 2em;
  width: 2em;
}

.el-button {
  width: 260px;
  height: 40px;
  background: #002e58;
  color: #ffffff;
  font-weight: 600;
}

.el-button:hover {
  background: #002e58;
  color: #ffffff;
  font-weight: 600;
  opacity: 0.6;
}

.el-footer {
  position: fixed;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

.el-footer a {
  text-decoration: none;
}
</style>
