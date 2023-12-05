import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {friends, rating} from "../data/data";

const useMockAdapter = () => {
    const mock = new MockAdapter(axios, {delayResponse: 600});

    mock.onGet("/api/friends").reply(200, friends);
    mock.onGet("/api/rating").reply(200, rating);
};

export default useMockAdapter;
