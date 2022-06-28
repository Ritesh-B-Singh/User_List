import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddShop = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [salary, setSalary] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector((state) => state);

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkFirstName = users.find(user => user.firstName === firstName && firstName);
        const checkLastName = users.find(user => user.lastName === lastName && lastName);

        if (!firstName || !lastName || !age || !salary) {
            return toast.warning("Please fill in all fields!");
        }

        if (checkFirstName && checkLastName) {
            return toast.error("User name already exist!")
        }

        const data = {
            id: users[users.length - 1].id + 1,
            firstName,
            lastName,
            age,
            salary
        }

        dispatch({ type: "ADD_USER", payload: data });
        toast.success("User added successfully!!");
        navigate('/table');
    }

    const handleClear = () => {
        setAge("")
        setFirstName("")
        setLastName("")
        setSalary("")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="display-3 text-center">
                    Add User
                </div>
            </div>
            <div className="col-md-6 shadow mx-auto p-5">
                <form onSubmit={handleSubmit} >
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
                    <div className="form-group mb-3">
                        <div className="form-row d-flex justify-content-between">
                            <div className="form-group">
                                <input
                                    className="btn btn-block btn-dark"
                                    type="submit"
                                    value="Add User"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="btn btn-block btn-danger"
                                    type="button"
                                    value="Clear"
                                    onClick={handleClear}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddShop