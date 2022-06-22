import React, { createContext, useState, useEffect } from "react";
// import { AuthContext } from './AuthContext'
import firebase from "../../firebase";

export const MessagesContext = createContext();
console.log(firebase);

export const MessagesContextProvider = (props) => {
  const [Messages, setMessages] = useState([]);
  // // const { User } = useContext(AuthContext)
  const [User, setUser] = useState();

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
      "-" +
      d.getMilliseconds();

    const obj = {
      task,
      completed: false,
      addedon: date,
      user: User.uid,
    };
    const sfRef = firebase.firestore().collection("Users").doc("Urgente");
    sfRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          let Needers = [];
          let NeederNotification = [];
          let UserNeeder = { name: User.uid, opened: false };
          console.log("Document data:", doc.data()?.needers);
          let tt = doc.data()?.needers;
          for (let index = 0; index < tt.length; index++) {
            const element = tt[index];
            Needers.push(element);
            NeederNotification.push(element.name.includes(UserNeeder.name));
          }
          console.log(NeederNotification);
          if (NeederNotification.includes(true)) {
          } else {
            Needers.push(UserNeeder);
          }

          console.log(Needers);
          firebase.firestore().collection("Users").doc("Urgente").set({
            needers: Needers,
          });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

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
