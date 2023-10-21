import request from '../utils/request';

export const getUsers = async () => {
  try {
    const data = await request<GetUserResponse>({
      url: '/users?size=5',
      method: 'GET',
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
