<template>
      <div class="header">
              <div class="container">
                      <div class="slider">
                              <div class="row">


                                      <div class="col-md-7">
                                              <div class="tempcaeds">
                                                      <ul>
                                                              <li class="active"><i class="fas fa-question-circle"></i>Question</li>
                                                                <li><i class="fas fa-images"></i>photo poll</li>
                                                                  <li><i class="fas fa-images"></i> Shoutout</li>
                                                                  
                                                      </ul>
                                                      <input type="text" placeholder="What, when, why… ask">
                                                      <ul class="two-ul">
                                                              <li>
                                                                      
                                                                       <div class="pretty p-switch p-primary-o">
                                                                                        <input type="checkbox" />
                                                                                        <div class="state">
                                                                                        <label> Ask anonymously</label>
                                                                                        </div>
                                                                                </div>
                                                                    </li>
                                                              <li class="b2ul"><i class="fas fa-location-arrow"></i></li>
                                                      </ul>

                                              </div>


        <div class="container" id="yasser-app">
                <ul class="tabs-choose">
                <li @click="activeTab = '1'" :class="[activeTab === '1' ? 'active' : '']"><span>Wall</span> </li>
                <li @click="activeTab = '2'" :class="[activeTab === '2' ? 'active' : '']"><span>Versus</span> </li>
                <li @click="activeTab = '3'" :class="[activeTab === '3' ? 'active' : '']"><span>Discover</span></li>
                </ul>
        <div class="tabs-content">
                <div class="content-one" v-if="activeTab === '1'">
                                 <div class="pretty p-switch p-primary-o">
                                        <input type="checkbox" />
                                        <div class="state">
                                        <label>Also show answers my friends like</label>
                                        </div>
                                </div>

                                <router-view></router-view>
                                 <router-view></router-view>
                                  <router-view></router-view>
                                

                </div>
                <div class="content-two" v-if="activeTab === '2'">  <router-view></router-view></div>
                <div class="content-three" v-if="activeTab === '3'">  <router-view></router-view>  <router-view></router-view></div>
                </div>
                </div>   
                                      </div>






                                      <div class="col-md-5">
                                             <div class="header-right">
                                                     <span>Friends 🔥 Leaderboard</span>
                                                     <hr>
                                                     <div class="friendsviews">
                                                             1
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span><i class="fas fa-heart"></i>100</span></span>
                                                <span class="view-friendsView">+12 🔥</span>
                                                     </div>
                                                       <div class="friendsviews">
                                                             2
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span><i class="fas fa-heart"></i>100</span></span>
                                                <span class="view-friendsView">+12 🔥</span>
                                                     </div>
                                                       <div class="friendsviews">
                                                           3
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span><i class="fas fa-heart"></i>100</span></span>
                                                <span class="view-friendsView">+12 🔥</span>
                                                     </div>


                                        <p class="add-friends-buttom">
                                                Add Friends
                                        </p>

                                        <div class="market-view">
                                                <span class="name-friendsView">Market<span>8 acttive offers </span></span>
                                               <span class="view-friendsView"><i class="fas fa-location-arrow"></i></span>
                                                
                                        </div>
                                             </div>
                                             
                                      </div>
                              </div>
                      </div>
              </div>
      </div>

      
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
                        
          },

         
         

            
 
        
}
</script>
