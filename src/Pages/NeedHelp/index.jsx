import { ChatContent, InputArea, ScreenBack, Video } from "./styles";
import { Header } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import InputChat from "../../components/InputChat";
import ChatMessages from "../../components/ChatMessages";

const NeedHelp = () => {
  return (
    <div>
      <Video style={{ overflow: "hidden" }}></Video>

      <ScreenBack>
        <Header>
          <div style={{ gridColumn: "1/3" }}>
            <button
              style={{
                background: "#008ef8",
                border: "none",
                color: "white",
                width: "50%",
                height: "50px",
                fontSize: "18px",
              }}
            >
              Quero outra ajuda
            </button>
          </div>

          <div style={{ gridColumn: "3/5" }}>
            <h1
              style={{
                fontFamily: "Kdam Thmor Pro",
                fontSize: "50px",
                margin: "0",
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
        <ChatContent>
          <div style={{ background: "red", gridColumn: "1/7", gridRow: "1/6" }}>
            <ChatMessages></ChatMessages>
          </div>
          <InputArea>
            <InputChat></InputChat>
          </InputArea>
        </ChatContent>
      </ScreenBack>
    </div>
  );
};
export default NeedHelp;
