<template>
    <div class="question" :key="index" v-for="(question, index) in allQuestions">
        <h3>{{index+1}}. {{question.title}}</h3>
        <ul class="answer"> 
          <li :key="serial" v-for="(option, serial) in question.options">
            <input type="radio" :id="(index+1)+'_'+(serial+1)" :name="'answer_of_'+(index+1)" :disabled="question.answered" :value="option" @change="answeredQuestion(index, $event)">
            <label v-bind:for="(index+1)+'_'+(serial+1)">{{option}}</label><br>        
          </li>     
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Question',
    props: {
      questions: Array
    },
    data(){
      return{
        allQuestions: []            
      }
    },   
    methods: {
        answeredQuestion(id, event){
          const questionNo = id;
          const answer = event.target.value;

          this.allQuestions[id].answered = true;
                               
          this.questions.forEach((question, index) => {            
            if(index === questionNo){                            
              if(question.answer === answer){
                this.$store.commit('updateQuizPoints',{ question: questionNo, point: 5}); 
              }else{                                
                this.$store.commit('updateQuizPoints',{ question: questionNo, point: 0});                 
              }
            }            
          });                      
        },       
    },
    mounted(){
     
        this.questions.forEach(item => {
            if(item.answered)
              delete item.answered;
                            
            this.allQuestions.push(item);
        });
      
    }
}
</script>

<style scoped>
.question{
  width: 773px;
  height: 320px;
  background: #FCEAFE;
  border-radius: 20px;  
  
  margin: 0 auto 36px auto;
}
.question > h3 {
  width: 684px;
  height: 43px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #6A1CE8;
  margin-top: 43px;
  margin-left: 47px;  
}
.question .answer {
  height: 25px;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  margin-left: 67px;
} 
ul > li {
  list-style: none;
}
input {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
</style>