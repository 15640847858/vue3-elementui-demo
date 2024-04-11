<template>
  <div class="test-page">
    <h1>个人中心</h1>

    <hr />

    <el-tabs tab-position="left" class="demo-tabs">
      <el-tab-pane label="基本设置">User</el-tab-pane>
      <el-tab-pane label="安全设置">Config</el-tab-pane>
      <el-tab-pane label="个性化">Role</el-tab-pane>
      <el-tab-pane label="账号绑定">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
export default {
  name: "TestView",
};
</script>

<style scoped>
.test-page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f0f2f5;
}

.test-page h1 {
  font-size: 30px;
  padding-left: 5%;
}

.test-page hr {
  border-color: rgb(0, 255, 255);
}

.demo-tabs {
  background: rgb(255, 255, 255);
  width: 85%;
  margin-top: 2%;
  margin-left: 5%;
  height: 660px;
  border-radius: 20px; /* 添加圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}
</style>
