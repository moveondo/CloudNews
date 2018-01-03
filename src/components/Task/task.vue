<template lang="html">
  <div class="task" id="task" >
      <canvas id="canvas" width="60" height="60" @click="change"></canvas>
      <img class="task-img" src="../../pic/timg.jpg" alt="">
  </div>
</template>

<script>
export default {
 name: 'task',
  data () {
    return {

    }
  },
  computed: {

  },
  mounted() {
    let canvas = document.getElementById('canvas'),
       context = canvas.getContext('2d'),
       cirX = canvas.width/2+6,
       cirY = canvas.height/2-2,
       red = Math.PI*2/100,
       n = 1,
       speed = 400,
       r = 20;
       function DreamLoading() {
         context.clearRect(0,0,canvas.width,canvas.height);
         writeCircle();
         writeText();
         writeBlue(n)
         if(n <100) {
           n = n+0.7;
         } else {
           context.strokeStyle = '#808080';
         }
         window.requestAnimationFrame(DreamLoading);
       }
       function writeBlue(n) {
         context.save();
         context.strokeStyle = '#B6CDF1';
         context.lineWidth = 4;
         context.beginPath();
         context.arc(cirX,cirY,r,-Math.PI/2,-Math.PI/2+red*n,false);
         context.stroke();
         context.restore();
       }
       function writeText(n) {
         context.save();
         context.strokeStyle = '#808080';
         context.font = '15px Airil';
         context.strokeText('跳过',cirX-17,cirY+6);
         context.stroke();
         context.restore();
       }
       function writeCircle() {
         // 画个圆
         // stroke 边框
         context.save();//缓存当前的绘制缓冲
         context.beginPath();
         context.strokeStyle = '#49f';
         context.arc(cirX,cirY,r,0,Math.PI*2, false);
         context.stroke();
         context.restore();
       }
       DreamLoading();
       setTimeout(() => {
         var t = document.getElementById('task');
         t.style.display = 'none'
       },500)
  },
  methods: {
    change() {
      var t = document.getElementById('task');
      t.style.display = 'none'
    }
  }

}
</script>

<style lang="css">
.task {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
}

.task-img {
  width: 100%;
  height: 100%;
}
#canvas {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
