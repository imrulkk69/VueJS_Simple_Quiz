<template>
    <div id="content">
        <h1>MCQ Result</h1>
        <div id="gift">🎉</div>
        <h4>You got {{this.$store.getters.getQuizResult}} score</h4>
        <button @click="startAgain()"><span id="start-btn">TAKE AGAIN</span></button>
    </div>
</template>

<script>
import router from '@/router'
export default {
    name: 'Finish',    
    methods: {
        startAgain(){
            this.$store.commit('clearQuizPoints');
            router.push({ path: '/quiz' });
        }
    }
}
</script>

<style scoped>
#content{
  margin: 295px 432px;
  width: 576px;
  height: 435px;
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
    
    margin-top: 56px;
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
    margin-top: 26px;  
    margin-left: 84px;   
}
button {
    width: 314px;
    height: 56px;
    background: #6A1CE8;
    border-radius: 5px;
    margin-top: 42px;
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
#gift{
    width: 198px;
    height: 86px;
    /* left: 624px;
    top: 426px; */
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 94px;
    text-align: center;
    color: #000000;
    margin-top: 26px;
    margin-left: 192px;
}
</style>