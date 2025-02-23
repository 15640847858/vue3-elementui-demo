<template>
  <div class="chat-container">
    <div class="chat-box" ref="chatBox">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="message.sender"
      >
        <span v-if="message.loading">思考中...</span>
        <span v-else>{{ message.text }}</span>
      </div>
    </div>
    <div class="input-box">
      <input
        v-model="userInput"
        @keyup.enter="sendMessage"
        placeholder="请输入您的问题..."
      />
      <button @click="sendMessage" :disabled="loading">发送</button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";

const userInput = ref("");
const messages = ref([
  { text: "你好！我是AI助手，请问有什么问题？", sender: "ai" },
]);
const chatBox = ref(null);
const loading = ref(false);

const sendMessage = async () => {
  if (userInput.value.trim() === "" || loading.value) return;

  // 用户消息
  messages.value.push({ text: userInput.value, sender: "user" });
  const userMessage = userInput.value;
  userInput.value = "";
  loading.value = true;

  // 显示 "思考中..."
  const loadingMessage = { text: "", sender: "ai", loading: true };
  messages.value.push(loadingMessage);

  // 确保最新消息可见
  await nextTick();
  chatBox.value.scrollTop = chatBox.value.scrollHeight;

  // 模拟 AI 回复（可以改成调用真实的 AI API）
  setTimeout(async () => {
    loadingMessage.loading = false;
    loadingMessage.text = "这是AI的回答：" + userMessage; // 这里可以替换成 AI API 响应
    loading.value = false;

    await nextTick();
    chatBox.value.scrollTop = chatBox.value.scrollHeight;
  }, 1000);
};
</script>

<style scoped>
.chat-container {
  width: 98.5%;
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 10px;
}

.chat-box {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  border-radius: 5px;
  background: white;
  display: flex;
  flex-direction: column;
}

.input-box {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: #fff;
  border-top: 1px solid #ddd;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 8px 12px;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background: #aaa;
  cursor: not-allowed;
}

button:hover {
  background: #0056b3;
}

.ai {
  text-align: left;
  background: #e1f5fe;
  padding: 8px;
  margin: 5px 0;
  border-radius: 5px;
}

.user {
  text-align: right;
  background: #c8e6c9;
  padding: 8px;
  margin: 5px 0;
  border-radius: 5px;
}
</style>
