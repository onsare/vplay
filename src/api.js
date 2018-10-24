import axios from "axios";

const apiUrl = "http://api.smartduka.busaracenterlab.org";

export default {
  user: {
    register: user =>
      axios
        .post(`${apiUrl}/api/v1/users/#register`, { user })
        .then(res => res.data.user),
    login: credentials =>
      axios
        .post(`${apiUrl}/user/login`, { credentials })
        .then(res => res.data.user)
  }
};
