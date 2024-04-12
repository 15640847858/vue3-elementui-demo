<template>
  <el-row justify="center">
    <div class="login-title">@IBUN</div>
  </el-row>
  <el-row justify="center" class="el-row-margin-120">
    <el-input
      v-model="userName"
      color="#002e58"
      placeholder="UserName"
      prefix-icon="User"
    />
  </el-row>

  <el-row justify="center" class="el-row-margin-30">
    <el-input
      v-model="passWord"
      type="password"
      placeholder="Password"
      prefix-icon="Lock"
      show-password
    />
  </el-row>

  <el-row justify="center" class="el-row-margin-50">
    <el-button round @click="btnSubmit">提交</el-button>
  </el-row>
  <el-row justify="center" class="el-row-margin-30">
    <el-button round @click="btnCancel">取消</el-button>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  data() {
    return {
      userName: "" as string,
      passWord: "" as string,
    };
  },
  methods: {
    btnSubmit(): void {
      this.$router.push("/");
    },
    btnCancel(): void {
      this.userName = "";
      this.passWord = "";
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

.el-row-margin-20 {
  margin-top: 10px;
}

.el-row-margin-30 {
  margin-top: 30px;
}

.el-row-margin-50 {
  margin-top: 50px;
}

.el-row-margin-120 {
  margin-top: 120px;
}

.el-input {
  width: 480px;
  height: 60px;
}

:deep(.el-input__wrapper),
:deep(.el-input__wrapper.isfocus),
:deep(.el-input__wrapper:hover) {
  box-shadow: 0 0 0 1.5px #002e58;
  --el-input-focus-border-color: #002e58;
}

:deep(.el-input__inner) {
  font-size: 25px;
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
</style>
