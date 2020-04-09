import React from 'react';
import Link from "../components/Link/Link";

export function searchPerson(users, input) {
    if (input.length === 0) {
        return users;
    }

    return users.filter((user) => {
        return user.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
    })
}

export function filter(arr, filt, growth) {

    if (filt === 'ID' && growth === 'Up') {

        return arr.slice().sort((a, b) => a.id > b.id ? 1 : -1);

    } else if (filt === 'ID' && growth === 'Down') {

        return arr.slice().sort((a, b) => b.id - a.id);

    } else if (filt === 'Name' && growth === 'Up') {

        return arr.slice().sort((a, b) => a.name > b.name ? 1 : -1);

    } else if (filt === 'Name' && growth === 'Down') {

        return arr.slice().sort((a, b) => a.name > b.name ? 1 : -1).reverse();

    } else if (filt === 'Age' && growth === 'Up') {

        return arr.slice().sort((a, b) => a.age > b.age ? 1 : -1);

    } else if (filt === 'Age' && growth === 'Down') {
        return arr.slice().sort((a, b) => b.age - a.age);
    }
    return arr
}

export const determineAgeHelper = (age) => {

    const textYears = <Link content='textYears' />
    const textYear = <Link content='textYear' />
    const textOfTheYear = <Link content='textOfTheYear' />

    let text;

    let count = age % 100;
    if (count >= 5 && count <= 20) {
        text = textYears;
    } else {
        count = count % 10;
        if (count === 1) {
            text = textYear;
        } else if (count >= 2 && count <= 4) {
            text = textOfTheYear;
        } else {
            text = textYears;
        }
    }

    return (
        <span>{age} {text}</span>
    );
}

export const updateFavourite = (items, itemId, id, newProp) => {

    return items.map(u => {
        if (u[id] === itemId) {
            return { ...u, ...newProp }
        }
        return u;
    })
}