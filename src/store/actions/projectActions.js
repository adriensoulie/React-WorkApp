import { firestore } from "firebase";

export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        //async call to database
        const firestore = getFirestore();
        const profile= getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAT: new Date()
        }).then(()=> {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS'});
        }).catch((err)=> {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};



