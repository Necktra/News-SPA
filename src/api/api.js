import axios from "axios"

const instance = axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0/"
});

export const newsAPI = {
    getNews() {
        return instance.get(`topstories.json?`).then(response => {
            return response.data
        });
    }
}