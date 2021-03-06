import React, { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext, AuthProvider } from "../../../../contexts/AuthContext";

const useStyles = makeStyles({
  MuiButtonRoot: {
    padding: "10px 25px",
    fontWeight: "bold",
    fontSize: "1.1rem",
    margin: "12px 5px 0px",
    color: "#fff",
    backgroundColor: "orange",
    boxShadow:
      "inset 4px 4px 6px -1px rgba(0, 0, 0, 0.25),inset -4px -4px 6px -1px rgba(255, 255, 255, 0.75), -0.5px -0.5px 0px rgba(0,0,0,0.45),0.5px 0.5px 0px rgba(0, 0, 0, 0.45)",
    textShadow: "0.1px 0.1px 0.3px #000",
    "&:hover": {
      color: "orange",
    },
    "&:focus": {
      outline: "none",
    },
  },
});

const OutlookLogin = (props) => {
  const classes = useStyles();
  const { isLoggedIn, setisLoggedIn } = useContext(AuthContext);

  const onSubmit = (e) => {
    window.open("http://localhost:5000/auth/outlook", "_self");
  };

  return (
    <div>
      <Button
        variant="outlined"
        size="large"
        className={classes.MuiButtonRoot}
        onClick={onSubmit}
      >
        Log In With Outlook
      </Button>
    </div>
  );
};

export default OutlookLogin;
