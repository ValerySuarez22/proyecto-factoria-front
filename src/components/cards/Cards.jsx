import React, { useState, useEffect } from "react";
import "./cards.css";
import axios from "axios";

const Cards = ({ user, loading }) => {    //El componente recibe dos propiedades: "user" es un objeto que contiene la información del usuario logueado, mientras que "loading" es un valor booleano que indica si los datos de la lista de trabajadores se están cargando o no.
  const [repo, setRepo] = useState([]);
  const [teams, setTeams] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [loadingCards, setLoadingCards] = useState(true);   //se utilizan los hooks para definir estados distintos

  useEffect(() => {   //llamada de la API con "axios" y obtene los datos de los trabajadores.

    if (user.identifying) {
      axios
        .get(`http://127.0.0.1:8000/api/employee/filter/status/activo`)  //Trae los datos unicamente de los que estan activos y los almacena en repo
        .then(async (repo) => {
          const data = [];
          for (let index = 0; index < repo.data.length; index++) {
            const element = repo.data[index];
            if (user.identifying !== element.identifying) {  //se itera sobre cada elemento de repo y se comprueba si el identidor del usuario es diferente alidentifying del elemento actual.
              const rese = await fetch(
                `http://127.0.0.1:8000/api/employee/${element.id}/photo`    //se realiza otro llamado a la API connfetch para obtener la foto del trabajador y se utiliza un objeto
              );
              const blob = await rese.blob();
              const reader = new FileReader();  //para leer el contenido de la foto y convertirlo en una URL que se guarda en la propiedad photo del elemento actual
              reader.readAsDataURL(blob);
              reader.onloadend = () => {
                element.photo = reader.result;   //se añade el elemento actual a un array data y se actualizan los estadossetRepo
                data.push(element);
                setRepo(data);
                setDataFilter(data);  
                setLoadingCards(false);
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

  const handleTeams = (event) => {       //filtran los trabajadores según el equipo seleccionado en un menú desplegable
    const { value } = event.target;
    if (!value) {
      setDataFilter(repo);
    } else {
      const titleTeams = teams.find((t) => t.id === parseInt(value)).title;
      const filterTeams = repo.filter((obj) => obj.team === titleTeams);
      setDataFilter(filterTeams);
    }
  };

  // aqui renderiza el objeto trabajador
  return (
    <div>
      {loading || loadingCards ? (
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
