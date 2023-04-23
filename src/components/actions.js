import axios from 'axios';

const customActions = async () => {
    const dataEmail = JSON.parse(localStorage.getItem('name'))
    const myUser = await axios.get(`http://127.0.0.1:8000/api/employee/filter/email/${dataEmail.username}`);
    const rese = await fetch(
        `http://127.0.0.1:8000/api/employee/${myUser.data[0].id}/photo`
    );
    const blob = await rese.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
        myUser.data[0].photo = reader.result;
        // return myUser.data[0];
    };
    return myUser.data[0]
}

export default customActions

