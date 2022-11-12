import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useHistory } from 'react-router-dom';



const Details = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);

    const history = useHistory();


    const getdata = async () => {

        const res = await fetch(`https://crudappreactjs.herokuapp.com/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`https://crudappreactjs.herokuapp.com/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            history.push("/");
        }

    }

    return (
        <div className="container mt-5 ">
            <h1 style={{ fontWeight: 600 }}>WELCOME MY FRIEND!!!😊😊😊</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent >
                    <div className="add_btn mt-4">
                        <NavLink to={`/edit/${getuserdata._id}`}>  <button className="bt mx-2"><CreateIcon /></button></NavLink>
                        <button onClick={() => deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 80 }} alt="profile" />
                            <p className="mt-3">Name: <span style={{ fontWeight: 900 }} >{getuserdata.name}</span></p>
                            <p className="mt-3">Age: <span style={{ fontWeight: 900 }}>{getuserdata.age}</span></p>
                            <p className="mt-3"><MailOutlineIcon />Email: <span style={{ fontWeight: 900 }}>{getuserdata.email}</span></p>
                            <p className="mt-3"><WorkIcon />Occupation: <span style={{ fontWeight: 900 }}>{getuserdata.work}</span></p>
                        </div>

                        <div className="right_view  col-lg-6 col-md-6 col-12 mt-5">

                            <p className="mt-5"><PhoneAndroidIcon />Mobile: <span style={{ fontWeight: 900 }}>+91 {getuserdata.mobile}</span></p>
                            <p className="mt-3"><LocationOnIcon />Location: <span style={{ fontWeight: 900 }}>{getuserdata.add}</span></p>
                            <p className="mt-3">Description: <span style={{ fontWeight: 900 }}>{getuserdata.desc}</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Details
