import { Anchor, AnimatedHeart, ScreenBack, Video } from "./styles";
import { Header } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "./styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PrimaryContainer, ScreenTransition } from "../../routes/styles";
import TypewriterComponent from "typewriter-effect";

const Home = () => {
  const pageMotion = {
    initial: { y: "-50vh" },
    animate: { y: "-210vh", transition: { duration: 0.9 } },
    exit: { y: ["100vh", "-50vh"], transition: { duration: 1.2 } },
  };
  return (
    <div>
      <Video
        style={{ overflow: "hidden" }}
      ></Video>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
        style={{ overflow: "hidden", position: "fixed", zIndex: "1000" }}
      >
        <ScreenTransition />
        <PrimaryContainer></PrimaryContainer>
      </motion.div>
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
          options={{loop: true}}
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

          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "50px",
            }}
          >
            Preciso de ajuda
          </div>
        </Container>
      </ScreenBack>
    </div>
  );
};
export default Home;
