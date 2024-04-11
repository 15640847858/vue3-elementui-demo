<template>
  <div class="test-page">
    <h1>Test</h1>
    <div class="test-box">
      <el-popover
        placement="top-end"
        trigger="hover"
        content="更改个人信息"
        :width="200"
      >
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <a
          href="https://preview.pro.antdv.com/dashboard/workplace"
          slot="reference"
        ></a>
      </el-popover>

      <el-popover
        placement="top-start"
        title="Title"
        :width="200"
        trigger="hover"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button class="m-2">Hover to activate</el-button>
        </template>
      </el-popover>
    </div>
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
}

.test-box {
  background-color: aqua;
  width: 200px;
  height: 200px;
}
</style>
