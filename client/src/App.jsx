import './App.css';

const App = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="m-5">TODO app</h1>
      <div className="row">
        <div className="col-xl-6">
          <div className="card">
            <h4 className="m-5">Create a TODO</h4>
            <form action="">
              <div className="container">
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="title" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="description" />
                </div>
                <div className="mb-3">
                  <input type="submit" className="form-control btn btn-danger" placeholder="description" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card">
            <h4 className="m-5">
              List of TODO's
            </h4>
            <div>
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">status</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td> <p className="badge bg-success">active</p> </td>
                    <td >
                      <a className="btn btn-dark" style={{ marginRight: "10px" }}>edit</a>
                      <a className="btn btn-danger">delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td> <p className="badge bg-success">active</p> </td>
                    <td >
                      <a className="btn btn-dark" style={{ marginRight: "10px" }}>edit</a>
                      <a className="btn btn-danger">delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Larry the Bird</td>
                    <td>Thornton</td>
                    <td> <p className="badge bg-success">active</p> </td>
                    <td >
                      <a className="btn btn-dark" style={{ marginRight: "10px" }}>edit</a>
                      <a className="btn btn-danger">delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
