import axios from "axios";

const consumerApi = axios.create({
  baseURL: "https://api.test.soa-dev.net/api/v1",
});

export { consumerApi };
