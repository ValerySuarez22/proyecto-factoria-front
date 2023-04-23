import React, { useState, useEffect } from "react";
import "./cardResponsible.css";
import axios from "axios";
import customActions from "../actions";

const CardResponsible = ({user}) => {

    const [repo, setRepo] = useState([]);
    const [teams, setTeams] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);

    useEffect(() => {
        if(user.identifying){
            axios
            .get(`http://127.0.0.1:8000/api/employee/filter/manager/${user.identifying}`)
            .then(async (repo) => {
                const data = [];
                for (let index = 0; index < repo.data.length; index++) {
                    const element = repo.data[index];
                    if(user.identifying !== element.identifying){
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

    return (
        <div>
            <div>
                {dataFilter.length == 0 &&
                'cargando usuarios'}
                {dataFilter.map((obj, index) => (
                    <div key={index} className="cardContainer" >
                        <div className="cardLeft">
                            <div className="frame">
                                <img className="picture" src={obj.photo} alt="foto" />
                            </div>
                        </div>
                        <div className="cardRight">
                            <p>{`${obj.name} ${obj.lastname} : ${obj.team} / ${obj.rol}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardResponsible
