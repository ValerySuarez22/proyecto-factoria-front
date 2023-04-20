import axios from 'axios';

const customActions = async () => {
    const dataemail= JSON.parse(localStorage.getItem('loggedAppUser'))
  console.log(dataemail) 
  const rest = await axios.get("http://127.0.0.1:8000/api/employee");
    console.log(rest.data);
    const findUser = rest.data.find(obj => obj.email === dataemail.username);
    console.log(findUser);
    const rese = await fetch(
        `http://127.0.0.1:8000/api/employee/${findUser.id}/photo`
    );
    const blob = await rese.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
        findUser.photo = reader.result;
        console.log('findUser', findUser)
        return findUser;
    };
    return findUser
}

export default customActions

