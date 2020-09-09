import Vue from "vue";
import axios from "axios";
import { Notification } from "element-ui";
Vue.prototype.$notify = Notification;

function request(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      const body = error.response.data;
      Notification.error({
        title: body.status + " ERROR",
        message: body.message
      });
      return Promise.reject(error);
    });
}

export default request;
