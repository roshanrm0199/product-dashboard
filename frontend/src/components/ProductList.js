import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("createdAt");
    const [page, setPage] = useState(1);
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});

    const limit = 3;


    useEffect(() => {
        axios.get(`https://product-dashboard-5zm5.onrender.com/api/products?search=${search}&sort=${sort}&page=${page}`)
            .then(res => setProducts(res.data));
    }, [search, sort, page]);

    const del = async (id) => {
        await axios.delete(`https://product-dashboard-5zm5.onrender.com/api/products/${id}`);
        window.location.reload();
    };

    const saveEdit = async (id) => {
        await axios.put(`https://product-dashboard-5zm5.onrender.com/api/products/${id}`, editData);
        setEditId(null);
        window.location.reload();
    };

    return (
        <div className="card p-3">

            {/* Top Controls */}
            <div className="d-flex mb-3 gap-2">
                <input className="form-control"
                    placeholder="Search product"
                    onChange={e => setSearch(e.target.value)} />

                <select className="form-select"
                    onChange={e => setSort(e.target.value)}>
                    <option value="createdAt">Sort by Date</option>
                    <option value="price">Sort by Price</option>
                </select>
            </div>

            {/* Product Cards */}
            {products.map(p => (

                <div className="card mb-3 shadow-sm" key={p._id}>
                    <div className="row g-0">

                        {/* LEFT SIDE */}
                        <div className="col-md-9 p-3">

                            <div className="d-flex justify-content-between">
                                {editId === p._id ?
                                    <input className="form-control me-2"
                                        defaultValue={p.name}
                                        onChange={e => setEditData({ ...editData, name: e.target.value })} />
                                    :
                                    <h5>{p.name}</h5>
                                }

                                {editId === p._id ?
                                    <input className="form-control w-25"
                                        defaultValue={p.price}
                                        onChange={e => setEditData({ ...editData, price: e.target.value })} />
                                    :
                                    <h6 className="text-primary">₹ {p.price}</h6>
                                }
                            </div>

                            {editId === p._id ?
                                <textarea className="form-control mt-2"
                                    defaultValue={p.description}
                                    onChange={e => setEditData({ ...editData, description: e.target.value })} />
                                :
                                <p className="text-muted mt-2">{p.description}</p>
                            }

                            <small className="text-secondary">
                                Created: {new Date(p.createdAt).toLocaleString()}
                            </small>

                            <div className="mt-3">
                                {editId === p._id ?
                                    <button className="btn btn-success btn-sm me-2"
                                        onClick={() => saveEdit(p._id)}>Save</button>
                                    :
                                    <button className="btn btn-warning btn-sm me-2"
                                        onClick={() => { setEditId(p._id); setEditData(p); }}>
                                        Edit
                                    </button>
                                }

                                <button className="btn btn-danger btn-sm"
                                    onClick={() => del(p._id)}>Delete</button>
                            </div>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            {p.image &&
                                <img
                                    src={p.image}
                                    alt="product"
                                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                                />
                            }
                        </div>

                    </div>
                </div>

            ))}

            {/* Pagination */}
            <div className="d-flex justify-content-center gap-2 mt-3">
                <button
                    className="btn btn-secondary"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Prev
                </button>


                <button
                    className="btn btn-secondary"
                    disabled={products.length < limit}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>

        </div>
    );
}
