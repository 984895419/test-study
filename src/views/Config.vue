<template>
    <div class="config">
        <div class="header">
            <div class="header__lf" @click="routerGoBack()"> </div>
            <div class="header__title">{{ $route.meta.title }}</div>
            <div class="header__rt">
                <img src="../assets/images/config1.png" alt="">
            </div>
        </div>
        <div class="main">
            <van-form @submit="onSubmit">
                <van-field v-model="username" name="姓名" label="姓名" placeholder="姓名"
                    :rules="[{ required: true, message: '请填写姓名' }]" />
                <van-field v-model="password" maxlength="11" type="number" name="手机号码" label="手机号码" placeholder="手机号码"
                    :rules="[{ required: true, message: '请填写手机号码' }]" />
                <van-field readonly clickable name="picker" :value="value" label="车型" placeholder="点击选择车型"
                    @click="showPicker = true" />
                <van-popup v-model="showPicker" position="bottom">
                    <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
                </van-popup>
                <van-field v-model="username" name="车牌号" label="车牌号" placeholder="车牌号"
                    :rules="[{ required: true, message: '请填写车牌号' }]" />
                <!-- 出发地 目的地 -->
                <van-field readonly clickable name="area" :value="leaveVal" label="默认出发地" placeholder="点击选择地址"
                    @click="showArea = true" />
                <van-popup v-model="showArea" position="bottom">
                    <van-area :area-list="areaList" @confirm="onConfirm1" @cancel="showArea = false" />
                </van-popup>
                <van-field readonly clickable name="area" :value="destination" label="默认目的地" placeholder="点击选择地址"
                    @click="showdestination = true" />
                <van-popup v-model="showdestination" position="bottom">
                    <van-area :area-list="areaList" @confirm="onConfirm2" @cancel="showdestination = false" />
                </van-popup>
                <div style="margin: 16px;">
                    <van-button color="rgb(236, 195, 67)" round block type="info" native-type="submit">提交</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            username: '',
            password: '',
            value: '',
            columns: ['5座轿车', '公司班车', 'SUV', '两座跑车'],
            showPicker: false,
            leaveVal: '',
            destination: '',
            showArea: false,
            showdestination: false,
            areaList: {}, // 数据格式见 Area 组件文档
        }
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
        },
        onConfirm1(values) {
            this.value = values
                .filter((item) => !!item)
                .map((item) => item.name)
                .join('/');
            this.showArea = false;
        },
        onConfirm2(values) {
            this.value = values
                .filter((item) => !!item)
                .map((item) => item.name)
                .join('/');
            this.showdestination = false;
        },
        routerGoBack() {
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="less" scoped>
@tycolor: rgb(236, 195, 67);

.config {
    .header {
        height: 1.5rem;
        background: @tycolor;
        display: flex;
        padding: 0 0.2rem;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;

        &__lf {
            width: 1.1rem;
            height: 1.1rem;
            background: url('../assets/images/ico-goback.png') no-repeat center center;
            background-size: 80% 80%;
        }

        &__title {
            width: calc(100% - 2rem);
            font-size: 0.5rem;
            color: white;
        }

        &__search {
            width: calc(100% - 2.6rem);
            height: 0.7rem;
            border-radius: 1rem;
            border: none;
            outline: none;
            color: black;
            padding: 0 0.3rem;
            box-sizing: border-box;
        }

        &__rt {
            width: 1.1rem;
            height: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                height: 0.8rem;
                object-fit: cover;
            }
        }
    }
}
</style>