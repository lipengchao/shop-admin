<!--
 * @Description:
 * @Author: 雪中无处寻
 * @Date: 2020-06-13 16:36:19
 * @LastEditTime: 2020-06-14 21:09:21
 * @LastEditors: 雪中无处寻
-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-9 col-md-7 col-lg-5 m-auto pt-5">
        <div class="card mt-5">
          <div class="card-header bg-white">
            <h3 class="text-center mb-0">{{$conf.logo}}</h3>
          </div>
          <div class="card-body">
            <el-form
              ref="ruleform"
              :model="form"
              :rules="rules"
            >
              <el-form-item prop="username">
                <el-input v-model="form.username" size="medium" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="form.password" size="medium" type="password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="medium" class="w-100" @click="submit">立即登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.ruleform.validate((valid) => {
        if (!valid) return
        this.$router.push({ name: 'index' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
