<template>
    <div id="content">
        <div id="quiz">
            <Timer />                  
            <Questions :questions="this.$store.getters.getQuestions" />
            <button @click="showResult()">Finish</button>
        </div>    
  </div>
</template>

<script>
import router from '@/router';
import Questions from '../components/Questions.vue';
import Timer from '../components/Timer.vue';
export default {
      name: 'Quiz',
      components: {
        Questions,
        Timer
      },
      methods: {
        showResult(){          
          router.push({ path: '/finish'});
        }
      }    
  }
</script>

<style scoped>
  #content{
  width: 1107px;
  height: 889px; 
}
#quiz{
  display: flex;
  flex-flow: column;
}
button {
  width: 314px;
  height: 56px;
  background: #6A1CE8;
  border-radius: 5px;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  color: #FFFFFF; 
  position: relative;
  margin-left: 630px;
}
</style>