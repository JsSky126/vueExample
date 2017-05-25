<template>
    <div >
      <h1>Home Foo</h1>
      <div class="loading" v-if="loading">
        Loading...
      </div>
      <ul v-for="item of list">
        <router-link :to="item" exact tag="li">{{ item.name }}</router-link>
      </ul>
      <router-view></router-view>
    </div>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {
        loading: false,
        post: null,
        error: null,
        list:[{name:'UserHome'}, {name :'UserProfile'}, {name :'UserPosts'}]
      }
    },
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData();
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        console.log('开始请求');
        this.error = this.post = null;
        this.loading = true;
        var that = this;
        // replace getPost with your data fetching util / API wrapper
        /*getPost(this.$route.params.id, (err, post) => {
          this.loading = false
          if (err) {
            this.error = err.toString()
          } else {
            this.post = post
          }
        })*/

        var timmer = setTimeout(function () {
              that.loading = false;
              console.log(that.loading);
        },4000);
      }
    }
  }
</script>
<style>
  a.router-link-active {
    color: #f66;
  }
  li.router-link-active a {
    color: #f66;
  }
</style>
