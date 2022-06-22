import { useContext } from "react";
import { MessagesContext } from "../Context/MessagesContext";
import { Container, ProfissinalBallon, UserBallon } from "./styles";

const ChatMessages = () => {
  const { Messages, User } = useContext(MessagesContext);
  console.log("isso", Messages);

  return (
    <Container>
      {Messages.map((Message) => (
        <>
          {Message.user === User.uid ? (
            <UserBallon>{Message.task}</UserBallon>
          ) : (
            <ProfissinalBallon>{Message.task}</ProfissinalBallon>
          )}
        </>
      ))}
    </Container>
  );
};
export default ChatMessages;
