<template>
    <div class="box">
          <div class="small">
            
          </div>
    </div>
</template>


<style lang="less" scoped>
// .box {
//      width: 300px;
//      height: 300px;
//     //  position: relative;
//      background: red;
//      display: flex;
//      justify-content: center;
//      align-items: center;
//   .small{
//      width: 100px;
//      height: 100px;
//      background: green;
 
//     //  position: absolute;
//     //  left: 50%;
//     //  top: 50%;
//     //  transform: translate(-50%,-50%);
//   }
    
// }
.box {
     margin: 0 auto;
     width: 100%;
     height: 667px;
     background: red;
  .small{
    width: calc(100% - 100px);
    height: 100%;
    background: green;
    margin: 0 auto;
  }
}
</style>