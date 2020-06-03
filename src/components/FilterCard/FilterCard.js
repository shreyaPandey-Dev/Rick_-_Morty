import React from "react";
import style from './FilterCard.css'


const FilterCard = props => {

	return (
		<div className={style.filterCard}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<form>
							<div className={`${style.cardbdy} card`}>
								<h5 className="card-header" > {props.characterType.type}	</h5>
								<div className={`${style.cbody} card-body`}>
									{
										props.characterType.data.map(
											(checkrow, index) => {
												return (
													<div className="form-group" key={index}>
														<input type="checkbox"
															className={`${style.checkbox} form-check-input`}
															onClick={($event) => props.getFilter($event.target.checked, checkrow, props.characterType.type)}
															id={checkrow.title}
															checked={checkrow.isChecked}
															onChange={() => { }} />
														<label
															className="form-check-label checkrow"
															htmlFor={checkrow.title}>
																{checkrow.title}
														</label>
													</div>
												)
											}
										)
									}
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};


export default FilterCard;