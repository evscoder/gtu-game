import axios from "axios";

const getFriendsRequest = async () => {
    const {data} = await axios.get("/api/friends");

    return { data };
};

export default getFriendsRequest;
