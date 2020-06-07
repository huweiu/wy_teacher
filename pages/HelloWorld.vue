<template>
  <div>
    <!-- {{dataInfo}} -->
    <br>
    <br>
    <div class="calender">
      <div class="top">
        <div class="top_date">{{ year }}年{{ month }}月&nbsp;&nbsp; {{animals()}}年</div>
        <div class="btn_wrap">
          <ul>
            <li @click="perMonth()">上个月</li>
            <li @click="today()">今天</li>
            <li @click="nextMonth()">下个月</li>
          </ul>
        </div>
      </div>

      <div class="date_wrap">
        <ul class="week">
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li>六</li>
          <li>日</li>
        </ul>
        <ul class="day">
          <li
            v-for="(item, index) in days"
            :key="index"
            :class="{ now: isNow(item.day), isBlur: item.type !== 'same', active: activeIndex === index }"
            @click="handlerClick(item, index)"
          >
            <p >{{ item.day }}</p>
            <!-- <span >{{item.lunar[6]==='初一'?item.lunar[5]:item.lunar[6]}}</span> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import { Lunar } from './Lunar' // 阳历转农历
export default {
  name: 'calender',
  data () {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      days: [],
      dataInfo: '',
      activeIndex: ''
    }
  },
  mounted () {
    this.getDate()
  },
  methods: {
    // 生肖天干地支 年
    animals () {
      let year = this.year
      let month = this.month
      let list = []
      list = year && Lunar.toLunar(year, month, 1)
      return list && (list[3] + list[4])
    },
    // 初始化 当月数据
    getDate () {
      let now = new Date()
      this.year = now.getFullYear()
      this.month = now.getMonth() + 1
      this.pushDays()
    },
    // 得到当前年这个月份有多少天
    getDays (y, m) {
      return new Date(y, m, 0).getDate()
    },
    // 得到当前年，这个月的一号是周几
    getWeek () {
      let now = new Date()
      now.setFullYear(this.year)
      now.setMonth(this.month - 1)
      now.setDate(1)
      return now.getDay()
    },
    // //将这个月多少天加入数组days
    pushDays () {
      this.days = []
      let year = this.year
      let month = this.month
      let days = this.getDays(year, month)
      let week = this.getWeek(year, month) || 7
      for (let i = 1; i <= days; i++) {
        let obj = {
          year: year,
          month: month,
          day: i,
          lunar: Lunar.toLunar(year, month, i),
          isBlur: true,
          type: 'same'
        }
        this.days.push(obj)
      }
      // 将上个月要显示的天数加入days
      var lastMonthDays = this.getDays(year, month - 1)
      let preMonth = month - 1
      let preYear = year
      if (preMonth < 1) { // 当小于1月时 重置为12 年份减1
        preMonth = 12
        preYear = preYear - 1
      }
      for (let k = 0; k < week - 1; k++) {
        let obj = {
          year: preYear,
          month: preMonth,
          day: lastMonthDays - k,
          lunar: Lunar.toLunar(preYear, preMonth, lastMonthDays - k),
          isBlur: false,
          type: 'last'
        }
        this.days.unshift(obj)
      }
      let len = this.days.length
      // //将下个月要显示的天数加入days
      let nextMonth = month + 1
      let nextYear = year
      if (nextMonth > 12) { // 当大于12月时 重置为1 年份加1
        nextMonth = 1
        nextYear = preYear + 1
      }
      for (let j = 1; j <= 42 - len; j++) {
        let obj = {
          year: nextYear,
          month: nextMonth,
          day: j,
          lunar: Lunar.toLunar(nextYear, nextMonth, j),
          isBlur: false,
          type: 'next'
        }
        this.days.push(obj)
      }
      // 返回个promise 为之后点击上月下月提供一个异步操作
      return new Promise((resolve, reject) => {
        resolve()
      })
    },
    // 是否当天
    isNow (days) {
      let now = new Date()
      return (
        now.getFullYear() === this.year &&
        now.getMonth() + 1 === this.month &&
        now.getDate() === days
      )
    },
    // 日期点击事件
    handlerClick (item, index) {
      this.activeIndex = index
      this.dataInfo = item
      // 当点击区域为上个月或下个月的日期时
      if (item.type === 'last') {
        this.perMonth(item)
      } else if (item.type === 'next') {
        this.nextMonth(item)
      }
    },
    // 上个月
    perMonth (item) {
      this.activeIndex = ''
      if (this.month <= 1) {
        this.month = 13
        this.year = this.year - 1
      }
      this.month = this.month - 1
      this.pushDays().then(() => {
        if (item) {
          this.days.forEach((t, i) => {
            if (t.day === item.day && t.month === item.month) {
              this.activeIndex = i
            }
          })
        }
      })
    },
    // 上个月
    nextMonth (item) {
      this.activeIndex = ''
      if (this.month >= 12) {
        this.month = 0
        this.year = this.year + 1
      }
      this.month = this.month + 1
      this.pushDays().then(() => {
        if (item) {
          this.days.forEach((t, i) => {
            if (t.day === item.day && t.month === item.month) {
              this.activeIndex = i
            }
          })
        }
      })
    },
    // 回到今天
    today () {
      this.activeIndex = ''
      this.getDate()
    }
  }
}
</script>

<style lang="scss" scoped>
.calender {
  width: 600px;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 0 auto;
  .top {
    height: 80px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn_wrap {
      ul {
        display: flex;
        li {
          padding: 10px 15px;
          border: 1px solid #ccc;
          margin-right: -1px;
          cursor: pointer;
          &:hover {
            background: #18bd7e !important;
            color: #fff;
          }
        }
      }
    }
  }
  .date_wrap {
    .week {
      display: flex;
      line-height: 80px;
      justify-content: space-around;
      li {
        font-size: 18px;
      }
    }
    .day {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height:80px;
        // line-height: 30px;
        text-align: center;
        flex-shrink: 0;
        width: 14%;
        border: 1px solid #ccc;
        margin-right: -1px;
        margin-bottom: -1px;
        cursor: pointer;
        p{
          font-size:20px;
        }
        span{
          font-size:14px;
        }
        transition: all 0.2s;
        &:nth-of-type(7n - 1),
        &:nth-of-type(7n) {
          background: #eee;
        }
        &.isBlur {
          position:relative;
          color:#ccc;
          &:before{
            position:absolute;
            top:0px;
            bottom:0px;
            left:0px;
            right:0px;
            content:'';
            display:inline-block;
            width:100%;
            height:100%;
            background: rgba(255, 255, 255, 0.6);
          }
        }
        &.now {
          box-shadow: 0px 0px 20px 0px #18bd7e inset;
          color:#18bd7e;
          font-size: 18px;
        }
        &.active {
          background: #18bd7e !important;
          color: #fff;
          box-shadow:none;
        }
        &:hover {
          box-shadow: 0px 0px 20px 0px #ccc inset;
        }
      }
    }
  }
}
</style>


