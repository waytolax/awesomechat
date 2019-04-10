<template>
  <div id="floatingCirclesG">
    <div class="f_circleG" id="frotateG_01"></div>
    <div class="f_circleG" id="frotateG_02"></div>
    <div class="f_circleG" id="frotateG_03"></div>
    <div class="f_circleG" id="frotateG_04"></div>
    <div class="f_circleG" id="frotateG_05"></div>
    <div class="f_circleG" id="frotateG_06"></div>
    <div class="f_circleG" id="frotateG_07"></div>
    <div class="f_circleG" id="frotateG_08"></div>
  </div>
</template>

<style scoped>
#floatingCirclesG {
  position: relative;
  width: 45px;
  height: 45px;
  margin-left: 10px;
  transform: scale(0.6);
}

.f_circleG {
  position: absolute;
  background-color: rgb(255, 255, 255);
  height: 8px;
  width: 8px;
  border-radius: 4px;
  animation-name: f_fadeG;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-direction: normal;
}

#frotateG_01 {
  left: 0;
  top: 18px;
  animation-delay: 0.45s;
}

#frotateG_02 {
  left: 5px;
  top: 5px;
  animation-delay: 0.6s;
}

#frotateG_03 {
  left: 18px;
  top: 0;
  animation-delay: 0.75s;
}

#frotateG_04 {
  right: 5px;
  top: 5px;
  animation-delay: 0.9s;
}

#frotateG_05 {
  right: 0;
  top: 18px;
  animation-delay: 1.05s;
}

#frotateG_06 {
  right: 5px;
  bottom: 5px;
  animation-delay: 1.2s;
}

#frotateG_07 {
  left: 18px;
  bottom: 0;
  animation-delay: 1.35s;
}

#frotateG_08 {
  left: 5px;
  bottom: 5px;
  animation-delay: 1.5s;
}

@keyframes f_fadeG {
  0% {
    background-color: #fd8355;
  }

  100% {
    background-color: rgb(255, 255, 255);
  }
}

@-o-keyframes f_fadeG {
  0% {
    background-color: #fd8355;
  }

  100% {
    background-color: rgb(255, 255, 255);
  }
}

@-ms-keyframes f_fadeG {
  0% {
    background-color: #fd8355;
  }

  100% {
    background-color: rgb(255, 255, 255);
  }
}

@-webkit-keyframes f_fadeG {
  0% {
    background-color: #fd8355;
  }

  100% {
    background-color: rgb(255, 255, 255);
  }
}

@-moz-keyframes f_fadeG {
  0% {
    background-color: #fd8355;
  }

  100% {
    background-color: rgb(255, 255, 255);
  }
}
</style>
