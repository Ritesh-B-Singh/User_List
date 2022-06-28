import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditShop = () => {

    const { id } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [salary, setSalary] = useState("");
    const dispatch = useDispatch();
    const users = useSelector((state) => state);
    const currentUser = users.find((user) => user.id === parseInt(id));
    const navigate = useNavigate();

    useEffect(() => {
        setFirstName(currentUser.firstName);
        setLastName(currentUser.lastName);
        setAge(currentUser.age);
        setSalary(currentUser.salary);
    }, [currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkfirstName = users.find(user => user.id !== parseInt(id) && user.firstName === firstName);
        const checklastName = users.find(user => user.id !== parseInt(id) && user.firstName === lastName);

        if (!firstName || !lastName || !age || !salary) {
            return toast.warning("Please fill in all fields!");
        }

        if (checkfirstName && checklastName) {
            return toast.error("Shop name already exist!")
        }

        const data = {
            id: parseInt(id),
            firstName,
            lastName,
            age,
            salary
        }

        dispatch({ type: "UPDATE_USER", payload: data });
        toast.success("User updated successfully!!");
        navigate('/table');
    }


    return (
        <div className="container">
            <div className="row">
                <div className="display-3 text-center">
                    Edit User {parseInt(id) + 1}
                </div>
            </div>
            <div className="col-md-6 shadow mx-auto p-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <div className="form-row d-flex justify-content-between">
                            <div className="form-group col-md-5">
                                <label for="inputName">First Name</label>
                                <input type="text" className="form-control" id="inputName" placeholder="First Name"
                                    value={firstName} onChange={e => setFirstName(e.target.value)} />
                            </div>
                            <div className="form-group col-md-5">
                                <label for="inputName">Last Name</label>
                                <input type="text" className="form-control" id="inputName" placeholder="Last Name"
                                    value={lastName} onChange={e => setLastName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="form-row d-flex justify-content-between">
                            <div className="form-group col-md-5">
                                <label for="inputName">Age</label>
                                <input type="number" className="form-control" id="inputName" placeholder="Age"
                                    value={age} onChange={e => setAge(e.target.value)} />
                            </div>
                            <div className="form-group col-md-5">
                                <label for="inputName">Salary</label>
                                <input type="number" className="form-control" id="inputName" placeholder="Salary"
                                    value={salary} onChange={e => setSalary(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Update User
                        </button>
                        <Link
                            type="button"
                            className="btn btn-danger ms-2"
                            onClick={() => navigate("/table")}
                            to="/"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditShop