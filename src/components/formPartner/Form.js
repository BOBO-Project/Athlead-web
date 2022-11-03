import React from "react";
import banner from "assets/img/pws-banner.png";
import title from "assets/img/pws-title.png";
import { Button, TextField, Typography } from "@mui/material";
import { ReactComponent as ArrowRight } from "assets/svg/fi-ss-arrow-right.svg";


const Form = (props) => {
  const title = props.title;
  // const form= {

  // }

  const handleOnSubmit = () => {};

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
              defaultValue={title}
              style={{
                backgroundColor: "#EAEAEA",
              }}
            />
            <h5>Academy Name</h5>
            <TextField
              id="outlined-disabled"
              // defaultValue="Academy Persija Jakarta"
              style={{
                backgroundColor: "#EAEAEA",
              }}
              placeholder="ex. Academy Manchester United"
            />
            <h5>Sports Detail</h5>
            <TextField
              id="outlined-disabled"
              // defaultValue="Soccer"
              placeholder="ex. Soccer"
              style={{
                backgroundColor: "#EAEAEA",
              }}
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
              defaultValue={title}
              // placeholder="ex. Sir Alex Ferguson"
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
              defaultValue={title}
              style={{
                backgroundColor: "#EAEAEA",
              }}
            />
            <h5>Venue Name</h5>
            <TextField
              id="outlined-disabled"
              // defaultValue={title}
              placeholder="ex. Man United Field"
              style={{
                backgroundColor: "#EAEAEA",
              }}
            />
            <h5>Sports Detail</h5>
            <TextField
              id="outlined-disabled"
              // defaultValue={title}
              placeholder="ex. Soccer"
              style={{
                backgroundColor: "#EAEAEA",
              }}
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
              defaultValue={title}
              // variant="filled"
              style={{
                backgroundColor: "#EAEAEA",
              }}
            />
          </div>
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
            <h5>Name</h5>
            <TextField
              id="outlined-disabled"
              // defaultValue={title}
              placeholder="ex. Sir Alex Ferguson"
              style={{
                backgroundColor: "#EAEAEA",
              }}
            />
            <h5>Phone Number</h5>
            <TextField
              id="outlined-disabled"
              // defaultValue={title}
              placeholder="ex. +1 (206) 321 2712"
              style={{
                backgroundColor: "#EAEAEA",
              }}
            />
            <h5>Email</h5>
            <TextField
              id="outlined-disabled"
              // defaultValue={title}
              placeholder="ex. saf@mail.com"
              style={{
                backgroundColor: "#EAEAEA",
              }}
            />
            <h5>URL/Website/Portfolio</h5>
            <TextField
              id="outlined-disabled"
              // defaultValue={title}
              placeholder="ex. saf.com"
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
        />
        <h5>Email</h5>
        <TextField
          id="outlined-disabled"
          // defaultValue="manutd@gmail.com"
          placeholder="ex. manutd@gmail.com"
          style={{
            backgroundColor: "#EAEAEA",
          }}
        />
        <h5>URL/Website/Portfolio</h5>
        <TextField
          id="outlined-disabled"
          // defaultValue="manutd.com"
          placeholder="ex. manutd.com"
          style={{
            backgroundColor: "#EAEAEA",
          }}
        />
      </div>
      <div style={{
        alignItem:'center',
        marginTop:'53px',
        textAlign:'center'
      }}>
        <Button variant="contained" endIcon={<ArrowRight/>} sx={{
          width:'360px',
          height:'56px',
          bgcolor:'#7D0E23',
          color:'white',
          ml: 1,
          "&.MuiButtonBase-root:hover": {
            bgcolor: "grey"
          },
          // padding:'10px, 16px, 10px, 16px'
        }}>Submit Data</Button>
      </div>
    </div>
  );
};

export default Form;
