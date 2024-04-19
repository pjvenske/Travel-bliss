export default function BlogDetails({selectedArticle}) {
    return (
        <div className="article-detail">
            <div className="banner">
                <h1>{selectedArticle.title}</h1>
                <img src={selectedArticle.img} />
                <h3>{selectedArticle.description}</h3>
                <p>{selectedArticle.body}</p>
            </div>
        </div>
    )
}