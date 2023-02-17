<template>
  <div class="form-wrapper">
    <form @submit.prevent="onSubmit">
      <div class="input-wrapper">
        <input
          type="text"
          placeholder="用户昵称"
          maxlength="10"
          v-model="formBody.nickname"
        />
        <span
          class="nick-name-span"
          :class="{ maxColor: formBody.nickname.length >= 10 }"
          >{{ formBody.nickname.length }}/10</span
        >
      </div>
      <span class="nick-name-error">{{ nickNameError }}</span>
      <div class="textarea-wrapper">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="请输入内容"
          maxlength="300"
          v-model="formBody.content"
        ></textarea>
        <span
          class="content-wrapper"
          :class="{ maxColor: formBody.content.length >= 300 }"
        >
          {{ formBody.content.length }}/300
        </span>
      </div>
      <span class="content-error">{{ contentError }}</span>

      <button>提交</button>
    </form>
  </div>
</template>

<script lang="js">
export default {
    data(){
        return {
            formBody:{
                nickname:'',
                content:'',
                blogId:this.$route.params.id
            },
            nickNameError:"",
            contentError:""
        }
    },
    methods:{
        onSubmit(){
            if(!this.formBody.nickname){
                this.nickNameError = '请输入用户名'
            }
            if(!this.formBody.content){
                this.contentError = '请输入内容'
            }
            if(!this.formBody.nickname || !this.formBody.content){
                return;
            }
            console.log("提交表单",this.formBody)
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.form-wrapper {
  .nick-name-error,
  .content-error {
    color: @danger;
    font-size: 13px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .input-wrapper {
      position: relative;
      width: 50%;
      input {
        padding: 10px;
        width: 100%;
        font-size: 13px;
        border: 2px dotted gray;
        border-radius: 5px;
        outline: none;
        &:focus {
          border: 2px dotted @primary;
        }
      }
      .nick-name-span {
        position: absolute;
        right: 5px;
        bottom: 5px;
        font-size: 5px;
        color: @gray;
      }
      .maxColor {
        color: @warn;
      }
    }
    .textarea-wrapper {
      position: relative;
      width: 90%;
      .content-wrapper {
        right: 5px;
        bottom: 5px;
        position: absolute;
        font-size: 5px;
        color: @gray;
      }
      .maxColor {
        color: @warn;
      }
      textarea {
        padding: 10px;
        width: 100%;
        border: 2px dotted gray;
        border-radius: 5px;
        outline: none;
        &:focus {
          border: 2px dotted @primary;
        }
      }
    }

    button {
      width: 100px;
      padding: 7px;
      background-color: @primary;
      border: none;
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>
