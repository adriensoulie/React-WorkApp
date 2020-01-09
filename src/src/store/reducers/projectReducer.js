const initState = {
    projects: [
        {id: '1', title: 'Rowing back', content: '3x10 rep at 35 kilo'},
        {id: '2', title: 'Back exercise', content: '3x12 rep at 50 kilo rowing'},
        {id: '3', title: 'Shoulder', content: '3x12 rep at 18 kilo'}
    ]
}


const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create_project_error', action.err);
            return state;
        default: 
            return state;
    }
}

export default projectReducer