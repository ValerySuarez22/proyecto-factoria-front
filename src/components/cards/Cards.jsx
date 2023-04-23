import React, { useState, useEffect } from "react";
import "./cards.css";
import axios from "axios";

const Cards = ({ user }) => {
  const [repo, setRepo] = useState([]);
  const [teams, setTeams] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (user.identifying) {
      axios
        .get(`http://127.0.0.1:8000/api/employee/filter/status/activo`)
        .then(async (repo) => {
          const data = [];
          for (let index = 0; index < repo.data.length; index++) {
            const element = repo.data[index];
            console.log('element', element.identifying)
            console.log('user', user.identifying)
            if (user.identifying !== element.identifying) {
              const rese = await fetch(
                `http://127.0.0.1:8000/api/employee/${element.id}/photo`
              );
              const blob = await rese.blob();
              const reader = new FileReader();
              reader.readAsDataURL(blob);
              reader.onloadend = () => {
                element.photo = reader.result;
                data.push(element);
                setRepo(data);
                setDataFilter(data);
                setLoading(false);
              };
            }

          }
        })
        .catch((error) => console.error(error));
      axios
        .get("http://localhost:8000/team/list")
        .then((result) => setTeams(result.data));
    }

  }, [user]);

  const handleTeams = (event) => {
    const { value } = event.target;
    if (!value) {
      setDataFilter(repo);
    } else {
      const titleTeams = teams.find((t) => t.id === parseInt(value)).title;
      const filterTeams = repo.filter((obj) => obj.team === titleTeams);
      setDataFilter(filterTeams);
    }
  };

  // aqui entre los parentesis tiene que ir el objeto trabajador
  return (
    <div>
      {loading ? (
        <div className='loading-list-workers'>
        <p className='loading-cards'>Un momento, por favor.<br /> Los datos se están cargando...</p>
        <div className="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
      </div>
      ) : (
        <>
          <div className="container-select">
            <label htmlFor="teams">Trabajadores en periodo de prueba</label>
            <select className="tema-filter"
              id="team"
              name="team"
              // value={formValues.title}
              onChange={handleTeams}
            >
              <option value=""></option>
              {teams.map((data, index) => (
                <option key={data.id} value={data.id}>{data.title}</option>
              ))}
            </select>
          </div>
          <div>
            {dataFilter.map((obj, index) => (
              <div key={index} className="cardContainer" >
                <div className="cardLeft">
                  <div className="frame">
                    <img className="picture" src={obj.photo} alt="foto" />
                  </div>
                </div>
                <div className="cardRight">
                  <p>{`${obj.name} ${obj.lastname} : ${obj.team} / ${obj.rol} / ${obj.manager}`}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};


export default Cards