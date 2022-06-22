import { ScreenBack, Video } from "./styles";
import { Header } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "./styles";
import { Link } from "react-router-dom";

import TypewriterComponent from "typewriter-effect";

const Home = () => {
  return (
    <div>
      <Video style={{ overflow: "hidden" }}></Video>

      <ScreenBack>
        <Header>
          <div style={{ gridColumn: "3/5" }}>
            <h1
              style={{
                transform: "translatey(-70px)",
                fontFamily: "Kdam Thmor Pro",
                fontSize: "50px",
              }}
            >
              01:01
            </h1>
          </div>

          <div style={{ gridColumn: "6/7" }}>
            <span style={{ padding: "10px", zIndex: "1000" }}>
              <Link to="/menu" style={{ color: "#008ef8" }}>
                <MenuIcon
                  sx={{
                    fontSize: "30px",
                    cursor: "pointer",
                    background: "white",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                />
              </Link>
            </span>
          </div>
        </Header>
        <div
          style={{
            gridColumn: "1/4",
            gridRow: "1/3",
            textAlign: "center",
            fontSize: "40px",
            lineHeight: "15px",
          }}
        >
          <TypewriterComponent
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter

                .typeString("Você é tudo oque importa")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Você é especial")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Sem você o mundo é chato")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <Container>
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "50px",
            }}
          >
            Quero ajudar
          </div>
          <Link
              style={{ textDecoration: "none", color: "#008ef8", height:'100%', width:'100%' }}
              to={"/needhelp"}
            >
          <div
            style={{
              background: "red",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "50px",
              cursor: "pointer",
            }}
          >

              Preciso de ajuda
           
          </div> </Link>
        </Container>
      </ScreenBack>
    </div>
  );
};
export default Home;
