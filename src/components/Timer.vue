<template>
    <div id="quiz-time">
        <h3>Remaning Time</h3>
        <p>00:00:{{timerCount}}</p>
    </div> 
</template>

<script>
//import router from '@/router';
export default {
  name: 'Timer',
  data() {
    return {
        timerCount: this.$store.getters.getQuizTime
    }
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
            setTimeout(() => {
                this.timerCount--;
            }, 1000);
        }else{
          //router.push({ path: '/finish'});
        }
      },
      immediate: true 
    }
  }  
}
</script>

<style scoped>
    #quiz-time{
  width: 773px;
  height: 117px;
 
  background: #FCEAFE;
  border-radius: 20px;
 
      
  margin: 60px auto 66px auto;
}
#quiz-time > h3, p {
  width: 299px;
  height: 49px;
  
  color: #6A1CE8;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  
  display: inline-block;
  text-align: right;
  margin-top: 45px;
}
</style>