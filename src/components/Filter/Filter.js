import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import './Filter.scss';
import Translate from 'react-translate-component';
import Link from '../Link/Link';

const Filter = ({ onInputChange, path, onFilterChange, filter, onGrowthChange, growth }) => {

    const [input, setInput] = useState('')

    const linkID = <Link content='linkID' />,
        linkName = <Link content='linkName' />,
        linkAge = <Link content='linkAge' />,

        btnIncrease = <Link content='btnIncrease' />,
        btnDecrease = <Link content='btnDecrease' />;


    const filters = [
        { name: 'ID', label: linkID },
        { name: 'Name', label: linkName },
        { name: 'Age', label: linkAge }
    ];

    const growthButtons = [
        { name: 'Up', label: btnIncrease },
        { name: 'Down', label: btnDecrease }
    ];

    const inputChange = (event) => {

        const text = event.target.value;
        setInput(text);
        onInputChange(text);
    }

    return (
        <div>
            <Translate content="sort" component='h3' />

            <div className="filter__wrapper">
                <div>

                    <div>
                        {filters.map((f) => {

                            const active = filter === f.name
                                ? 'activeLink'
                                : null;

                            return <NavLink key={f.name}
                                onClick={() => onFilterChange(f.name)}
                                to={`/${path}/${f.name}`}
                                activeClassName={active}
                                className="link">

                                {f.label}
                            </NavLink>
                        })
                        }
                    </div>

                    <div style={{ marginTop: 5 }}>
                        {growthButtons.map((i) => {

                            const active = growth === i.name
                                ? 'btn_active'
                                : null

                            return <button onClick={() => onGrowthChange(i.name)}
                                className={`btn ${active}`}
                                key={i.name}>
                                {i.label}
                            </button>
                        })
                        }
                    </div>

                </div>
                <Translate value={input}
                    onChange={inputChange}
                    component='input'
                    attributes={{ placeholder: 'placeholder' }}
                />
            </div>
        </div >
    );
}

export default Filter;