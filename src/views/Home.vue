<template>
  <div class="home">
    <div class="warp__header">
      <div class="header-lf">
        <div class="header-ico">
          <img class="header-ico-img" src="../assets/ico-touxiang.png" alt="" />
        </div>
        <div class="header-info">
          <div class="info-name">宋小雅</div>
          <div class="info-num">员工号：22050027</div>
        </div>
      </div>
      <div class="header-config"></div>
    </div>
    <div class="warp__main">
      <div class="main-type">
        <van-field readonly required clickable name="picker" :value="value1" label="休假类型" placeholder="点击选择类型"
          @click="showPicker = true" input-align="right">
          <template #button>
            <div class="icon-style">
              <div class="is-right"></div>
            </div>
          </template>
        </van-field>
        <van-popup v-model="showPicker" position="bottom">
          <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
        </van-popup>
      </div>
      <div class="main-list">
        <div class="main-header">
          <div class="main-header-lf">明细-1</div>
          <div class="main-header-rt">
            <div class="header-rt-ico"></div>
            删除
          </div>
        </div>
        <div class="main-items">
          <van-field label="开始时间" required placeholder="选择开始时间" v-model="fieldValue" @click="showFlag"
            input-align="right">
            <template #button>
              <div class="icon-style">
                <div class="is-rili"></div>
              </div>
            </template>
          </van-field>
          <van-popup v-model="showStarDatetimePicker" position="bottom">
            <van-datetime-picker v-model="currentDate" type="datetime" title="选择完整时间" :min-date="minDate"
              :max-date="maxDate" @confirm="onConfirm1" :formatter="formatter" @cancel="closeStarDatetimePicker" />
          </van-popup>
        </div>
        <div class="main-items">
          <van-field label="结束时间" required placeholder="选择结束时间" v-model="fieldValue1" input-align="right"
            @click="showFlag1">
            <template #button>
              <div class="icon-style">
                <div class="is-rili"></div>
              </div>
            </template>
          </van-field>
          <van-popup v-model="showEndDatetimePicker" position="bottom">
            <van-datetime-picker v-model="currentDate1" type="datetime" title="选择完整时间" :min-date="minDate1"
              :max-date="maxDate1" @confirm="onConfirm2" :formatter="formatter1" @cancel="closeEndDatetimePicker" />
          </van-popup>
        </div>
        <div class="main-items">
          <van-field v-model="timerVal" label="休假时长" placeholder="自动计算" input-align="right">
          </van-field>
        </div>
        <div class="main-items">
          <van-field v-model="message" rows="3" autosize label="请假说明" type="textarea" placeholder="如有详细说明,请输入"
            input-align="right" maxlength="100" show-word-limit>
          </van-field>
        </div>
      </div>
      <div class="main-add">
        <i class="ico-add"></i>
        添加明细
      </div>
    </div>
    <div class="warp__btnlist">
      <div class="btn-items">撤回</div>
      <div class="btn-items submit">提交</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Toast } from "vant";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      columns: ["年假", "婚假", "产假"],
      showPicker: false,
      showStarDatetimePicker: false,
      showEndDatetimePicker: false,
      value1: "",
      currentDate: new Date(),
      fieldValue: "",
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(2055, 10, 1),
      currentDate: new Date(),
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      hh: new Date().getHours(),
      mm: new Date().getMinutes(),
      formatter(type, val) {
        if (type === "year") {
          return `${val}年`;
        } else if (type === "month") {
          return `${val}月`;
        }
        return val;
      },
      fieldValue1: "",
      minDate1: new Date(2000, 0, 1),
      maxDate1: new Date(2055, 10, 1),
      currentDate1: new Date(),
      year1: new Date().getFullYear(),
      month1: new Date().getMonth() + 1,
      day1: new Date().getDate(),
      hh1: new Date().getHours(),
      mm1: new Date().getMinutes(),
      message: "",
      timerVal: "",
      formatter1(type, val) {
        if (type === "year") {
          return `${val}年`;
        } else if (type === "month") {
          return `${val}月`;
        }
        return val;
      },
    };
  },
  methods: {
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast("取消");
    },
    onConfirm(value) {
      this.value1 = value;
      this.showPicker = false;
      this.showStarDatetimePicker = false;
    },
    onConfirmStarDate(val) {
      this.showStarDatetimePicker = false;
    },
    showFlag() {
      this.showStarDatetimePicker = true;
    },
    onConfirm1(value) {
      this.year = new Date(value).getFullYear();
      this.month = new Date(value).getMonth() + 1;
      this.day = new Date(value).getDate();
      this.hh = new Date(value).getHours();
      this.mm = new Date(value).getMinutes();
      this.fieldValue =
        this.month +
        "/" +
        this.day +
        " " +
        this.hh +
        ":" + this.mm
      this.showStarDatetimePicker = false;
    },
    onConfirm2(value) {
      this.year1 = new Date(value).getFullYear();
      this.month1 = new Date(value).getMonth() + 1;
      this.day1 = new Date(value).getDate();
      this.hh1 = new Date(value).getHours();
      this.mm1 = new Date(value).getMinutes();
      this.fieldValue1 =
        this.month1 +
        "/" +
        this.day1 +
        " " +
        this.hh1 +
        ":" + this.mm1
      this.showEndDatetimePicker = false;
    },
    showFlag1() {
      this.showEndDatetimePicker = true;
    },
    closeStarDatetimePicker() {
      this.showStarDatetimePicker = false;
    },
    closeEndDatetimePicker() {
      this.showEndDatetimePicker = false;
    },
  },
};
</script>

<style 
lang="less" scoped>
.home {
  font-size: 0.3rem;
  background: rgb(240, 240, 242);
  padding: 0.2rem;
  position: relative;
  box-sizing: border-box;
  height: 100vh;

  .warp__header {
    border-radius: 0.12rem;
    height: 1.81rem;
    background: white;
    padding: 0 0.25rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-lf {
      display: flex;
      align-items: center;
      justify-content: center;

      .header-ico {
        width: 1.2rem;
        height: 1.2rem;
        border: 0.03rem solid rgba(72, 113, 192, 0.3);
        border-radius: 50%;

        .header-ico-img {
          object-fit: cover;
          height: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: -1;
        }
      }

      .header-info {
        text-align: left;
        margin-left: 0.24rem;
        line-height: 0.33rem;

        .info-name {
          font-size: 0.4rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 0.2rem;
        }

        .info-num {
          font-weight: 500;
          color: #808080;
          font-size: 0.26rem;
        }
      }
    }

    .header-config {
      width: 0.36rem;
      height: 0.36rem;
      background: url("../assets/ico-config.png") no-repeat;
      background-size: 100%;
      float: right;
    }
  }

  .warp__main {
    border-radius: 0.12rem;

    .main-type {
      /* height: 0.9rem; */
      margin: 0.18rem 0;
      border-radius: 0.12rem;
      box-sizing: border-box;

      .icon-style {
        width: 0.3rem;
        height: 0.3rem;
        display: flex;
        justify-content: center;
        align-content: center;

        .is-right {
          width: 0.15rem;
          height: 0.25rem;
          background: url("../assets/ico-right.png") no-repeat;
          background-size: 100%;
        }
      }
    }

    .main-list {
      border-radius: 0.12rem;
      background: #ffffff;
      margin: 0.18rem 0;
      box-sizing: border-box;
      border: 1px solid #6c97e7;

      .main-header {
        height: 0.73rem;
        background: #6c97e7;
        border-radius: 0.1rem 0.1rem 0px 0px;
        display: flex;
        padding: 0 0.2rem;
        box-sizing: border-box;
        font-size: 0.26rem;
        align-items: center;
        justify-content: space-between;
        color: white;

        .main-header-rt {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .header-rt-ico {
            width: 0.32rem;
            /* display: inline-block; */
            height: 0.32rem;
            background: url("../assets/ico-laji3.png") no-repeat;
            background-size: 100%;
            margin-right: 0.06rem;
          }
        }
      }

      .main-items {
        position: relative;

        &::after {
          position: absolute;
          content: "";
          width: calc(100% - 0.4rem);
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
          height: 0.02rem;
          background: #f0f0f2;
        }

        &:last-of-type {
          &::after {
            display: none;
          }
        }

        .icon-style {
          width: 0.3rem;
          height: 0.3rem;
          display: flex;
          justify-content: center;
          align-content: center;

          .is-rili {
            width: 0.3rem;
            height: 0.3rem;
            background: url("../assets/ico-rili.png") no-repeat;
            background-size: 100%;
          }
        }
      }
    }

    .main-add {
      height: 0.9rem;
      font-weight: 500;
      color: #427ce7;
      line-height: 0.9rem;
      background: #ffffff;
      border-radius: 0.12rem;
      font-size: 0.3rem;
      color: #427ce7;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      justify-content: center;

      .ico-add {
        width: 0.3rem;
        height: 0.3rem;
        background: url("../assets/ico-add.png") no-repeat;
        background-size: 100%;
        margin-right: 0.14rem;
      }
    }
  }

  .warp__btnlist {
    position: fixed;
    height: 1.18rem;
    background: white;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.3rem;
    box-sizing: border-box;

    .btn-items {
      background: rgb(217, 229, 250);
      width: 100%;
      color: #427ce7;
      height: 0.92rem;

      font-weight: bold;
      border-radius: 0.12rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &.submit {
        margin-left: 0.23rem;
        background: #427ce7;
        color: #ffffff;
      }
    }
  }

  .warp__picker {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }
}

/deep/ .van-cell {
  padding: 0.25rem 0.2rem;
  box-sizing: border-box;
  /* line-height: 0.9rem; */
  font-size: 0.3rem;
  border-radius: 0.12rem;

  .van-field__label {
    color: #1a1a1a;
    font-size: 0.3rem;
    font-weight: bold;
  }
}

/deep/ .van-cell--required {
  &:before {
    content: "";
  }

  .van-cell__title.van-field__label {
    span {
      position: relative;

      &:before {
        position: absolute;
        right: -0.2rem;
        width: 0.13rem;
        height: 0.13rem;
        background: url("../assets/ico-redstar.png") no-repeat;
        background-size: 100%;
        content: "*";
        top: 50%;
        transform: translateY(-50%);
        font-size: 0;
      }
    }
  }
}
</style>