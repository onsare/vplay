import axios from "axios";

const baseUrl = "http://api.smartduka.busaracenterlab.org";

export default {
  user: {
    register: user =>
      axios
        .post(`${baseUrl}/api/v1/users/#create-user`, {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          password: user.password,
          location: user.location === "Nairobi" ? 4 : 5
        })
        .then(res => res.data),
    login: user =>
      axios
        .post(`${baseUrl}/api/v1/users/#login`, {
          email: user.email,
          phone_number: user.phone,
          password: user.password
        })
        .then(res => res.data)
  },
  videos: {
    fetchVideos: () =>
      axios
        .get(
          `${"https://cors-anywhere.herokuapp.com/"}${baseUrl}/api/v1/videos`
        )
        .then(res => res.data),
    fetchCategories: () =>
      axios
        .get(
          `${"https://cors-anywhere.herokuapp.com/"}${baseUrl}/api/v1/categories`
        )
        .then(res => res.data)
  }
};
