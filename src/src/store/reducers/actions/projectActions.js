export const createProject = (project) => {
    return (dispatch, getState) => {
        //async call to database to write
        dispatch({ type: 'CREATE_PROJECT, project'});
    }
};