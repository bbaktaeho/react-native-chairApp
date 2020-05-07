//const host = "https://chair-communication.herokuapp.com";
const host = "http://13.124.213.28:9000";
//const host = "http://localhost:9000";
// const host = "http://172.30.1.31:9000";

export default URL = {
  login: host + "/api/users/login",
  check: host + "/api/users/login/check",
  signup: host + "/api/users/signup",
  account: host + "/api/users/account",
  emailmodify: host + "/api/users/account/emailmodify",
  passwordmodify: host + "/api/users/account/passwordmodify",
  password: host + "/api/users/find/password",
  withdrawal: host + "/api/users/withdrawal",
  posturesave: host + "/api/statistic/date",
  date: host + "/api/statistic/date", //일간통계
  month: host + "/api/statistic/month", //월간통계
  statisticall: host + "/api/statistic/all", //총통계
  postureinference: host + "/api/postures/inference",
};
