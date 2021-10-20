import React from "react";

const NewsItems = (props) => {
    let { title, description, imageUrl, newsUrl, date, author } = props;
    return (
        <div>
            <div
                className="card"
                style={{
                    height: "502px",
                    boxShadow:
                        " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
            >
                <img
                    style={{ height: "286px" }}
                    src={imageUrl}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            By {author ? author : "unknown"} on {new Date(date).toGMTString()}
                        </small>
                    </p>
                    <a
                        style={{ background: "#051937" }}
                        href={newsUrl}
                        className="btn btn-dark"
                    >
                        Read Full News
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsItems;
