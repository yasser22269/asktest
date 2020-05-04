<template>
    <div class="friends">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="label-everee">
                        <div class="container" id="yasser-app">
                            <ul class="tabs-choose">
                            <li @click="activeTab = '1'" :class="[activeTab === '1' ? 'active' : '']"><span>friends</span> </li>
                            <li @click="activeTab = '2'" :class="[activeTab === '2' ? 'active' : '']"><span>Interests</span> </li>
                            <li @click="activeTab = '3'" :class="[activeTab === '3' ? 'active' : '']"><span>social</span></li>
                            </ul>
                    <div class="tabs-content">
                            <div class="content-one" v-if="activeTab === '1'">
                                            
                                <h5>Your friends</h5>
                                
                                                     <div class="friendsviews">
                                                            
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span>yasser@yahoo.com</span></span>
                                                <span class="view-friendsView">
                                                    <span class="red-icon-heart">
                                <i class="fas fa-heart" @click="redtoggle =!redtoggle " :class="{red : redtoggle}" ></i>
                                                    </span>
                                                    <span class="color-ask">
                                                         Ask <i class="fas fa-angle-right"></i>
                                                    </span>
                                               
                                                </span>
                                                     </div>
                                                     
                                                      <div class="friendsviews">
                                                            
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span>yasser@yahoo.com</span></span>
                                                <span class="view-friendsView">
                                                    <span>
                                <i class="fas fa-heart" @click="redtoggle2 =!redtoggle2 " :class="{red : redtoggle2}" ></i>
                                                    </span>
                                               <span class="color-ask">
                                                         Ask <i class="fas fa-angle-right"></i>
                                                    </span>
                                                </span>
                                                     </div>
                                                       <div class="friendsviews">
                                                            
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span>yasser@yahoo.com</span></span>
                                                <span class="view-friendsView">
                                                    <span>
                                <i class="fas fa-heart" @click="redtoggle3 =!redtoggle3 " :class="{red : redtoggle3}" ></i>
                                                    </span>
                                               <span class="color-ask">
                                                         Ask <i class="fas fa-angle-right"></i>
                                                    </span>
                                                </span>
                                                     </div>
                                                       <div class="friendsviews">
                                                            
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span>yasser@yahoo.com</span></span>
                                                <span class="view-friendsView">
                                                    <span>
                                <i class="fas fa-heart" @click="redtoggle4 =!redtoggle4 " :class="{red : redtoggle4}" ></i>
                                                    </span>
                                               <span class="color-ask">
                                                         Ask <i class="fas fa-angle-right"></i>
                                                    </span>
                                                </span>
                                                     </div>
                                            
                                              <div class="friendsviews">
                                                            
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span>yasser@yahoo.com</span></span>
                                                <span class="view-friendsView">
                                                    <span>
                                <i class="fas fa-heart" @click="redtoggle5 =!redtoggle5 " :class="{red : redtoggle5}" ></i>
                                                    </span>
                                               <span class="color-ask">
                                                         Ask <i class="fas fa-angle-right"></i>
                                                    </span>
                                                </span>
                                                     </div>
                                            
                                              <div class="friendsviews">
                                                            
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span>yasser@yahoo.com</span></span>
                                                <span class="view-friendsView">
                                                    <span>
                                <i class="fas fa-heart" @click="redtoggle6 =!redtoggle6 " :class="{red : redtoggle6}" ></i>
                                                    </span>
                                               <span class="color-ask">
                                                         Ask <i class="fas fa-angle-right"></i>
                                                    </span>
                                                </span>
                                                     </div>
                                            
                                              <div class="friendsviews">
                                                            
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span>yasser@yahoo.com</span></span>
                                                <span class="view-friendsView">
                                                    <span>
                                <i class="fas fa-heart" @click="redtoggle7 =!redtoggle7 " :class="{red : redtoggle7}" ></i>
                                                    </span>
                                               <span class="color-ask">
                                                         Ask <i class="fas fa-angle-right"></i>
                                                    </span>
                                                </span>
                                                     </div>
                                            
                                              <div class="friendsviews">
                                                            
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span>yasser@yahoo.com</span></span>
                                                <span class="view-friendsView">
                                                    <span>
                                <i class="fas fa-heart" @click="redtoggle8 =!redtoggle8 " :class="{red : redtoggle8}" ></i>
                                                    </span>
                                               <span class="color-ask">
                                                         Ask <i class="fas fa-angle-right"></i>
                                                    </span>
                                                </span>
                                                     </div>
                                                          <div class="friendsviews">
                                                            
                                        <img src="https://via.placeholder.com/40/" alt="">
                                                <span class="name-friendsView">Yasser Abd Elghany <span>yasser@yahoo.com</span></span>
                                                <span class="view-friendsView">
                                                    <span>
                                <i class="fas fa-heart" @click="redtoggle9 =!redtoggle9 " :class="{red : redtoggle9}" ></i>
                                                    </span>
                                               <span class="color-ask">
                                                         Ask <i class="fas fa-angle-right"></i>
                                                    </span>
                                                </span>
                                                     </div>
                                            
                                            
                                            

                            </div>
                            <div class="content-two" v-if="activeTab === '2'">  Test </div>
                            <div class="content-three" v-if="activeTab === '3'">  Test </div>
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
                         redtoggle3: false,
                          redtoggle4 : false,
                         redtoggle5 : false,
                         redtoggle6: false,
                          redtoggle7 : false,
                         redtoggle8 : false,
                         redtoggle9: false,
                         
                        }
                        
          },

         
         

            
 
        
}
</script>