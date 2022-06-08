import {useContext} from 'react';
import {GithubContext} from '../providers/github_provider';


//centralizes all the githubContext function into one function and returns all the infos
const useGithub = () => {
    const {githubState, getUser, getUserRepos, getUserStarred} = useContext(GithubContext);

    return {githubState, getUser, getUserRepos, getUserStarred};
};

export default useGithub;

