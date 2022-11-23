import { ScreenBack, Video } from "./styles";
import { Header } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "./styles";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Video style={{ overflow: "hidden" }}></Video>
      <ScreenBack>
        <div
          style={{
            gridColumn: "1/4",
            gridRow: "1/3",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              transform: "translatey(-70px)",
              fontFamily: "Kdam Thmor Pro",
              fontSize: "150px",
            }}
          >
            01:01
          </h1>
        </div>
        <Container>
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "50px",
              width: "100%",
              border: "red 1px solid",
              gridColumn: "1/5",
            }}
          >
            Quero ajudar
          </div>

          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "50px",
              width: "100%",
              border: "red 1px solid",
              gridColumn: "5/5",
            }}
          >
            Preciso de ajuda
          </div>
        </Container>
      </ScreenBack>
    </div>
  );
};
export default Login;
