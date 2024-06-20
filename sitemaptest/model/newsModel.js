class NewsModel {
  constructor({
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  }) {
    this.source = source.name;
    this.author = author;
    this.title = title;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
    this.publishedAt = new Date(publishedAt);
    this.content = content;
  }

  static fromAPI(data) {
    return new NewsModel({
      source: data.source,
      author: data.author,
      title: data.title,
      description: data.description,
      url: data.url,
      urlToImage: data.urlToImage,
      publishedAt: data.publishedAt,
      content: data.content,
    });
  }
}

export default NewsModel;
