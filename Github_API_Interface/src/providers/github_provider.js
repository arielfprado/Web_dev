import React, {useState, createContext, useCallback} from 'react';
import api from '../services/api';

//creates the context for the app, with first level of information
export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

//creates the hook the set the state for the informations, and creates the second level of info (into user)
const GitHubProvider = ({children}) => {
    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    //inputing the user name, the function will request teh info from the API, change loading status to true, gatter the information and place it into each field, then change the loading status to false again. possible to pass only users/ ahead beacuse of axios lib
    const getUser = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api
            .get(`users/${username}`)
            .then(({data}) => {
                setGithubState((prevState) => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        id: data.id,
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        html_url: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos,
                    },
                }));
            })
            .finally(() => {
                setGithubState((prevState)=> ({
                    ...prevState,
                    loading: !prevState.loading,
                }));
            });
    };

    //gatter the repositories information from the API, turn it to JSON and place it into the repositories list
    const getUserRepos = (username) => {
        api.get(`users/${username}/repos`).then(({data}) => {
            console.log('data: '+ JSON.stringify(data));
            setGithubState((prevState) => ({
                ...prevState,
                repositories: data,
            }));
        });
    };

    //gatter the starred information from the API, turn it to JSON and place it into the starred list
    const getUserStarred = (username) => {
        api.get(`users/${username}/starred`).then(({data}) => {
            console.log('data: '+JSON.stringify(data));
            setGithubState((prevState) => ({
                ...prevState,
                starred: data,
            }));
        });
    };

    //wraps all the functions above into the contextValue const ans sets the trigger for each one of them, and also contains the githubState value
    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), [])
    };

    //returns the information above
    return(
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
};

export default GitHubProvider;