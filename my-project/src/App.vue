<template>
    <div >
    <h1>Active Links</h1>
    <ul>
      <li><router-link to="/" exact>/</router-link></li>
      <li><router-link to="/about" exact>/ (exact match)</router-link></li>
    </ul>
      <router-view></router-view>
    </div>
</template>



<style>
  a.router-link-active {
    color: #f66;
  }
  li.router-link-active a {
    color: #f66;
  }
</style>
