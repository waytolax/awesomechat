<template>
  <transition appear :name="`${message.type}-appear`">
    <p :class="['chat-message', message.type]">
      {{ message.text }}
    </p>
  </transition>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
      default: {}
    }
  }
};
</script>

<style scoped>
.chat-message {
  align-self: flex-end;
  max-width: 60%;
  padding: 12px 20px;
  margin: 5px 0;
  border-radius: 5px;
  background: #f0fff0;
  line-height: 1.4;
  box-shadow: 5px 2px 32px 0 rgba(0, 0, 0, 0.1);
}
.answer {
  align-self: flex-start;
  background: #fff;
}
.message-appear-leave-to,
.message-appear-enter {
  transform: translateX(500px);
}
.answer-appear-leave-to,
.answer-appear-enter {
  transform: translateX(-500px);
}
.message-appear-leave-active,
.message-appear-enter-active,
.answer-appear-leave-active,
.answer-appear-enter-active {
  transition: transform 0.5s;
}
</style>
