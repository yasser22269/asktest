<template>
       <div class="index">
               <div class="container">
                       <div class="slider">
                               <div class="row">
                                       <div class="col-md-7">
                                               <div class="questions-index">




                                                    
        <div class="container" id="yasser-app">
                <ul class="tabs-choose">
                <li @click="activeTab = '1'" :class="[activeTab === '1' ? 'active' : '']"><span>All</span> </li>
                <li @click="activeTab = '2'" :class="[activeTab === '2' ? 'active' : '']"><span>Questions</span> </li>
                <li @click="activeTab = '3'" :class="[activeTab === '3' ? 'active' : '']"><span>Discover</span></li>
                </ul>
        <div class="tabs-content">
                <div class="content-one" v-if="activeTab === '1'">
                             
                                  <hr>

                                                <router-view></router-view>
                                                <router-view></router-view>
                                                <router-view></router-view>
                                                 <router-view></router-view>
                                                <router-view></router-view>
                                                <router-view></router-view>

                                                <span>Share your profile with friends to get more questions</span>
                                                <ul class="but-i">
                                                        <li><button type="button" class="btn btn-primary btn-lg" style="background : #3a589a !important;"><i class="fab fa-facebook-f"></i></button></li>
                                                        <li><button type="button" class="btn btn-primary btn-lg"><i class="fab fa-twitter"></i></button></li>
                                                         <li><button type="button" class="btn btn-primary btn-lg " style="background : #4e6e8e !important;"><i class="fab fa-instagram"></i></button></li>
                                                </ul>









                </div>
                <div class="content-two" v-if="activeTab === '2'">  <router-view></router-view></div>
                <div class="content-three" v-if="activeTab === '3'">  <router-view></router-view>  <router-view></router-view></div>
                </div>
                </div>   

                                             
                                               </div>
                                       </div>





                                <div class="col-md-5">
                                             <div class="header-right">
                                                     <span>Your friends </span>
                                                   
                                                     <div class="friendsviews">
                                                            
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span><i class="fas fa-heart"></i>100</span></span>
                                                <span class="view-friendsView">Ask <i class="fas fa-angle-right"></i></span>
                                                     </div>
               <div class="friendsviews">
                                                            
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span><i class="fas fa-heart"></i>100</span></span>
                                                <span class="view-friendsView">Ask <i class="fas fa-angle-right"></i></span>
                                                     </div>
               <div class="friendsviews">
                                                            
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span><i class="fas fa-heart"></i>100</span></span>
                                                <span class="view-friendsView">Ask <i class="fas fa-angle-right"></i></span>
                                                     </div>

                                                    
                                                       <div class="friendsviews">
                                                            
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span><i class="fas fa-heart"></i>100</span></span>
                                               <span class="view-friendsView">Ask <i class="fas fa-angle-right"></i></span>
                                                      </div>
                                                       <div class="friendsviews">
                                                           
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span><i class="fas fa-heart"></i>100</span></span>
                                                <span class="view-friendsView">Ask <i class="fas fa-angle-right"></i></span>
                                                     </div>


                                        <p class="add-friends-buttom">
                                                See all friends
                                        </p>

                                    
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