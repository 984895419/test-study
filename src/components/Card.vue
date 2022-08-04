<template>
    <div class="items" v-for=" (item, index) in recordList" :key="index">
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
        <div class="btns">查看</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>