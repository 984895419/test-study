<template>
    <!-- <div class="box">
        box
        <div class="small">small</div>
    </div> -->
    <div class="big">
        <div class="middle">
            <div class="small"></div>
        </div>
    </div>
</template>


<style lang="less" scoped>
html{
        font-size: 16px;
}
.big{
    width: 100px;
    height: 100px;
    background: red;
    .middle{
        background: green;
        height:20px ;
        .small{
              width: 100%;
              background: blue;
        }
    }
}
// .box {
//     width: 100px;
//     height: 100px;
//     background: red;
//     font-size: 30px;
//     color: green;
//     .small {
//      width: 50px;
//      height: 50px;
//      background: blue;
//      font-size: 3em;
//     }
//     .big{
//      font-size: 3rem;
//     }
// }





</style>