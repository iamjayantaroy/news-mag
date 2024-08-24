const NewItem = ({ title, description, news, src }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "400px" }}
    >
      <img
        src={src}
        style={{ height: "200px", width: "360px", objectFit: "contain" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p
          className="card-text"
          style={{ fontSize: "20px", alignItems: "left", width: "100%" }}
        >
          {description ? description.slice(0, 90) : "News"}
        </p>
        <a href={news} className="btn btn-primary">
          Readmore
        </a>
      </div>
    </div>
  );
};

export default NewItem;
