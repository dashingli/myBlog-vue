<template>
  <div class="notfound-wrapper">
    <img src="../../assets/404.gif" alt="">
    <router-link to="/Blog" class="button"><span class="text">GO BACK HOME</span></router-link>
  </div>
</template>

<script lang='js'>
export default {}
</script>

<style lang='less' scoped>
.notfound-wrapper{
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  img{
    width:70%;
  }
  .button{
    padding:20px;
    width: 150px;
      height: 30px;
      border-radius: 20px;
      background-color:#e28800;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
      opacity: 0.8;
      display: flex;
       align-items: center;
      justify-content: center;
      transition: all .3s linear;

      &:hover{
         width: 170px;
        height: 50px;
        background-color:#e25f00;
        animation: jitter 2s linear infinite;
      }
    @keyframes jitter{
      0%{
        transform: translateY(0px);
      }
      25%{
        transform: translateY(5px);
      }
      50%{
        transform: translateY(0px);
      }
      75%{
        transform: translateY(-5px);
      }
      100%{
        transform: translateY(0px);
      }

    }
      .text{
          text-align: center;
        white-space:nowrap;
          font-size: 5px;
          font-weight: bold;
          color:#ffffff;
      }
  }
}


</style>