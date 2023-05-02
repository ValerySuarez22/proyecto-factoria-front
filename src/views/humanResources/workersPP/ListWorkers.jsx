import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar-HHRR/Navbar";
import "../workersPP/listWorkers.css";
import Cards from "../../../components/cards/Cards";
import customActions from "../../../components/actions";

const ListWorkers = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    customActions().then((result) => {
      console.log("result", result);
      setUser(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="containerList">
      <Navbar user={user} />
      <Cards user={user} loading={isLoading} />
    </div>
  );
};

export default ListWorkers;
