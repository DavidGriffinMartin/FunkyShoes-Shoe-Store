import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

const Create = (props) => {
  const history = useHistory();

  const URL = "https://pipiopiproj.herokuapp.com/items/";

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    img: "",
  });

  const createItem = async (item) => {
    await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(item),
    });
    props.getShoes();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createItem(form);
    history.push("/");
  };

  return (
    <Fragment>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Create Your Funky Shoes</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">Name:</label>
                <input
                  className="form-control"
                  type="text"
                  value={form.name}
                  name="name"
                  placeholder="Name your shoes"
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="col-12">
                <label className="form-label">Description:</label>
                <input
                  className="form-control"
                  type="text"
                  value={form.description}
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="col-12">
                <label className="form-label">Price:</label>
                <input
                  className="form-control"
                  type="text"
                  value={form.price}
                  name="price"
                  placeholder="Price"
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="col-12">
                <label className="form-label">Image:</label>
                <input
                  className="form-control"
                  type="text"
                  value={form.image}
                  name="img"
                  placeholder="Enter Image"
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-lg btn-secondary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;
