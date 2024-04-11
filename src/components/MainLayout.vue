<template>
  <el-container>
    <el-header>
      <el-icon color="#ffffff" size="35">
        <home-filled />
      </el-icon>
      <div class="header-title">IBUN 管理系统</div>
      <div class="header-avatar">
        <el-popover>
          <template #reference>
            <div>
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              <div class="header-username">ibun.song</div>
            </div>
          </template>
          <div>
            <router-link to="/self-center">
              <el-icon size="18" class="header-avatar-icon">
                <User />
              </el-icon>
              <span>个人中心</span>
            </router-link>
            <el-divider />
            <router-link to="/login">
              <el-icon size="18" class="header-avatar-icon">
                <SwitchButton />
              </el-icon>
              <span>退出登录</span>
            </router-link>
          </div>
        </el-popover>
      </div>
    </el-header>

    <el-container>
      <el-aside>
        <el-menu
          class="el-menu-vertical-demo"
          :default-active="activeIndex"
          :collapse="menuStatus"
        >
          <div :style="menuStatus ? 'margin-left:-15px;' : 'text-align: right'">
            <el-button
              @click="changeMenuStatus"
              v-show="!menuStatus"
              color="transparent"
            >
              <el-icon color="#e6a23c" size="30">
                <Fold />
              </el-icon>
            </el-button>
            <el-button
              @click="changeMenuStatus"
              v-show="menuStatus"
              color="transparent"
            >
              <el-icon color="#e6a23c" size="30">
                <Expand />
              </el-icon>
            </el-button>
          </div>
          <el-sub-menu index="1">
            <template #title>
              <el-icon :size="30">
                <location />
              </el-icon>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template #title>分组一</template>
              <el-menu-item index="1-1">
                <router-link to="/">Home</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/about">About</router-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组二">
              <el-menu-item index="1-3">
                <el-icon :size="20">
                  <edit />
                </el-icon>
                <span><router-link to="/test">测试页</router-link></span>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon :size="30"> <folder /> </el-icon>
              <span>导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link to="/">Home</router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="/about">About</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-menu-item index="3">
            <el-icon :size="30">
              <document />
            </el-icon>
            <template #title>导航三</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon :size="30">
              <User />
            </el-icon>
            <template #title>
              <router-link to="/self-center">个人中心</router-link>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main :class="menuStatus ? 'el-main-menu-off' : 'el-main-menu-on'">
        <router-view></router-view>
      </el-main>
    </el-container>

    <el-container>
      <el-drawer v-model="drawerStatus" direction="rtl">
        <template #header>
          <h4>系统设置</h4>
        </template>
        <template #default>
          <div>body</div>
        </template>
        <template #footer>
          <div style="flex: auto">
            <el-button @click="changeDrawerStatus">cancel</el-button>
            <el-button type="primary" @click="confirmClick" color="#002e58"
              >confirm</el-button
            >
          </div>
        </template>
      </el-drawer>
      <el-footer>
        <el-button
          type="info"
          class="el-menu-item-setting"
          @click="changeDrawerStatus"
        >
          <el-icon :size="30">
            <tools />
          </el-icon>
        </el-button>
        <div>©IBUN Solution Innovators, Ltd 2024</div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElMessageBox } from "element-plus";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      menuStatus: false,
      activeIndex: "1-3",
      drawerStatus: false,
    };
  },
  methods: {
    addCustomStyles() {
      const style = document.createElement("style");
      style.textContent = `
      /* 去掉侧边导航栏折叠后悬浮窗边框 */
      ul.el-menu.el-menu--popup.el-menu--popup-right-start {
        padding: 0;
      }
      .el-popper.is-light,
      .el-popper.is-dark {
        border: 0;
        background: #002e58;
      }
      .el-popper.is-light .el-popper__arrow:before,
      .el-popper.is-dark .el-popper__arrow:before {
        background: #002e58 !important;
        border: 1px solid #002e58 !important;
      } {
        background: #002e58 !important;
        border: 1px solid #002e58 !important;
      }
      
      /* 确认按钮背景颜色 */
      .el-button+.el-button{
        background-color: #002e58;
      }`;
      document.head.appendChild(style);
    },
    changeMenuStatus() {
      this.menuStatus = !this.menuStatus;
    },
    changeDrawerStatus() {
      this.drawerStatus = !this.drawerStatus;
    },
    confirmClick() {
      ElMessageBox.confirm(`Are you confirm to close ?`)
        .then(() => {
          this.drawerStatus = !this.drawerStatus;
        })
        .catch(() => {
          // catch error
        });
    },
  },
  mounted() {
    this.addCustomStyles();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body a {
  text-decoration: none;
  color: #ffffff;
}

.el-header {
  height: 50px;
  background-color: #002e58;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 0;
}

.el-header .el-icon {
  margin-top: 5px;
  margin-left: 15px;
}

.header-title {
  width: 200px;
  height: 40px;
  margin-top: -40px;
  margin-left: 60px;
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
}

.header-avatar {
  width: 140px;
  height: 45px;
  position: fixed;
  right: 8px;
  margin-top: -42px;
  color: #002e58;
}

.header-avatar:hover {
  opacity: 0.7;
}

.header-avatar-icon {
  top: 2px;
  left: 18px;
}

.header-avatar-icon ~ span {
  margin-left: 25px;
}

.header-username {
  height: 30px;
  width: 100px;
  text-align: left;
  margin-top: -35px;
  margin-left: 50px;
  color: #ffffff;
}

.el-divider--horizontal {
  margin: 5px 0 !important;
}

.el-aside {
  text-align: center;
  width: auto;
  position: fixed;
  top: 50px;
  background: #002e58;
}

.el-aside .el-button:hover {
  background-color: #002e58;
}

.el-aside .el-button:hover svg {
  color: #ffffff;
}

.el-drawer h4 {
  text-align: center;
}

.el-menu {
  min-height: 100vh;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
  background: #002e58;
}

.el-menu,
.el-sub-menu,
.el-sub-menu *,
.el-menu-item-group,
.el-menu-item {
  background-color: #002e58;
  color: #ffffff !important;
}

:deep(.el-sub-menu__title .el-icon svg) {
  color: #ffffff;
}

:deep(.el-sub-menu__title:hover),
:deep(.el-menu-item:hover) {
  background-color: #002e58;
  color: #ffffff;
}

// 菜单悬浮窗路由链接颜色
.el-menu.el-menu--popup.el-menu--popup-right-start a {
  color: #ffffff !important;
}

:deep(.el-menu--popup) {
  border: none;
  border-radius: var(--el-border-radius-small);
  box-shadow: var(--el-box-shadow-light);
  min-width: 200px;
  padding: 0;
  z-index: 100;
}

.el-menu-item-setting {
  margin-top: 10px;
  margin-left: -20px;
  color: #e6a23c;
  background-color: #002e58;
  border: 0;
}

.el-menu-item-setting:hover {
  background-color: #002e58;
}

.el-main {
  padding: 0;
  position: absolute;
  top: 50px;
  height: calc(100% - 100px);
}

.el-main-menu-on {
  left: 199px;
  width: calc(100% - 199px);
  transition: all 0.42s ease; // 过渡时间，采用 ease 缓动函数
}

.el-main-menu-off {
  left: 63px;
  width: calc(100% - 63px);
  transition: all 0.44s ease; // 过渡时间，采用 ease 缓动函数
}

.el-footer {
  background-color: #002e58;
  color: var(--el-text-color-primary);
  height: 50px;
  position: fixed;
  width: 100%;
  bottom: 0;
}

.el-footer div {
  display: inline-block;
  color: #ffffff;
  position: fixed;
  margin-top: 15px;
  right: 30px;
}
</style>
