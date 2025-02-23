<template>
  <el-container class="dashboard-container">
    <el-header>
      <h2>仪表盘</h2>
      <el-switch
        v-model="isDarkMode"
        active-text="深色模式"
        inactive-text="浅色模式"
        @change="toggleTheme"
      />
    </el-header>

    <el-main>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card>
            <div class="card-content">
              <el-icon size="50"><User /></el-icon>
              <div>
                <p>用户总数</p>
                <h3>1,254</h3>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <div class="card-content">
              <el-icon size="50"><Coin /></el-icon>
              <div>
                <p>财务收入</p>
                <h3>¥ 589,230</h3>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <div class="card-content">
              <el-icon size="50"><ChatDotSquare /></el-icon>
              <div>
                <p>AI 交互次数</p>
                <h3>32,150</h3>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "Dashboard",
  setup() {
    const isDarkMode = ref(localStorage.getItem("theme") === "dark");

    const toggleTheme = () => {
      document.body.classList.toggle("dark-mode", isDarkMode.value);
      localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
    };

    onMounted(() => {
      document.body.classList.toggle("dark-mode", isDarkMode.value);
    });

    return { isDarkMode, toggleTheme };
  },
});
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: var(--el-color-primary-light-3);
  color: white;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.dark-mode {
  background-color: #1e1e1e;
  color: #ffffff;
}

.dark-mode .el-card {
  background-color: #333;
  color: #ffffff;
}
</style>
