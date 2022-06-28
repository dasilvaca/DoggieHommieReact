const BASE_URL =  process.env.REACT_APP_API_URL

// url de /pages 
export const login_url = `${BASE_URL}/login`
export const post_url = `${BASE_URL}/post`
export const updateUser_url = `${BASE_URL}/updateUser`
export const notification_url = `${BASE_URL}/notification/`
export const posts_url = `${BASE_URL}/post/getAll`
export const posts_by_user_url = `${BASE_URL}/post/getByUser`
export const change_picture_url = `${BASE_URL}/changePicture`
export const user_id_url = `${BASE_URL}/user`
export const notification_getAll_url = `${BASE_URL}/notification/getAll`
export const users_url = `${BASE_URL}/users`
export const post_RUD_url =  `${BASE_URL}/post/RUD`
export const user_report_url = `${BASE_URL}/user/report`
export const comment_create_url = `${BASE_URL}/comment/create`
export const bank_account_url = `${BASE_URL}/bankAccount`

console.log(BASE_URL);






