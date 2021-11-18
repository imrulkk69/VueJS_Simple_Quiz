<template>
    <Question :questions="questions"/>    
</template>

<script>
import Question from './Question.vue';
export default {
    name: 'Questions',
    components: {
        Question
    },
    props: {
        questions: Array
    }    
}
</script>

<style scoped>
</style>