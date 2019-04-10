<template>
  <div id="app">
    <ChatWindow />
  </div>
</template>

<script>
import ChatWindow from "./components/ChatWindow";

export default {
  components: {
    ChatWindow
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 50px 5px;
  box-sizing: border-box;
  background: linear-gradient(90deg, #fd8355 0%, #f0576c 37%, #f79cbd 100%);
}
</style>
