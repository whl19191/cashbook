<template>
  <div id="app" class="blue">
    <n-header></n-header>
    <section class="container">
        <n-add></n-add>
        <n-list></n-list>
    </section>
  </div>
</template>

<script>
import nHeader from './components/header.vue';
import nAdd from './components/event_add.vue';
import nList from './components/event_list.vue';

export default {
  data () {
    return {
      
    }
  },
  components: {
      nHeader,
      nAdd,
      nList
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" src="../static/theme.scss"></style>
<style lang="scss" rel="stylesheet/scss">
    $bgcolor:#db4c3f;
    html,body,ul,li,input{
        margin:0;
        padding:0;
    }
    body{
        font-size: 12px;
        font-family: "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
        background:#fafafa;
    }
    input,button{
        -webkit-tap-highlight-color: transparent;
    }
    input[type=text]{
        -webkit-appearance: none;
    }
    button{
        padding:7px 0;
        outline: none;
        text-align: center;
        border-radius: 4px;
        border:none;
        box-sizing: border-box;
        font:{
            size:inherit;
            family: inherit;
        }
        cursor: pointer;
    }
    body,#app{
        width:100%;
        overflow-x: hidden;
    }
    ul{
        list-style: none;
    }
    .container{
        width:100%;
        padding: 0 10px;
        max-width:800px;
        margin:auto;
        box-sizing: border-box;
        &.hide{
            display: none;
        }
    }
</style>
