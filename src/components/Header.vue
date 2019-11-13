<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-brand href="#">Sonny</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
          
          <b-navbar-nav>
            <b-nav-item><router-link to="/" class="links">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/about" class="links">About</router-link></b-nav-item>
            <b-nav-item><router-link to="/task" class="links">Task</router-link></b-nav-item>
          </b-navbar-nav>

            
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<style>
.links{
  color: white;
}
.links:hover{
  text-decoration: none;
  color: darkgreen;
}
</style>