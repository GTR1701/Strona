import axios from 'axios';

const getAllUsers = async () => {
    return await getFilteredUser("*");
};

const getFilteredUser = async (filter) => {
    return await (await axios.get(`http://localhost:6969/test/${filter}`)).data.data;
};

export {
    getFilteredUser,
    getAllUsers
}