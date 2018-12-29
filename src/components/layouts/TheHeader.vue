<template>
  <div>
    <span>aaa</span>
    <el-dropdown class="user-info">
      <span class="el-dropdown-link">
        <img :src="user.avatar" :alt="user.title" width="40px;" height="40px" class="avatar">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="user-info-dropdown">
        <el-dropdown-item><a><i class="el-icon-info"></i>个人中心</a></el-dropdown-item>
        <el-dropdown-item><a><i class="el-icon-setting"></i>设置</a></el-dropdown-item>
        <el-dropdown-item divided><a><i class="el-icon-error"></i>退出</a></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style>
  .user-info {
    float: right;
    top: 10px;
    position: absolute;
    right: 40px;
  }
  .user-info-dropdown a{
    color: #606266;
    text-decoration: none;
  }
  .user-info-dropdown a:hover{
    color: #409eff;
  }
  .user-info-dropdown i{
    margin-right: 5px;
  }

</style>
<script>
  export default {
    name: 'TheHeader',
    data() {
      return {
        user: {
          avatar: require('../../assets/avatar.jpeg'),
          title: '用户信息'
        }
      }
    },
    beforeCreate() {
      this.uploadsUrl = 'http://localhost:8080'
    }
  }
</script>
