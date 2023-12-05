import axios from "axios";

const getRatingRequest = async () => {
    const {data} = await axios.get("/api/rating");

    return { data };
};

export default getRatingRequest;
