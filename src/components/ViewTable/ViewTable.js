import React from 'react';
import { NavLink } from 'react-router-dom';

import './ViewTable.scss';
import Translate from 'react-translate-component';
import Link from '../Link/Link';


const ViewTable = ({ filter }) => {

    const linkTable = <Link content='linkTable' />
    const linkPreview = <Link content='linkPreview' />

    return (
        <div>
            <Translate content="view" component='h3' />

            <div>

                <NavLink to={`/table/${filter}`}
                    activeClassName="activeLink"
                    className="link">

                    {linkTable}
                </NavLink>

                <NavLink to={`/preview/${filter}`}
                    activeClassName="activeLink"
                    className="link">

                    {linkPreview}
                </NavLink>

            </div>
        </div>
    );
}

export default ViewTable;