import React from 'react'
const Filter = (props) => {
    console.log('<Filter> : initiated')
    //const [year, setYear]=useState('2019')
    const optionHandler = (event) => {

        console.log(event.target.value);
        props.onChange(event.target.value)

    }


    return (
        <div className='filter__container'>
            <label className='label' >Filter</label>
            <select value={props.filterYear} onChange={optionHandler}>
                <option value='All'> All</option>
                <option value='2018'  >2018</option>
                <option value='2019'  >2019</option>
                <option value='2020' >2020</option>
                <option value='2021' >2021</option>
                <option value='2022' >2022</option>

            </select>

        </div>
    );
}

export default Filter;