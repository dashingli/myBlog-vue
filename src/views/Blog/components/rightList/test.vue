<template>
  <div class="test-wrapper">
    <rightList :dataList="dataList" @handleClick="handleClick"></rightList>
  </div>
</template>

<script lang="js">
import rightList from './'
export default {
    methods:{
        handleClick(val){
            console.log(val)
        }
    },
    components:{
        rightList
    },
    data(){
        return{
            dataList:[{name:"a",select:false},
            {name:"b",select:false},
            {name:"c",select:true,children:[{name:"c-1",select:false},
            {name:"c-2",select:false,children:[{name:"c-2-1",select:false},{name:"c-2-2",select:false},{name:"c-2-3",select:false}]},{name:"c-3",select:false},{name:"c-4",select:false}]},
            {name:"d",select:false},
            {name:"e",select:false},
            {name:"f",select:false},
        ]
        }
    }
}
</script>

<style lang="less" scoped></style>
