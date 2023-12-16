export const PostViajes = () => {
  return (
    <div className="container-fluid d-flex flex-colum justify-content-center aling-items-center">
      <h1>Post Page</h1>
      <div className="w-50 d-flex flex-row gap-2 mt-4">
        <button className="btn btn-succes">crear</button>
        <input type="search" placeholder="Search" className="form-control" />
      </div>
      <div className="w-50 d-flex flex-row gap-2 mt-4">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
