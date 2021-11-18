<template>
    <div id="content">
        <h1>MCQ TEST</h1>
        <h4>Total {{ this.$store.getters.totalQuestions }} questions</h4>
        <button @click="startQuiz()"><span id="start-btn">START</span></button>
    </div>
</template>

<script>
import router from '@/router'
export default {
    name: 'Start',
    methods: {
        startQuiz(){
            router.push({ path: '/quiz'});
        }
    }    
}
</script>

<style scoped>
#content{
  margin: 352px 432px;
  width: 576px;
  height: 320px;
  background: #FCEAFE;
  border-radius: 20px;
}
h1{
    width: 299px;
    height: 49px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    
    color: #6A1CE8;
    
    margin-top: 59px;
    margin-left: 141px;  
}
h4{
    width: 414px;
    height: 27px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    color: #373434;
    
    text-align: center; 
    margin-top: 28px;  
    margin-left: 84px;   
}
button {
    width: 314px;
    height: 56px;
    background: #6A1CE8;
    border-radius: 5px;
    margin-top: 48px;
    margin-left: 134px;  
}
#start-btn {
    width: 314px;
    height: 56px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
}
</style>