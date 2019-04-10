<template>
  <form class="chat-form" @submit.prevent="sendMessage">
    <input
      class="chat-input"
      type="text"
      v-model="message"
      placeholder="Введите вопрос"
      minlength="1"
      autofocus
    />
    <button
      v-if="!sending"
      class="send-button"
      type="submit"
      :disabled="!message"
    />
    <Loader v-if="sending" />
  </form>
</template>

<script>
import Loader from "./UI/Loader";

export default {
  data() {
    return {
      message: "",
      sending: false
    };
  },
  components: {
    Loader
  },
  methods: {
    sendMessage() {
      this.sending = true;
      setTimeout(() => {
        this.$store.dispatch("sendMessage", this.message);
        this.message = "";
        this.sending = false;
      }, 1000);
    }
  }
};
</script>

<style scoped>
.chat-form {
  display: flex;
  align-items: center;
  margin: 0 20px 10px 20px;
}
.chat-input {
  height: 30px;
  width: 100%;
  padding: 7px 15px;
  border: none;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 2px 2px 32px 0 rgba(0, 0, 0, 0.08);
}
.chat-input::placeholder {
  color: rgba(31, 33, 38, 0.5);
}
.send-button {
  width: 45px;
  height: 45px;
  margin-left: 10px;
  border: none;
  border-radius: 100%;
  background-color: rgba(252, 131, 85, 0.1);
  background-image: url("~@/assets/send.svg");
  background-repeat: no-repeat;
  background-position: 45% 55%;
  background-size: 25px;
  cursor: pointer;
}
.send-button:disabled {
  opacity: 0.6;
  cursor: no-drop;
}
</style>
