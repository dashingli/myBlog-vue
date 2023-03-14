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
      <button :class="{ isSubmit: isSubmit }" ref="submitButton">
        {{ isSubmit ? "正在提交.." : "提交" }}
      </button>
    </form>
    <img v-if="isLoading === true" src="../../../assets/loading.svg" />
    <Message
      :mesType="mesType"
      :msgContent="msgContent"
      :isShow="isMessage"
      :duration="duration"
    ></Message>
  </div>
</template>

<script lang="js">
import {postComment} from '@/api/blog.js'
import {postMsg} from "@/api/message";
import Message from '@/components/Message'
export default {
  components:{
    Message
  },
  props:{
    // 1为博客评论,2为留言板评论
    type:{
      type:Number,
      required:true
    },
  },
    data(){
        return {
            formBody:{
              nickname:'',
              content:'',
              blogId:this.$route.params.id
            },
            nickNameError:"",
            contentError:"",
            isLoading:false,
            isMessage:false,
            duration:1000,
            mesType:'success',
            msgContent:'评论成功',
            isSubmit:false,
        }
    },
    methods:{
        async onSubmit(){
            if(!this.formBody.nickname){
                this.nickNameError = '请输入用户名'
            }
            if(!this.formBody.content){
                this.contentError = '请输入内容'
            }
            if(!this.formBody.nickname || !this.formBody.content){
                return;
            }
            this.$refs.submitButton.disabled = true;
            this.isLoading = true;
            this.isSubmit = true;
            let res;
            if(this.type === 1){
              res = await postComment(this.formBody);
            }
            if(this.type === 2){
              res = await postMsg(this.formBody)
            }
            const data = res.data;
            this.isMessage = true;
            if(res.code === 0){
              this.$emit('submit',data);

            }else{
              this.mesType = 'error';
              this.msgContent = '未知错误,评论失败'
            }
            this.formBody.nickname = '';
            this.formBody.content = '';
            this.isLoading = false;
            this.isSubmit = false;
            this.$refs.submitButton.disabled = false;
            setTimeout(()=>(this.isMessage = false),this.duration)

        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.form-wrapper {
  position: relative;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
  }
  .nick-name-error,
  .content-error {
    color: @danger;
    font-size: 13px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .isSubmit {
      cursor: not-allowed;
      background-color: @gray;
    }
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
