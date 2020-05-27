import React from 'react';


const SelectedFilters = (props) => {
    
console.log("SELECTED FILTER+",props)

        return (
            <div className="d-flex">
                {
                    props.speciesFilter ? 
                    <div>
                    <h5>
                        <span className="badge badge-danger ml-1" >
                            {props.speciesFilter}
                                <svg  onClick={($event) => {props.removeSelectedFilter("species")}} className="bi bi-x"  width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="fillRule" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="clipRule" />
                                    <path fillRule="fillRule" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="clipRule" />
                                </svg>
                            
                        </span>
                    </h5>
                </div> : null
                }
                {
                      props.genderFilter ? <div>
                      <h5>
                          <span className="badge badge-danger ml-1" >
                              {props.genderFilter}
                              <svg onClick={($event) => {props.removeSelectedFilter("gender")}} className="bi bi-x"  width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="fillRule" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="clipRule" />
                                  <path fillRule="fillRule" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="clipRule" />
                              </svg>
                          </span>
                      </h5>
                  </div> : null
                }
                 {
                      props.statusFilter ? <div>
                      <h5>
                          <span className="badge badge-danger ml-1" >
                              {props.statusFilter}
                              <svg onClick={($event) => {props.removeSelectedFilter("status")}} className="bi bi-x"  width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="fillRule" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="clipRule" />
                                  <path fillRule="fillRule" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="clipRule" />
                              </svg>
                          </span>
                      </h5>
                  </div> : null
                }
                        
                  
            </div>
          
          )

}
 
export default SelectedFilters;