<template>
         <div class="askquation">
                                        <span class="qu1" style="    margin-bottom: -15px !important;">انت كويس؟</span>
                                         <img src="https://via.placeholder.com/40/" alt="">
                                        <span class="name-friendsView">Yasser Abd Elghany <span> 2 days age</span> </span>
                                        <span class="qu1">لا</span>

                                        <ul>
                                                <li><i class="fas fa-heart" 
                                                
                                                @click="redtoggle =!redtoggle " :class="{red : redtoggle}"
                                                
                                                ></i> {{ redtoggle ==true ? '1':'' }}   </li>
                                                <li><i class="fab fa-hotjar"
                                                   @click="redtoggle2 =!redtoggle2 " :class="{red : redtoggle2}"
                                                ></i> </li>
                                                <li class="right-ul"><i class="fas fa-ellipsis-h"></i></li>
                                                  <li class="right-ul"><i class="fas fa-retweet"></i></li>
                                                 <li class="right-ul"><i class="fas fa-share-square"></i></li>
                                              
                                                
                                               
                                                
                                                
                                     
                                        </ul>
                                           <hr>
                                    
                         <div class="answer-two" v-for="(task) in tasks" v-bind:key="task.words" >
                              <span>the Answer in:</span>{{task.words }}</div>
                                    
                                        <div class="b-input-send">
                                                <input type="text" placeholder="Keep assking..."  v-model="taskText">
                                                <i class="fas fa-location-arrow"  @click.prevent="addTask"></i>
                                        </div>
                                       
                               
                                </div>
                                   <!--  --> <!--  --> <!--  --> <!--  --> <!--  --> <!--  -->


                                   
</template>




<script>
export default {
     
         
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
