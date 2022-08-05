<template>
    <div class="list">
        <div class="items" v-for=" (item, index) in data" :key="index">
            <div class="info">
                <div class="info-lf">
                    {{ item.departureTime }}
                </div>
                <div class="info-rt">
                    还可拼<span class="rt-red">{{ item.resrNum }}</span>人
                </div>
            </div>
            <div class="address">
                {{ item.departurePlace }}———{{ item.destination }}
            </div>
            <div class="btns" @click="viewDetails(item)">查看</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        data: []
    },
    methods: {
        viewDetails(data) {
            this.$router.push('/info')
        }
    }

}
</script>

<style scoped lang="less">
@tycolor: rgb(236, 195, 67);

.list {
    width: calc(100% - 0.6rem);
    margin: 0 auto;
    padding: 0.2rem 0;
    box-sizing: border-box;
    font-size: 0.4rem;
    color: white;

    .items {
        min-height: 3rem;
        color: black;
        background: white;
        padding: 0.3rem;
        border-radius: 0.2rem;
        box-sizing: border-box;
        margin-top: 0.4rem;
        box-shadow: 0.06rem 0.06rem 0.2rem rgba(0, 0, 0, 0.3);

        &:first-child {
            margin-top: 0;
        }

        .info {
            display: flex;
            align-items: center;
            justify-content: space-around;

            &-lf {
                font-size: 0.55rem;
            }

            &-rt {
                .rt-red {
                    color: red;
                }
            }
        }

        .address {
            margin: 0.3rem 0rem;
            font-weight: 600;
            font-size: 0.45rem;
            padding: 0 0.35rem;
            box-sizing: border-box;
            position: relative;

            &::before {
                position: absolute;
                content: '';
                width: 0.3rem;
                height: 0.3rem;
                background: green;
                border-radius: 50%;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
            }
        }

        .btns {
            width: 50%;
            margin: 0.3rem auto 0.1rem;
            color: white;
            height: 0.8rem;
            background: @tycolor;
            line-height: 0.8rem;
            border-radius: 0.3rem;
        }
    }

}
</style>