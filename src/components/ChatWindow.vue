<template>
  <div class="chat-window">
    <div class="messages no-scrollbar">
      <ChatMessage
        v-for="message of messages"
        :key="message.id"
        :message="message"
      />
    </div>
    <ChatForm />
  </div>
</template>

<script>
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";

export default {
  computed: {
    messages() {
      return this.$store.getters.getMessages;
    }
  },
  components: {
    ChatForm,
    ChatMessage
  }
};
</script>

<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: 600px;
  height: 80vh;
  box-sizing: border-box;
  background: linear-gradient(
    to left,
    rgb(255, 255, 255) 0%,
    rgb(238, 238, 238) 49%,
    rgb(237, 237, 237) 100%
  );
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}
.messages {
  display: flex;
  flex-direction: column-reverse;
  padding: 20px;
  margin: 10px 0;
  overflow: auto;
}
.no-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.no-scrollbar::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
</style>
