<template>
  <div id="app">
    <Header/>
    
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="8" offset="2">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Task from './components/Task.vue';

export default {
  name: 'app',
  components: {
    Header,
    Home,
    About,
    Task
  }
};
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
