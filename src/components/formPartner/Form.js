import React from "react";
import banner from "assets/img/pws-banner.png";
import title from "assets/img/pws-title.png";
import { TextField, Typography } from "@mui/material";

const Form = (props) => {
  const type = props.type;
  const title = props.title;

  return (
    <div id="formPartner-modal">
      <div>
        <h1>{title} Registration</h1>
      </div>
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
        <h5>Academy Name</h5>
        <TextField
          // disabled
          id="outlined-disabled"
          // label="Join as a"
          defaultValue={title}
          // variant="filled"
          style={{
            backgroundColor: "#EAEAEA",
          }}
        />
        <h5>Sports Detail</h5>
        <TextField
          // disabled
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
        <h5>Owner Name</h5>
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
        <h5>Phone Number</h5>
        <TextField
          // disabled
          id="outlined-disabled"
          // label="Join as a"
          defaultValue={title}
          // variant="filled"
          style={{
            backgroundColor: "#EAEAEA",
          }}
        />
        <h5>Email</h5>
        <TextField
          // disabled
          id="outlined-disabled"
          // label="Join as a"
          defaultValue={title}
          // variant="filled"
          style={{
            backgroundColor: "#EAEAEA",
          }}
        />
        <h5>URL/Website/Portfolio</h5>
        <TextField
          // disabled
          id="outlined-disabled"
          // label="Join as a"
          defaultValue={title}
          // variant="filled"
          style={{
            backgroundColor: "#EAEAEA",
          }}
        />
      </div>
    </div>
  );
};

export default Form;
