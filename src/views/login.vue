<template>
  <div class="height100">
    <el-row class="height100">
      <el-col :span="12" class="height100">
        <div class="grid-content">
          <h4 class="company-name">登录</h4>
          <h2 class="system-name">管控平台</h2>
          <h5 class="english-name">The evaluation system of construction disturbance tunnel</h5>
          <el-form label-position="top" :rules="rules" ref="loginForm" label-width="80px" :model="loginForm">
            <el-form-item label="账号" prop="username">
              <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox label="是否记住密码" v-model="loginForm.checked"></el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="12" class="height100">
        <el-carousel>
          <el-carousel-item v-for="item in loginImg" :key="item">
            <img class="login-img" :src="item" alt="" srcset="">
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import LoginImg1 from '../assets/images/login_bg1.jpg';
import LoginImg2 from '../assets/images/login_bg2.jpg';
export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456',
        checked: false
      },
      loginImg: [LoginImg1,LoginImg2],
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.loginInit();
          this.$router.push('/Home');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    loginInit() {
      let params = {
        'username': 'minxiaoyuan',
        'password': '111111',
        'ctype': '1' ,
        'cuser': 'cuser',
        'sjlx': 'android',
        'sbbh': '860187048276996'
      };
      let params1 = {
        'username': 'test',
        // 'password': 'Uav_2020@zondy'
        'password': 'ZF_App@2020'
      };
      // this.$api.userLogin(params).then(res=> {
      //   // 执行某些操作
      //   console.log('2222', res);
      //   localStorage.setItem('token', res.token);
      //   this.$router.push('/home');
      // }).catch(e => {
      //   this.$message.error(e);
      // })
      this.$api.userLogin1(params1).then(res=> {
        // 执行某些操作
        console.log('2222', res);
        localStorage.setItem('token', res.data.token);
        this.$router.push('/home');
      })
    }
  },
}
</script>
<style lang="less" scoped>
  .grid-content {
    height: 90%;
    margin: 0 15%;
    .company-name {
      margin-top: 40px;
      color: #66b1ff;
    }
    .system-name {
      margin-top: 80px;
      margin-bottom: 10px;
    }
    .english-name {
      margin-bottom: 30px;
    }
    /deep/.el-form-item__label {
      font-weight: bold;
      line-height: 30px;
      padding-bottom: 5px;
      color: #2c3e50;
    }
    /deep/ .el-button {
      width: 100%;
    }
  }
  /deep/.el-carousel {
    height: 100%;
    /deep/.el-carousel__container {
      height: 100%;
      .login-img {
        height: 100%;
      }
    }
  }
</style>