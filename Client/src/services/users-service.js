import axios from 'axios';

const getAllData = async () => {
    return await getFilteredData();
};

const getFilteredData = async (filter) => {
    let filtr = filter
    if (filtr) {
        return await (await axios.get(`http://localhost:6969/test/${filtr}`)).data.data;
    } else {
        return await (await axios.get(`http://localhost:6969/test/*`)).data.data;
    }
};

export {
    getFilteredData,
    getAllData
}