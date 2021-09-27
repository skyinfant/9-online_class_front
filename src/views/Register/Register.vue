<template>
  <div class="main">
    <cube-form :model="model" @submit="submitHandler">
      <cube-form-group>
        <!-- 名称 -->
        <cube-form-item :field="fields[0]"></cube-form-item>
        <!-- 手机号 -->
        <cube-form-item :field="fields[1]"></cube-form-item>
        <!-- 密码 -->
        <cube-form-item :field="fields[2]"></cube-form-item>
      </cube-form-group>

      <cube-form-group>
        <cube-button type="submit">注册</cube-button>
      </cube-form-group>
    </cube-form>

    <router-link to="/login" class="reg"><span>登陆</span></router-link>
  </div>
</template>

<script>
import { registerApi } from "@/api/getData.js";
export default {
  data() {
    return {
      model: {
        phoneValue: "",
        pwdValue: "",
        nameValue: "",
      },

      fields: [
        //名称
        {
          type: "input",
          modelKey: "nameValue",
          label: "昵称",
          props: {
            placeholder: "请输入昵称",
          },
          rules: {
            required: true,
          },
          message: {
            required: "昵称不能为空",
          },
        },

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

      registerApi(model.phoneValue, model.pwdValue, model.nameValue).then(
        (res) => {
          if (res.data.code === 0) {
          this.$createToast({
              txt: "注册成功",
              type: "correct",
              time: 1500,
              onTimeout: () => {
                this.$router.push({ path: "/login" });
              },
            }).show();

          }else {
          this.$createToast({
            txt: "此手机号已被注册",
            type: "error",
            time: 1500,
          }).show();
        }
        }
      );
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
//注册
.cube-btn {
  margin-top: 20px;
}
// 登录
.reg {
  display: inline-block;
  margin-top: 30px;
  font-size: 18px;
}
</style>



