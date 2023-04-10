import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRespondible from '../../src/views/responsibe/homeR/HomeResponsibe';
import HomeResponsibe from "../../src/views/responsibe/homeR/HomeResponsibe";
import ListWcharge from "../../src/views/responsibe/listW/ListWcharge";

const RouterResponsile = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomeResponsibe/>} />
            <Route path="/listWcharger" element={<ListWcharge/>} />
            {/* <Route path="/TeamsArea" element={<TeamsArea/>} />
            <Route path="/listWorkers" element={<ListWorkers/>} /> */}
         </Routes>
      </BrowserRouter>
   );
};

export default RouterResponsile