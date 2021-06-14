import React, { useEffect, useState } from "react";
import './covid.css';

export function Covid() 
{
  const [data, setData] = useState([]);
 async function getCovidData() 
  {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    setData(actualData.statewise[0]);
  }
  
  useEffect(() => {
    getCovidData();
  }, []);

  
  return (
  <div>

<div className="d-flex mt-4 ms-4 align-items-center justify-content-center ">
      <div className="card">
        <div className="card-body rounded">
          <h5 className="title-india"><span></span></h5>
          <h1 className="card-india mt-4">INDIA</h1>
        </div>
      </div>

      <div className="card-recovered ms-4">
        <div className="card-body rounded">
          <h5 className="card-title"><span>TOTAL</span> RECOVERED</h5>
          <h2 className="card-text">
              {data.recovered}
          </h2>
        </div>
      </div>

      <div className="card-confirmed ms-4">
        <div className="card-body rounded">
          <h5 className="card-title"><span>TOTAL</span> CONFIRMED</h5>
          <h2 className="card-text">
           {data.confirmed}
          </h2>
        </div>
      </div>
    </div>


    <div className="d-flex mt-4 ms-4 align-items-center justify-content-center">
      <div className="card-death">
        <div className="card-body rounded">
          <h5 className="card-title"><span>TOTAL</span> DEATH</h5>
          <h2 className="card-text">
           {data.deaths}
          </h2>
        </div>
      </div>

      <div className="card-active ms-4">
        <div className="card-body rounded">
          <h5 className="card-title"><span>TOTAL</span> ACTIVE</h5>
          <h2 className="card-text">
           {data.active}
          </h2>
        </div>
      </div>

      <div className="card-update ms-4">
        <div className="card-body rounded">
          <h5 className="card-title"><span>LAST</span> UPDATED</h5>
          <h2 className="card-text">
           {data.lastupdatedtime}
          </h2>
        </div>
      </div>
    </div>
  </div>
  );
}
