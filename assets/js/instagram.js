import ig from 'fetch-instagram';
 
const instagram = ig({
  accessToken: '3308576900.ed6bcac.a972e592368c42c2956400c040011ab7',
});

// https://api.instagram.com/v1/users/self 
const users = instagram.users();
 
users.then(res => console.log(res));
 
// https://api.instagram.com/v1/users/self/media/recent 
const media = instagram.media();
users.then(res => console.log(res));
