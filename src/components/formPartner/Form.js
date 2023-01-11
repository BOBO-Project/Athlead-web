import React, { useState, useEffect } from "react";
import banner from "assets/img/pws-banner.png";
import title from "assets/img/pws-title.png";
import { Button, TextField, Typography } from "@mui/material";
import { ReactComponent as ArrowRight } from "assets/svg/fi-ss-arrow-right.svg";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

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
    status: 0,
  });

  const handleOnSubmit = async (e) => {
    // const payload = {
    //   category: title.toLowerCase(),
    //   academyName: state.academyName,
    //   venueName: state.venueName,
    //   sportsDetail: state.sportsDetail,
    //   sportsSpecification: state.sportsSpecification,
    //   name: state.name,
    //   phone: state.phone,
    //   email: state.email,
    //   website: state.website,
    //   status: state.status,
    // };
    try {
      const payload = {
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
      const { data } = await axios.post(
        "http://localhost:3001/partners",
        payload
      );

      if (data) {
        setState({
          category: "",
          academyName: "",
          venueName: "",
          sportsDetail: "",
          sportsSpecification: "",
          name: "",
          phone: "",
          email: "",
          website: "",
          status: 0,
        });
      }
      toast.success("Success", {
        position: toast.POSITION.TOP_CENTER,
      });
      props.closed();
    } catch (error) {
      console.log(error);
      toast.error("Failed", {
        position: toast.POSITION.TOP_CENTER,
      });
      
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
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
                marginBottom: "20px",
              }}
            >
              Information Details
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "14px", marginBottom: "10px" }}
            >
              Join as a
            </Typography>
            <TextField
              disabled
              id="outlined-disabled"
              value={title}
              style={{
                backgroundColor: "#EAEAEA",
              }}
            />
            <Typography
              variant="h5"
              sx={{ fontSize: "14px", marginBottom: "10px", marginTop: "30px" }}
            >
              Academy Name
            </Typography>
            <TextField
              id="outlined-disabled"
              // defaultValue="Academy Persija Jakarta"
              value={state.academyName}
              placeholder="ex. Akademi Bola Bekasi Jaya"
              name="academyName"
              required
              error={!state.academyName}
              helperText={!state.academyName ? "Please Filled In" : ""}
              onChange={handleChange}
            />
            <Typography
              variant="h5"
              sx={{ fontSize: "14px", marginBottom: "10px", marginTop: "30px" }}
            >
              Sports Detail
            </Typography>
            <TextField
              id="outlined-disabled"
              // defaultValue="Soccer"
              placeholder="ex. Football"
              value={state.sportsDetail}
              name="sportsDetail"
              required
              error={!state.sportsDetail}
              helperText={!state.sportsDetail ? "Please Filled In" : ""}
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
            <Typography
              variant="h5"
              sx={{ fontSize: "14px", marginBottom: "10px" }}
            >
              Join as a
            </Typography>
            <TextField
              disabled
              id="outlined-disabled"
              value={title}
              style={{
                backgroundColor: "#EAEAEA",
              }}
            />
            <Typography
              variant="h5"
              sx={{ fontSize: "14px", marginBottom: "10px", marginTop: "30px" }}
            >
              Sport Specification
            </Typography>
            <TextField
              id="outlined-disabled"
              placeholder="ex. Mini Soccer"
              value={state.sportsSpecification}
              name="sportsSpecification"
              required
              error={!state.sportsSpecification}
              helperText={!state.sportsSpecification ? "Please Filled In" : ""}
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
            <Typography
              variant="h5"
              sx={{ fontSize: "14px", marginBottom: "10px" }}
            >
              Join as a
            </Typography>
            <TextField
              disabled
              id="outlined-disabled"
              style={{
                backgroundColor: "#EAEAEA",
              }}
              value="Venue"
            />
            <Typography
              variant="h5"
              sx={{ fontSize: "14px", marginBottom: "10px", marginTop: "30px" }}
            >
              Venue Name
            </Typography>
            <TextField
              id="outlined-disabled"
              placeholder="ex. Lapangan Mini Soccer Tanggerang"
              value={state.venueName}
              required
              error={!state.venueName}
              helperText={!state.venueName ? "Please Filled In" : ""}
              onChange={handleChange}
              name="venueName"
            />
            <Typography
              variant="h5"
              sx={{ fontSize: "14px", marginBottom: "10px", marginTop: "30px" }}
            >
              Sports Detail
            </Typography>
            <TextField
              id="outlined-disabled"
              // defaultValue={title}
              placeholder="ex. Mini Soccer"
              value={state.sportsDetail}
              required
              error={!state.sportsDetail}
              helperText={!state.sportsDetail ? "Please Filled In" : ""}
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
            <Typography
              variant="h5"
              sx={{ fontSize: "14px", marginBottom: "10px" }}
            >
              Join as a
            </Typography>
            <TextField
              disabled
              id="outlined-disabled"
              value={title}
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
        <Typography
          variant="h5"
          sx={{ fontSize: "14px", marginBottom: "10px", marginTop: "30px" }}
        >
          Owner Name
        </Typography>
        <TextField
          id="outlined-disabled"
          value={state.name}
          onChange={handleChange}
          name="name"
          placeholder="ex. Biko Maryono"
          required
          error={!state.name}
          helperText={!state.name ? "Please Filled In" : ""}
        />
        <Typography
          variant="h5"
          sx={{ fontSize: "14px", marginBottom: "10px", marginTop: "30px" }}
        >
          Phone Number
        </Typography>
        <TextField
          id="outlined-disabled"
          // defaultValue="081190087723"
          placeholder="0811900573"
          value={state.phone}
          error={!state.phone}
          helperText={!state.phone ? "Please Filled In" : ""}
          onChange={handleChange}
          name="phone"
        />
        <Typography
          variant="h5"
          sx={{ fontSize: "14px", marginBottom: "10px", marginTop: "30px" }}
        >
          Email
        </Typography>
        <TextField
          id="outlined-disabled"
          placeholder="ex. Biko.Maryono@gmail.com"
          value={state.email}
          error={!state.email}
          helperText={!state.email ? "Please Filled In" : ""}
          type="email"
          onChange={handleChange}
          name="email"
        />
        <Typography
          variant="h5"
          sx={{ fontSize: "14px", marginBottom: "10px", marginTop: "30px" }}
        >
          URL/Website/Portfolio
        </Typography>
        <TextField
          id="outlined-disabled"
          placeholder="ex. Athlead.com"
          value={state.website}
          error={!state.website}
          helperText={!state.website ? "Please Filled In" : ""}
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
