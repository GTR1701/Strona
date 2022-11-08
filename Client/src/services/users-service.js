import axios from 'axios';

const getAllData = async () => {
    return await getFilteredData("*");
};

const getFilteredData = async (filter) => {
    return await (await axios.get(`http://localhost:6969/test/${filter}`)).data.data;
};

export {
    getFilteredData,
    getAllData
}