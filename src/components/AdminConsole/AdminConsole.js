import * as React from "react";
import Box from "@mui/material/Box";
import MUIDataTable from "mui-datatables";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import SignIn from "../SignIn/Signin";
import styles from "./AdminConsole.module.scss";

const columns = [
  {
    name: "name",
    label: "Player Name",
    // width: 150,
    editable: false,
  },
  {
    name: "email",
    label: "Email ID",
    // width: 150,
    editable: false,
  },
  {
    name: "place",
    label: "Place",
    // width: 100,
    editable: false,
  },
  {
    name: "mobile",
    label: "Mobile",
    type: "number",
    // width: 110,
    editable: false,
  },
  {
    name: "batting",
    label: "Batting",
    type: "string",
    // width: 110,
    editable: false,
  },
  {
    name: "bowling",
    label: "Bowling",
    type: "string",
    // width: 110,
    editable: false,
  },
  {
    name: "allRounder",
    label: "All Rounder",
    type: "string",
    // width: 110,
    editable: false,
  },
  {
    name: "wicketKeeper",
    label: "Keeper",
    type: "string",
    // width: 110,
    editable: false,
  },
  {
    name: "cricheroesLink",
    label: "Cricheroes",
    type: "string",
    // width: 110,
    editable: false,
  },
  {
    name: "aadharCard",
    label: "Aadhar",
    type: "string",
    // width: 110,
    editable: false,
  },
  {
    name: "photo",
    label: "Photo",
    type: "string",
    // width: 110,
    editable: false,
  },
  {
    name: "paymentSS",
    label: "Payment",
    type: "string",
    // width: 110,
    editable: false,
  },
];

export default function AdminConsole() {
  const [isAuthUser, setIsAuthUser] = React.useState(false);
  const [players, setPlayers] = React.useState([]);
  const playersCollectionRef = collection(db, "players");
  React.useEffect(() => {
    const getAllPlayers = async () => {
      const data = await getDocs(playersCollectionRef);
      setPlayers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAllPlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    setIsAuthUser(sessionStorage.getItem("isLoggedIn"));
  }, []);
  console.log("players ", players);
  return (
    <Box className={styles["dataGridContainer"]}>
      {isAuthUser ? (
        <MUIDataTable
          title={"Registered players information"}
          data={players}
          columns={columns}
          options={{
            selectableRows: "none",
            responsive: "standard",
            searchAlwaysOpen: false,
            searchPlaceholder: "Search here",
            viewColumns: false,
            filter: false,
            rowsPerPage: 100,
            customRowRender: (data) => {
              const [
                name,
                email,
                place,
                mobile,
                batting,
                bowling,
                allRounder,
                keeping,
                cricheroesLink,
                aadhar,
                photo,
                payment,
              ] = data;
              return (
                <>
                  {/*  */}
                  <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{place}</td>
                    <td>{mobile}</td>

                    <td>{batting}</td>
                    <td>{bowling}</td>
                    <td>{allRounder}</td>
                    <td>{keeping}</td>
                    <td>
                      <a href={cricheroesLink} target="_blank" rel="noreferrer">
                        {cricheroesLink ? "Cricheroes" : "NA"}
                      </a>
                    </td>
                    <td>
                      <a href={aadhar} target="_blank" rel="noreferrer">
                        <img
                          src={aadhar}
                          width="50%"
                          height="100vh"
                          alt="id proof"
                        />
                      </a>
                    </td>
                    <td>
                      <a href={photo} target="_blank" rel="noreferrer">
                        <img
                          src={photo}
                          width="50%"
                          height="100vh"
                          alt="dp proof"
                          onClick={(e) => window.redire}
                        />
                      </a>
                    </td>
                    <td>
                      <a href={payment} target="_blank" rel="noreferrer">
                        <img
                          src={payment}
                          width="50%"
                          height="100vh"
                          alt="payment proof"
                        />
                      </a>
                    </td>
                  </tr>
                </>
              );
            },
          }}
        />
      ) : (
        <SignIn />
      )}
    </Box>
  );
}
