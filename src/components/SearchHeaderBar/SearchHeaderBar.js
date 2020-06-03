import React from "react";
import style from './SearchHeaderBar.css'
import SelectedFilters from '../SelectedFilters/SelectedFilters'



const SearchHeaderBar = props => {

    const inputName = React.useRef();
    const orderBy = React.useRef();

    return (
        <div className={`${style.crd} , card`}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12">
                        <div className="selected-filters d-flex" >
                            {
                                (props.speciesFilter || props.genderFilter || props.removeSelectedFilter) 
                                ? <SelectedFilters
                                speciesFilter={props.speciesFilter}
                                genderFilter={props.genderFilter}
                                statusFilter={props.statusFilter}
                                removeSelectedFilter={props.removeSelectedFilter} /> : null
                            }
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="name">Search by name:</label>
                        <input type="text" className="form-control d-inline-block" id="name"
                            onChange={
                                ($event) => { return (($event.key === 'Enter') ? props.getData($event.target.value) : null) }
                            }
                            onKeyPress={
                                ($event) => { return (($event.key === 'Enter') ? props.getData($event.target.value) : null) }
                            }
                            ref={inputName} />
                        <button type="submit" className={style.searchButton}
                            onClick={($event) => { props.getData(inputName.current.value) }}>
                            Search </button>
                    </div>
                    <div className="col-md-4"> </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="sel1">Sort</label>
                            <select ref={orderBy}
                             className="sorting-cls" 
                             onChange={($event) => { props.getOrder($event.target.value) }} className="form-control" id="sel1">
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SearchHeaderBar;