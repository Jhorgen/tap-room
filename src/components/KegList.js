import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";
import UserNav from "./UserNav"
import { Link } from 'react-router-dom';

function KegList(props) {
    return (
      <div>
      <UserNav/>
        <div className='keglist-buttons'>
          <Link className='add-keg-link' to='newkeg'>Add keg</Link>
        </div>
        {props.masterKegList.map((keg, index) =>
          <Keg
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            remainder={keg.remainder}
            kegIndex={index}
            key={index}
            />
        )}
      </div>
    );
  }

KegList.propTypes = {
  masterKegList: PropTypes.array,
  remainder: PropTypes.number
}

export default KegList
