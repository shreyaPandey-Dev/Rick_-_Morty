import React from "react";
import style from "./Character.css";



const Character = props => {
  // console.log("data-", props.data)

  if (!props.noResult) {
    return (<div className={style.char}>
      <div className={`${style.cardStyle} card`} >

        <img className="card-img-top"
          src={props.data.image}
          alt="name" />
        <div className="card-body" style={{ display: 'block', paddingLeft:' 0rem'}}>
          <h5 className="card-title">{props.data.name}</h5>
          <table className="table"
            style={{ fontSize: '1rem', tableLayout: 'fixed' }}>
            <tbody>
              <tr style={{ border: '0' }}>
                <th scope="col">ID:{props.data.id}</th>
                <th scope="col">Created {props.createdDate}</th>
              </tr>
              <tr>
                <th scope="col">SPECIES</th>
                <th scope="col">{props.data.species}</th>
              </tr>
              <tr>
                <th scope="col">STATUS</th>
                <th scope="col">{props.data.status}</th>
              </tr>
              <tr>
                <td>GENDER</td>
                <td>{props.data.gender}</td>
              </tr>
              <tr>
                <td>ORIGIN</td>
                <td>{props.data.origin.name}</td>
              </tr>
              <tr>
                <td>LAST LOCATION</td>
                <td>{props.data.location.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>)
  } else {
    return (<div>
      <p>
        No results Found!
          </p>
    </div>)
  }


};


export default Character;