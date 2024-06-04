import axios from 'axios';

export const getAllProduct_API = async () => {
  try {
    // const result = await axios.get('http://localhost:3002/products');
    const result = await axios.get('http://localhost:3002/books');
    
    result?.data?.filter((item) => {
      delete item._id;
      return item;
    })
    return result?.data;
  } catch (error) {
    console.log('Error find: ', error);
    alert('server Internal Error');
    throw Error('Server Internal Error');
  }
};
