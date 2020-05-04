<template>
    <div class="quet-assking">
      <div class="container">
        <div class="row">
          <div class="col-md-7">

            <div class="answer-askking">
              <h5>What car were you born to drive?</h5>
              <hr>
              <textarea placeholder="Answer"  v-model="taskText"></textarea>
                 <div class="answer-two" v-for="(task) in tasks" v-bind:key="task.words" >
                              <span>the Answer in:</span>  <span class="answer-quetions">{{task.words }} </span> 
                              
                </div>
              <button  @click.prevent="addTask"><i class="fas fa-location-arrow"></i></button>
        
            </div>
            
          </div>
        </div>
      </div>
      
      
      


    </div>
</template>


<script>
export default {
  props:['id'],
  data() {
                return {
                          tasks: [],
                          taskText: "",
                            activeTab: "1",
                        redtoggle : false,
                         redtoggle2 : false,

                         
                        }
          }, methods: {
                addTask: function() {
                this.tasks.push({ words: this.taskText, done: false });         
                this.taskText = "";
               
                },               
            },
}
</script>