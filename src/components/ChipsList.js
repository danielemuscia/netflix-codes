import React from 'react'
import {categories} from '../data'
import Chips from './Chips'

export default function ChipsList() {
    return (
        <div className='chipsList'>
            <div>
            <h2>Choose the main category</h2>
            </div>
            <div className='chipsList__chips'>
            {categories.map(category => <Chips name={category.main.title} id={category.main.id} />)}
            </div>
        </div>
    )
}
