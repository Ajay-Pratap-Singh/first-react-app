import React,{useEffect,useState} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import userThumb from './userThumb.jpeg'
import {Button,Modal,Image} from 'react-bootstrap';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyBHCFpqUji6J7UTsEepwl2ez0y2UUSDBXk",
    authDomain: "ringed-magpie-285413.firebaseapp.com",
    databaseURL: "https://ringed-magpie-285413.firebaseio.com",
    projectId: "ringed-magpie-285413",
    storageBucket: "ringed-magpie-285413.appspot.com",
    messagingSenderId: "909033433276",
    appId: "1:909033433276:web:7c648e23c9ef94eba008b9",
    measurementId: "G-Y8JJMBV190"
};
firebase.initializeApp(config);

function SignInScreen() {
    const [show, setShow] = useState(false);
    const [signedIn, setSignedIn] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Configure FirebaseUI.
    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        }
    };

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => setSignedIn(!!user));
        return () => unregisterAuthObserver();
    }, []);

    const imgSize={width:"36px",cursor:"pointer"}

    if (!signedIn) {
      return (
        <>
        <Image onClick={handleShow} className="m-1" src={signedIn ? firebase.auth().currentUser.photoURL: userThumb} roundedCircle style={imgSize}/>
        <Modal
            centered
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Authenticate</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
            <div>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
        </>
      );
    }
    return (
        <>
        <Image onClick={handleShow} className="m-1" src={signedIn ? firebase.auth().currentUser.photoURL: userThumb} roundedCircle style={imgSize}/>
        <Modal
            centered
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Authenticate</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
            <div>
                <h1>My App</h1>
                <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
                <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
            </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default SignInScreen;