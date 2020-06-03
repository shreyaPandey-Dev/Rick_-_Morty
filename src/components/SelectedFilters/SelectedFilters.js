import React from 'react';


const filterChip = (speciesValue, removeFilter, type) => {
    return (
    <span className="badge badge-danger ml-1 text-capitalize" >
        {speciesValue}
        <svg onClick={($event) => { removeFilter(type) }} className="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="fillRule" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="clipRule" />
            <path fillRule="fillRule" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="clipRule" />
        </svg>
    </span>);
}

const SelectedFilters = (props) => {
    console.log("PROPS__", JSON.stringify(props))
    return (
        <div className="d-flex">
            {
               props.speciesFilter &&  props.speciesFilter.species ?
                    <div>
                        <h5>
                            {filterChip(props.speciesFilter.species, props.removeSelectedFilter, "species")}
                        </h5>
                    </div> : null
            }
            {
            props.genderFilter && props.genderFilter.gender ? <div>
                    <h5>
                        {filterChip(props.genderFilter.gender, props.removeSelectedFilter, "gender")}
                    </h5>
                </div> : null
            }
            {
              props.statusFilter && props.statusFilter.status ? <div>
                    <h5>
                        {filterChip(props.statusFilter.status, props.removeSelectedFilter, "status")}
                    </h5>
                </div> : null
            }
        </div>
    )
}

export default SelectedFilters;