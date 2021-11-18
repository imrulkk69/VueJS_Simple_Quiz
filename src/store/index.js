import { createStore } from 'vuex';

export default createStore({
    state: {
        quizPoints: [],
        quizTime: 30,
        questions : [
            {
              "title": "What is the past form of 'eat'?",
              "options": [ 
                "eat", 
                "ate", 
                "eaten", 
                "have ate"
                ],
              "answer": "ate"
            },
            {
              "title": "Which sentence is present continuous tense?",
              "options": [
                "I eat rice",
                "I am eating rice",
                "I have ate rice",
                "I have been eating rice for 1 year"
              ],
              "answer": "I am eating rice"
            },
        ],        
    },
    mutations: {
        updateQuizPoints(state, payload){ 
            const otherAns = state.quizPoints.filter(item => item.question !== payload.question);   
            state.quizPoints.splice(0);     
            state.quizPoints.push(...otherAns, payload);                                    
        },
        clearQuizPoints(state){
            state.quizPoints.splice(0);  
        }       
    },
    actions: {

    },
    getters: {
        getQuestions(state){
            return state.questions;
        },

        totalQuestions(state){
            return state.questions.length;
        },

        getQuizTime(state){
            return state.quizTime;
        },
        getQuizResult(state){
            let result = 0;

            state.quizPoints.forEach(item => {
                result += item.point;
            });

            return result;                        
        }
    },
    modules: {

    }
});