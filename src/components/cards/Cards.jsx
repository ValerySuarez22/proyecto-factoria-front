import React, { useState, useEffect } from "react";
import "./cards.css";
// import picture from "../../assets/images/image.png";
import axios from "axios";

const Cards = () => {
  const [photo, setphoto] =
    useState('');
  const [repo, setRepo] =
    useState([]);
  const [teams, setTeams] =
    useState([]);
  const [dataFilter, setDataFilter] =
    useState([]);


  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/employee')
      .then(response =>
        response.json())
      .then(repo => {
        // console.log('linea 15',repo)
        repo.forEach(element => {
          // console.log (element.id)
          fetch(`http://127.0.0.1:8000/api/employee/${element.id}/photo`)
            .then((rese) => rese.blob())
            .then((blob) => {
              const reader = new FileReader();
              reader.readAsDataURL(blob);
              reader.onloadend = () => {
                // console.log (element)
                element.photo = reader.result
                setphoto(reader.result)
                // setImage(reader.result);
              };
            });

        });
        console.log('linea 34')
        setRepo(repo)
        setDataFilter(repo)
      }
      )
      .catch(error =>
        console.error
          (error));
    axios.get('http://localhost:8000/team/list')
      .then(result => setTeams(result.data))
  }, []);
  console.log(repo)

  const handleTeams = (event) => {
    const { name, value } = event.target;
    console.log(value)
    console.log(teams)
    const titleTeams = teams.find(t => t.id === parseInt(value)).title
    console.log(titleTeams)
    const filterTeams = repo.filter(obj => obj.team == titleTeams)
    console.log(filterTeams)
    setDataFilter(filterTeams)

  }

  // aqui entre los parentesis tiene que ir el objeto trabajador
  return (
    <div>
      <label htmlFor="team">Equipo</label>
      <select
        id="team"
        name="team"
        // value={formValues.title}
        onChange={handleTeams}
      >
        <option value=""></option>
        {teams.map((data, index) =>
          <option value={data.id}>{data.title}</option>
        )}
      </select>
      <div>
        {dataFilter.map((obj, index) =>

          <div className="cardContainer">
            <div className="cardLeft">
              <div className="frame">
                {/* <img className="picture" src={obj.photo} alt="foto" /> */}

              </div>
            </div>
            <div className="cardRight">
              <p>
                {`${obj.name} ${obj.lastname} `}

              </p>
            </div>
          </div>
        )
        }

      </div>
    </div>


  );
}


export default Cards;