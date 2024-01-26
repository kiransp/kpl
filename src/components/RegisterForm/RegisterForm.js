import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./RegisterForm.module.scss";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { v4 } from "uuid";
import PopUp from "../../utils/PopUp";
import { useNavigate } from "react-router-dom";
import { phonePeQr } from "../../Images";

export default function RegisterForm() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    mobile: "",
    cricheroesLink: "",
    place: "",
    batting: "NA",
    bowling: "NA",
    allRounder: "No",
    wicketKeeper: "NA",
    aadharCard: null,
    photo: null,
    paymentSS: null,
  });
  const playersCollectionRef = collection(db, "players");
  const [isLoading, setIsLoading] = useState(false);
  const redirect = useNavigate();
  //   Pop up variables
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    redirect("/");
  };
  // end of pop up variable

  // Upload variables
  const storage = getStorage();
  // end of upload variables

  const createPlayer = async (updatedPlayerInfo) => {
    setIsLoading(true);
    const [aadharLink, photoLink, paymentSSLink] = await uploadImages();
    console.log("registerData in create updatedPlayerInfo ", updatedPlayerInfo);
    await addDoc(playersCollectionRef, {
      ...updatedPlayerInfo,
      aadharCard: aadharLink,
      photo: photoLink,
      paymentSS: paymentSSLink,
      createdDate: new Date(),
    })
      .then((data) => {
        setOpen(true);
        setIsLoading(false);
        setRegisterData({
          name: "",
          email: "",
          mobile: "",
          place: "",
          batting: "",
          bowling: "",
          wicketKeeper: "",
          aadharCard: null,
          photo: null,
          allRounder: "",
          cricheroesLink: "",
        });
        document.getElementById("player-form").reset();
      })
      .catch((error) => alert("An error occured "));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const updatedPlayerInfo = { ...registerData };
    if (
      updatedPlayerInfo.batting !== "NA" &&
      updatedPlayerInfo.bowling !== "NA"
    ) {
      updatedPlayerInfo["allRounder"] = "YES";
      setRegisterData(updatedPlayerInfo);
    }
    console.log("Here in submit ", updatedPlayerInfo);
    createPlayer(updatedPlayerInfo);
  }

  async function uploadImage(image) {
    const filePath = `players/${
      registerData.aadharCard.name.split(".")[0] + "_" + v4()
    }`;
    const storageRef = ref(storage, filePath);

    const response = await uploadBytes(storageRef, image);
    const url = await getDownloadURL(response.ref);
    return url;
  }

  async function uploadImages() {
    const aadhar_photo_payment = [
      registerData.aadharCard,
      registerData.photo,
      registerData.paymentSS,
    ];
    const imagePromises = Array.from(aadhar_photo_payment, (image) =>
      uploadImage(image)
    );

    return await Promise.all(imagePromises);
  }

  return (
    <>
      <PopUp open={open} handleClose={handleClose} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid container sx={{ padding: { xs: "6%" } }}>
        <Grid item md={1} xs={12}></Grid>
        <Grid item md={11} xs={12}>
          <Typography variant="h3">REGISTRATION</Typography>
          <Typography variant="h1" className={styles["reg-title"]}>
            Fill Your Details
          </Typography>

          <form
            className={styles["register-form"]}
            onSubmit={(e) => handleSubmit(e)}
            id="player-form"
          >
            <Typography
              variant="subtitle2"
              className={styles["reg-fields-rule"]}
            >
              All fields are mandatory
            </Typography>
            <Grid container>
              <Grid item md={5} xs={12}>
                <TextField
                  className={styles["reg-field"]}
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  required={true}
                  value={registerData.name}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, name: e.target.value })
                  }
                />
              </Grid>
              <Grid item md={1} xs={12}></Grid>
              <Grid item md={5} xs={12}>
                <TextField
                  className={styles["reg-field"]}
                  id="outlined-basic"
                  label="Email ID"
                  variant="outlined"
                  type="email"
                  required={true}
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item md={5} xs={12}>
                <TextField
                  className={styles["reg-field"]}
                  id="outlined-basic"
                  label="Place"
                  variant="outlined"
                  required={true}
                  value={registerData.place}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, place: e.target.value })
                  }
                />
              </Grid>
              <Grid item md={1} xs={12}></Grid>
              <Grid item md={5} xs={12}>
                <TextField
                  className={styles["reg-field"]}
                  id="outlined-basic"
                  label="Mobile"
                  variant="outlined"
                  required={true}
                  value={registerData.mobile}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, mobile: e.target.value })
                  }
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  className={styles["reg-field"]}
                  id="outlined-basic"
                  label="Cricheroes Link"
                  variant="outlined"
                  required={true}
                  value={registerData.cricheroesLink}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      cricheroesLink: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item md={5} xs={12}>
                <FormControl>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    className={styles["reg-field"]}
                  >
                    Batting
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    row
                  >
                    <FormControlLabel
                      value="Right"
                      control={
                        <Radio
                          checked={registerData.batting === "Right"}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              batting: e.target.value,
                            })
                          }
                        />
                      }
                      label="Right"
                    />
                    <FormControlLabel
                      control={
                        <Radio
                          checked={registerData.batting === "Left"}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              batting: e.target.value,
                            })
                          }
                        />
                      }
                      label="Left"
                      value="Left"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item md={1} xs={12}></Grid>
              <Grid item md={5} xs={12}>
                <FormControl>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    className={styles["reg-field"]}
                  >
                    Bowling
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    row
                  >
                    <FormControlLabel
                      value="Right"
                      control={
                        <Radio
                          checked={registerData.bowling === "Right"}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              bowling: e.target.value,
                            })
                          }
                        />
                      }
                      label="Right"
                    />
                    <FormControlLabel
                      control={
                        <Radio
                          checked={registerData.bowling === "Left"}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              bowling: e.target.value,
                            })
                          }
                        />
                      }
                      label="Left"
                      value="Left"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item md={5} xs={12}>
                <FormControl>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    className={styles["reg-field"]}
                  >
                    Wicket Keeper
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    row
                  >
                    <FormControlLabel
                      value="Yes"
                      control={
                        <Radio
                          checked={registerData.wicketKeeper === "Yes"}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              wicketKeeper: e.target.value,
                            })
                          }
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      control={
                        <Radio
                          checked={registerData.wicketKeeper === "No"}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              wicketKeeper: e.target.value,
                            })
                          }
                        />
                      }
                      label="No"
                      value="No"
                    />
                  </RadioGroup>
                </FormControl>
                <Grid item md={7} xs={12}></Grid>

                <Grid item md={12} xs={12}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel>Upload your Aadhar Card*</InputLabel>
                    <TextField
                      className={styles["reg-field"]}
                      id="outlined-basic"
                      variant="outlined"
                      type="file"
                      required={true}
                      //   value={registerData.aadharCard}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          aadharCard: e.target.files[0],
                        })
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item md={12} xs={12}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel>Upload your photo*</InputLabel>
                    <TextField
                      className={styles["reg-field"]}
                      id="outlined-basic"
                      variant="outlined"
                      type="file"
                      required={true}
                      //   value={registerData.photo}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          photo: e.target.files[0],
                        })
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item md={12} xs={12}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel>Upload the screenshot of payment*</InputLabel>
                    <TextField
                      className={styles["reg-field"]}
                      id="outlined-basic"
                      variant="outlined"
                      type="file"
                      required={true}
                      //   value={registerData.photo}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          paymentSS: e.target.files[0],
                        })
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item md={1} xs={12}></Grid>
              <Grid
                item
                md={6}
                xs={12}
                sx={{
                  border: "1px solid #666666",
                  textAlign: "center",
                  mt: { xs: "20px" },
                }}
              >
                <Typography variant="h6" className={styles["reg-title"]}>
                  Steps to follow
                </Typography>

                <ol style={{ textAlign: "left" }}>
                  <li>
                    Scan the QR code below and make a payment of <b>200 Rs.</b>
                  </li>
                  <li>Submit a screenshot as confirmation.</li>
                </ol>
                <img src={phonePeQr} alt="QR code to make payment" />
                <Typography variant="subtitle2">9986223746@ybl</Typography>
              </Grid>
              <Grid item md={12} xs={12} sx={{ mt: "20px" }}>
                <Typography variant="body1">
                  By clicking on Register button below., I agree to the{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://firebasestorage.googleapis.com/v0/b/kplcricket-d5078.appspot.com/o/phase2_docs%2FKPL_T%26C.pdf?alt=media&token=07d1e82d-6524-4df3-9013-10483e64b1ac"
                  >
                    Terms and Conditions
                  </a>{" "}
                  of KPL.
                </Typography>
              </Grid>
              <Grid item md={4} xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  className={styles["reg-field"]}
                  sx={{
                    backgroundColor: "#001585",
                    fontWeight: "600",
                    "&:hover": {
                      backgroundColor: "#CC0000",
                    },
                  }}
                >
                  REGISTER
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
