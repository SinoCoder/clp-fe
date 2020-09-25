<template>
  <div v-if="date != '' && date != undefined">
    <i v-if="icon" class="el-icon-time"></i>
    {{ time }}
  </div>
  <div v-else>
    <i v-if="icon" class="el-icon-time"></i>
    {{ getTimerFormat(now) }}
  </div>
</template>

<script>
Date.prototype.format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

export default {
  props: {
    date: String,
    now: Date,
    icon: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      time: ""
    };
  },
  methods: {
    getDateFormat(date) {
      return new Date(date).format("yyyy-M-d h:m:s");
    },
    getTimerFormat(date) {
      return new Date(date).format("yyyy-M-d h:mm:ss");
    }
  },
  watch: {
    date: function() {
      this.time = this.getDateFormat(this.date);
    }
  },
  mounted() {
    this.time = this.getDateFormat(this.date);
  }
};
</script>

<style></style>
