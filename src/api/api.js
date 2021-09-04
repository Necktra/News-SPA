import axios from "axios"

const instance = axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0/"
});

export const newsAPI = {
    getNews() {
        let responseArray = [];
        return instance.get(`topstories.json?`).then(response => {
            let promises = [];
            for (let i = 0; i < 100; i++) {
                promises.push(instance.get(`item/${response.data[i]}.json?`))
            }
            return Promise.all(promises)
        }).then(responses => {
            return responses;
        })

    },

    getCurrentNewsInfo(id) {
        return instance.get(`item/${id}.json?`).then(response => {
            //debugger;
            return {
                id: id,
                title: response.data.title,
                score: response.data.score,
                author: response.data.by,
                date: response.data.time,

            }
        });
    }
}