import React, { createContext, useState, useEffect } from "react";
// import { AuthContext } from './AuthContext'
import firebase from "../../firebase";

export const MessagesContext = createContext();
console.log(firebase);

export const MessagesContextProvider = (props) => {
  const [Messages, setMessages] = useState([]);
  // // const { User } = useContext(AuthContext)
  const [User, setUser] = useState();
  const [index, setIndex] = useState();

  firebase
    .auth()
    .signInAnonymously()
    .then((user) => {
      // Signed in..
      console.log(user.user);
      setUser(user.user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error", errorCode, errorMessage);
      // ...
    });

  // firebase.auth().onAuthStateChanged((user) => {
  //   console.log(user)
  //   setUser(user)
  // });

  useEffect(() => {
    if (User) {
      const sfRef = firebase.firestore().collection("Users").doc("Urgente");
      sfRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data().needers);
            let tt = doc.data().needers;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }

    // eslint-disable-next-line
  }, [User]);
  useEffect(() => {
    const d = new Date();
    let date =
      d.getDate() +
      "-" +
      (parseInt(d.getUTCMonth()) + 1).toString() +
      "-" +
      d.getFullYear() +
      "-" +
      d.getHours() +
      "-" +
      d.getMinutes() +
      "-" +
      d.getSeconds() +
      "-" +
      d.getMilliseconds();

    if (User) {
      firebase
        .firestore()
        .collection("Users")
        .doc("Urgente")

        .collection(User.uid)

        .orderBy("addedon", "asc")
        .onSnapshot((snapshot) => {
          const newtask = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setMessages(newtask);
        });
      let teste = firebase.firestore().collection("Users").doc("Urgente");

      teste.get().then((doc) => {
        if (doc.exists) {
          alert(JSON.stringify(doc?.get("teste")));
          alert(doc.get("teste")?.length);
          let obj = doc?.get("teste")?.some((o) => o.name === User.uid);
          alert(obj);
          if (doc?.get("teste")) {
            if (obj == false) {
              alert("entrei");
              teste.set({
                teste: [
                  ...doc.get("teste"),
                  { name: User.uid, waitingHelp: true, time: date },
                ],
              });
            }
          } else {
            teste.set({
              teste: [{ name: User.uid, waitingHelp: true, time: date }],
            });
          }
        } else {
          alert(doc);
          teste.set({
            teste: [{ name: User.uid, waitingHelp: true, time: date }],
          });
        }
      });
    }
    // eslint-disable-next-line
  }, [User]);
  console.log(Messages);

  const AddMessageFireBase = (task) => {
    const d = new Date();
    let date =
      d.getDate() +
      "-" +
      (parseInt(d.getUTCMonth()) + 1).toString() +
      "-" +
      d.getFullYear() +
      "-" +
      d.getHours() +
      "-" +
      d.getMinutes() +
      "-" +
      d.getSeconds() +

    firebase
      .firestore()
      .collection("Users")
      .doc("Urgente")
      .collection(User.uid)
      .get()
      .then((doc) => {
        setIndex(doc.docs.length);
      });

    const obj = {
      task,
      completed: false,
      addedon: index,
      user: User.uid,
    };

    firebase
      .firestore()
      .collection("Users")
      .doc("Urgente")
      .collection(User.uid)
      .add(obj);
  };

  // const DeleteMessageFireBase = (id, completed) => {
  //   firebase
  //     .firestore()
  //     .collection("Users")
  //     .doc(User.uid)
  //     .collection("Messages")
  //     .doc(id)
  //     .delete();
  // };

  // const UpdateMessageFireBase = (id, completed) => {
  //   firebase
  //     .firestore()
  //     .collection("Users")
  //     .doc(User.uid)
  //     .collection("Messages")
  //     .doc(id)
  //     .update({
  //       completed: !completed,
  //     });
  // };

  return (
    <MessagesContext.Provider
      value={{
        User,
        Messages,
        AddMessageFireBase,
        // DeleteMessageFireBase,
      }}
    >
      {props.children}
    </MessagesContext.Provider>
  );
};
