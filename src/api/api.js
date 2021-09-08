import axios from "axios"

const instance = axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0/"
});

export const newsAPI = {
    getNews() {
        return instance.get(`newstories.json?`).then(response => {
            let promises = [];

            for (let i = 0; i < 100; i++) {
                promises.push(instance.get(`item/${response.data[i]}.json?`))
            }

            return Promise.all(promises)

        }).then(responses => {
            return responses.map(news => {
                return news.data
            });
        })
    },

    getCurrentNewsInfo(id) {
        return instance.get(`item/${id}.json?`).then(response => {
            return response.data;
        });
    },

    getCommentInfo(id) {
        return instance.get(`item/${id}.json?`).then(response => {

            if (!response.data.kids) {
                return []
            }

            let promises = [];

            for (let i = 0; i < response.data.kids.length; i++) {
                promises.push(instance.get(`item/${response.data.kids[i]}.json?`))
            }

            return Promise.all(promises)

        }).then(responses => {

            return responses.map(comments => {
                return comments.data
            });

        });
    }

}