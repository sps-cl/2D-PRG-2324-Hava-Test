class News {
    constructor() {
        this.articles = [];
        this.subscribers = [];
    }
    add_subscriber(subscriber) {
        this.subscribers.push(subscriber);
        return this;
    }
    alert_subscribers() {
        this.subscribers.forEach(subscriber => {subscriber.update(this)});
        return this;
    }
    add_article(article) {
        this.articles.push(article);
        this.alert_subscribers();
        return this;
    }
}
class NewSubscriber {
    constructor(name) {
        this.name = name;
        return this;
    }
    update(news) {
        console.log("Hello " + this.name + ", new article just went out make sure to check it out: " + news.articles[news.articles.length - 1]);
        return this;
    }
}

let news = new News();
news.add_subscriber(new NewSubscriber("user 1"))
    .add_subscriber(new NewSubscriber("user 2"))
    .add_subscriber(new NewSubscriber("user 3"))
    .add_article("Exiting news here");