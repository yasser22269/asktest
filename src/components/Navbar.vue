<template>
  <div class="navv">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h5>ASK</h5>
            </div>
            <div class="col-md-8">
                  <ul class=""> 
                <li class="">
                  <router-link to='/' class="fas fa-home" active-class="active" exact href="#"></router-link>
                </li>
                <li class="">
                  <router-link to='/inbox' class="fas fa-question-circle" active-class="active" href="#"></router-link>
                </li> 
                <li class="">
                  <router-link to='/friends' class="fas fa-user-friends" active-class="active" href="#"></router-link>
                </li> 
                <li class="">
                  <router-link to='/notifications' class="fas fa-bell" active-class="active" href="#"></router-link>
                </li> 
                <li class="">
                  <router-link to='/asking' class="fas fa-cog fas " active-class="active" href="#"><i class="fas fa-angle-down"></i></router-link>
                </li> 
                  <li class="">
                  <router-link to='/setting' class="bb" active-class="active" href="#"><i class="fas fa-plus "></i></router-link>
                </li> 
              </ul>
            </div>
          </div>
        </div>
     
        <hr>
    
  </div>
   
</template>