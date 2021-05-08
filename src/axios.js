import axios from "axios";
const instance = axios.create();
instance.defaults.baseURL = 'https://builder-6b86c-default-rtdb.firebaseio.com';
export default instance;

