import React from "react";
import style from "./Character.css";



const Character = props => {

  if (!props.noResult) {
    return (
      <div>
      <div className={style.char}>
        <div className={`${style.cardStyle} card`} >
          <img className="card-img-top"
            src={props.data.image}
            alt="name" />
          <div className="card-body" style={{ display: 'block', paddingLeft: ' 0rem' }}>
            <h5 className="card-title">{props.data.name}</h5>
            <table className="table"
              style={{ fontSize: '1rem', tableLayout: 'fixed' }}>
              <tbody>
                <tr style={{ border: '0' }}>
                  <th scope="col" className="char-id">ID:{props.data.id}</th>
                  <th scope="col" className="char-cdate">Created {props.createdDate}</th>
                </tr>
                <tr>
                  <th scope="col">SPECIES</th>
                  <th scope="col" className="char-species">{props.data.species}</th>
                </tr>
                <tr>
                  <th scope="col">STATUS</th>
                  <th scope="col" className="char-status">{props.data.status}</th>
                </tr>
                <tr>
                  <td>GENDER</td>
                  <td className="char-gender">{props.data.gender}</td>
                </tr>
                <tr>
                  <td>ORIGIN</td>
                  <td className="char-origin">{props.data.origin.name}</td>
                </tr>
                <tr>
                  <td>LAST LOCATION</td>
                  <td className="char-loc">{props.data.location.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
      
      )
  } else {
    return (
      <div>
        <p className="d-flex text-danger">
          No results Found!
          </p>
      </div>
    )
  }


};


export default Character;