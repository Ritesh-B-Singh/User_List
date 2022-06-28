import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Table = () => {

    const users = useSelector((state) => state);
    const dispatch = useDispatch();

    const deleteUser = (id) => {
        dispatch({ type: "DELETE_USER", payload: id });
        toast.success("Shop deleted successfully!!");
    }

    return (
        <>
            <div className="container">
                <div className="col-md-12 my-5 d-flex justify-content-start text-right">
                    <Link to="/" className="btn btn-outline-dark" >Back</Link>
                </div>
                <div className="row">
                    <div className='col-12'>
                        <div className="col-md-8 mx-auto" style={{ width: "1000px" }}>
                            <div class="table-responsive my-custom-scrollbar table-wrapper-scroll-">
                                <table className="table table-hover" id='my_table'>
                                    <thead className="table-header bg-dark text-white">
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Salary</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.length > 0 ? (
                                            users.map((user, id) => (
                                                <tr key={id}>
                                                    <td>{id + 1}</td>
                                                    <td>{user.firstName}</td>
                                                    <td>{user.lastName}</td>
                                                    <td>{user.age}</td>
                                                    <td>{user.salary}</td>
                                                    <td className='d-flex flex-column'>
                                                        <Link
                                                            to={`/edit/${user.id}`}
                                                            className="btn btn-sm btn-primary mb-1"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            type="button"
                                                            onClick={() => deleteUser(user.id)}
                                                            className="btn btn-sm btn-danger"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <th>No User found</th>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table