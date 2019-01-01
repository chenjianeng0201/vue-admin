<template>
  <div>
    <el-container>
      <el-aside width="200px"> <TheLeft/></el-aside>
      <el-container>
        <el-header class="header"><TheHeader/></el-header>
        <el-main>
          <p>Main</p>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import TheLeft from '@/components/layouts/TheLeft'
import TheHeader from '@/components/layouts/TheHeader'
import Login from '@/components/auth/Login'
export default {
  name: 'App',
  components: {
    TheLeft,
    TheHeader,
    Login,
  }
}
</script>

<style lang="scss">

$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "~bootstrap-sass/assets/stylesheets/_bootstrap";

.header{
  border-bottom: 1px solid #c0c0c0;
}
</style>
