import { firestore } from "firebase";

export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        //async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Adrien',
            authorLastName: 'Soulié',
            authorId: 12345,
            createdAT: new Date()
        }).then(()=> {
            dispatch({ type: 'CREATE_PROJECT, project'});
        }).catch((err)=> {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};



