<template>
  <div class="main">
    <cube-form :model="model" @submit="submitHandler">
      <cube-form-group>
        <!-- 手机号 -->
        <cube-form-item :field="fields[0]"></cube-form-item>
        <!-- 密码 -->
        <cube-form-item :field="fields[1]"></cube-form-item>
      </cube-form-group>

      <cube-form-group>
        <cube-button type="submit">登陆</cube-button>
      </cube-form-group>
      <router-link to="/register" class="reg"><span>注册</span></router-link>
    </cube-form>
  </div>
</template>

<script>
//登录接口方法引入
import { loginApi } from "@/api/getData.js";
export default {
  data() {
    return {
      model: {
        phoneValue: "",
        pwdValue: "",
      },

      fields: [
        //手机号
        {
          type: "input",
          modelKey: "phoneValue",
          label: "手机号",
          props: {
            placeholder: "请输入手机号",
          },
          rules: {
            required: true,
          },
          message: {
            required: "手机号不能为空",
          },
        },

        //密码
        {
          type: "input",
          modelKey: "pwdValue",
          label: "密码",
          props: {
            placeholder: "请输入密码",
            type: "password",
            eye: {
              open: false,
            },
          },
          rules: {
            required: true,
          },
          message: {
            required: "密码不能为空",
          },
        },
      ],
    };
  },

  methods: {
    //提交表单
    submitHandler(e, model) {
      e.preventDefault();
      //调用登录接口
      loginApi(model.phoneValue, model.pwdValue).then((res) => {
        if (res.data.code === 0) {
          //保存token
          //localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去删除。
          localStorage.setItem("token", res.data.data);
        //   action--mutations--改变state中的数据
        // 调用actions里的setToken方法
          this.$store.dispatch('setToken',res.data.data)
          //登陆成功跳转到主页
          this.$router.push({ path: "/" });
        }
      });
    },
  },
};
</script>

</script>


<style lang="scss" scoped>
.main {
  padding: 50px 5% 0;
  text-align: center;
}
// 登录
.cube-btn {
  margin-top: 20px;
}
//注册
.reg {
  display: inline-block;
  margin-top: 30px;
  font-size: 18px;
}
</style>


