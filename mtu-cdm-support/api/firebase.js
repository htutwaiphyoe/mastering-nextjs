import axios from "axios";

export default axios.create({
    baseURL: "https://mtucdmsupport-default-rtdb.firebaseio.com/",
});
