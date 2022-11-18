import React, { useState } from "react";
import banner from "assets/img/pws-banner.png";
import title from "assets/img/pws-title.png";
import { Button, TextField, Typography } from "@mui/material";
import { ReactComponent as ArrowRight } from "assets/svg/fi-ss-arrow-right.svg";
import { useDispatch } from "react-redux";
import axios from "axios";

const Form = (props) => {
  const title = props.title;
  // const dispatch = useDispatch();
  const [state, setState] = useState({
    category: "",
    academyName: "",
    venueName: "",
    sportsDetail: "",
    sportsSpecification: "",
    name: "",
    phone: "",
    email: "",
    website: "",
    status: "",
  });

  const handleOnSubmit = async (e) => {
    const payload = {
      ...state,
      category: title,
      academyName: state.academyName,
      venueName: state.venueName,
      sportsDetail: state.sportsDetail,
      sportsSpecification: state.sportsSpecification,
      name: state.name,
      phone: state.phone,
      email: state.email,
      website: state.website,
      status: state.status,
    };
    console.log(payload, "<><><>");
    // try {
    //   const payload = {
    //     category: state.category,
    //     academyName: state.academyName,
    //     venueName: state.venueName,
    //     sportsDetail: state.sportsDetail,
    //     sportsSpecification: state.sportsSpecification,
    //     name: state.name,
    //     phone: state.phone,
    //     email: state.email,
    //     website: state.website,
    //     status: state.status,
    //   };
    //   const { data } = await axios.post("localhost:3001/partners", payload);
    // } catch (error) {
    //   console.log(error)
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setState({ [name]: value });
  };

  return (
    <div id="formPartner-modal">
      {/* ////Academy Form  */}
      {title === "Academy" ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginBottom: "5%",
            }}
          >
            <Typography
              sx={{
                color: "#C95454",
                fontWeight: "800",
              }}
            >
              Information Details
            </Typography>
            <h5>Join as a</h5>
            <TextField
              disabled
              id="outlined-disabled"
              value={title}
              style={{
                backgroundColor: "#EAEAEA",
              }}
              // onChange={(e) => setState({ category: title })}
              // onChange={handleChange}
            />
            <h5>Academy Name</h5>
            <TextField
              id="outlined-disabled"
              // defaultValue="Academy Persija Jakarta"
              value={state.academyName}
              style={{
                backgroundColor: "#EAEAEA",
              }}
              placeholder="ex. Academy Manchester United"
              name="academyName"
              // onChange={(e) => setState({ academyName: e.target.value })}
              onChange={handleChange}
            />
            <h5>Sports Detail</h5>
            <TextField
              id="outlined-disabled"
              // defaultValue="Soccer"
              placeholder="ex. Soccer"
              style={{
                backgroundColor: "#EAEAEA",
              }}
              value={state.sportsDetail}
              name="sportsDetail"
              // onChange={(e) => setState({ sportsDetail: e.target.value })}
              onChange={handleChange}
            />
          </div>
        </>
      ) : null}
      {/* ///Coach Form  */}
      {title === "Coach" ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginBottom: "5%",
            }}
          >
            <Typography
              sx={{
                color: "#C95454",
                fontWeight: "800",
              }}
            >
              Information Details
            </Typography>
            <h5>Join as a</h5>
            <TextField
              disabled
              id="outlined-disabled"
              value={title}
              style={{
                backgroundColor: "#EAEAEA",
              }}
            />
            <h5>Sport Specification</h5>
            <TextField
              id="outlined-disabled"
              // defaultValue={title}
              placeholder="ex. Soccer"
              style={{
                backgroundColor: "#EAEAEA",
              }}
              value={state.sportsSpecification}
              name="sportsSpecification"
              // onChange={(e) =>
              //   setState({ sportsSpecification: e.target.value })
              // }
              onChange={handleChange}
            />
          </div>
        </>
      ) : null}
      {/* //Vendor Form */}
      {title === "Vendor" ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginBottom: "5%",
            }}
          >
            <Typography
              sx={{
                color: "#C95454",
                fontWeight: "800",
              }}
            >
              Information Details
            </Typography>
            <h5>Join as a</h5>
            <TextField
              disabled
              id="outlined-disabled"
              style={{
                backgroundColor: "#EAEAEA",
              }}
              value={title}
            />
            <h5>Venue Name</h5>
            <TextField
              id="outlined-disabled"
              // defaultValue={title}
              placeholder="ex. Man United Field"
              style={{
                backgroundColor: "#EAEAEA",
              }}
              value={state.venueName}
              // onChange={(e) => setState({ venueName: e.target.value })}
              onChange={handleChange}
              name="venueName"
            />
            <h5>Sports Detail</h5>
            <TextField
              id="outlined-disabled"
              // defaultValue={title}
              placeholder="ex. Soccer"
              style={{
                backgroundColor: "#EAEAEA",
              }}
              value={state.sportsDetail}
              // onChange={(e) => setState({ sportsDetail: e.target.value })}
              onChange={handleChange}
              name="sportsDetail"
            />
          </div>
        </>
      ) : null}
      {/* // Photographer Form */}
      {title === "Photographer" ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginBottom: "5%",
            }}
          >
            <Typography
              sx={{
                color: "#C95454",
                fontWeight: "800",
              }}
            >
              Information Details
            </Typography>
            <h5>Join as a</h5>
            <TextField
              disabled
              id="outlined-disabled"
              // label="Join as a"
              value={title}
              // variant="filled"
              style={{
                backgroundColor: "#EAEAEA",
              }}
            />
          </div>
        </>
      ) : null}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "#C95454",
            fontWeight: "800",
          }}
        >
          Personal Data
        </Typography>
        <h5>Owner Name</h5>
        <TextField
          id="outlined-disabled"
          // defaultValue="Biko Maryono"
          value={state.name}
          // onChange={(e) => setState({ name: e.target.value })}
          onChange={handleChange}
          name="name"
          placeholder="ex. Bambang Pamungkas"
          style={{
            backgroundColor: "#EAEAEA",
          }}
        />
        <h5>Phone Number</h5>
        <TextField
          id="outlined-disabled"
          // defaultValue="081190087723"
          placeholder="+1 (206) 321 2712"
          style={{
            backgroundColor: "#EAEAEA",
          }}
          value={state.phone}
          // onChange={(e) => setState({ phone: e.target.value })}
          onChange={handleChange}
          name="phone"
        />
        <h5>Email</h5>
        <TextField
          id="outlined-disabled"
          // defaultValue="manutd@gmail.com"
          placeholder="ex. manutd@gmail.com"
          style={{
            backgroundColor: "#EAEAEA",
          }}
          value={state.email}
          // onChange={(e) => setState({ email: e.target.value })}
          onChange={handleChange}
          name="email"
        />
        <h5>URL/Website/Portfolio</h5>
        <TextField
          id="outlined-disabled"
          // defaultValue="manutd.com"
          placeholder="ex. manutd.com"
          style={{
            backgroundColor: "#EAEAEA",
          }}
          value={state.website}
          // onChange={(e) => setState({ website: e.target.value })}
          onChange={handleChange}
          name="website"
        />
      </div>
      <div
        style={{
          alignItem: "center",
          marginTop: "53px",
          textAlign: "center",
        }}
      >
        <Button
          variant="contained"
          endIcon={<ArrowRight />}
          sx={{
            width: "100%",
            height: "56px",
            bgcolor: "#7D0E23",
            color: "white",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "grey",
            },
          }}
          onClick={handleOnSubmit}
        >
          Submit Data
        </Button>
      </div>
    </div>
  );
};

export default Form;
