const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      myClasses: 'bg_color color',
      randomNumber: null,
      image: 'https://www.architetturaecosostenibile.it/images/stories/2016/promuoviamo-paesaggio-italiano.jpg'

    }
  },
  
  methods:{
    number(min, max){
        const num = parseInt(Math.floor(Math.random() * (max - min) + min))
        return num
    },
    generateNumber(){
      this.randomNumber = this.number(1, 100)
    }
  }

}).mount('#app')