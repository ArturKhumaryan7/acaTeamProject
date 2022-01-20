import React from 'react';
import image from '../../assets/img/svgexport-7.svg'
import "./Categories.css"

const Categories = ({items}) => {
    const [activeItem,setActiveItem] = React.useState(null)
    const onSelectItem = (index)=>{
        setActiveItem(index)
    }
    return (
        <div>
            <div className='search'>
                <div className='search1'>Popular in </div>
                            <div className='search5'>
                                        <span className='span'>
                                                <img src={image} />
                                        </span>
                                <div className='search6' >
                                    <input  className='input' type="text" placeholder='Yerevan'/>
                                </div>
                            </div>

            </div>
            <nav className='nav'>
                <ul className='ul'>
                    <li className='li'>
                        <button
                            onClick={()=>onSelectItem(null)}
                            className={activeItem===null?'active':'passive'}>
                            <span
                                onClick={()=>onSelectItem(null)}
                                className={activeItem===null?'activeSpan':'span2'}>All</span>
                        </button>
                    </li>
                    {items &&
                        items.map((name,index)=>(
                            <li className='li' key={`${name}_${index}`}>
                                 <button
                                    onClick={()=>onSelectItem(index)}
                                    className={activeItem===index?'active':'passive'}>
                                     <span
                                        onClick={()=>onSelectItem(index)}
                                        className={activeItem===index?'activeSpan':'span2'}>{name}
                                     </span>
                                 </button>
                            </li>))}
                </ul>
            </nav>
        </div>

    );
};

export default Categories;



/* <nav className='nav'>
                <ul className='ul'>
                    <li className='li'>
                        <button
                            onMouseOver={()=>onItem(null)}
                            onClick={()=>onSelectItem(null)}
                            className={neutralItem===null?'neutral':'passive'}
                            className={activeItem===null?'active':'passive'}>
                            <span
                                onClick={()=>onSelectItem(null)}
                                className={activeItem===null?'activeSpan':'span2'}>All</span>
                        </button>
                    </li>
                    {items &&
                        items.map((name,index)=>(
                            <li className='li' key={`${name}_${index}`}>
                                 <button
                                    onMouseOver={()=>onItem(index)}
                                    onClick={()=>onSelectItem(index)}
                                    className={neutralItem===index?'neutral':'passive'}
                                    className={activeItem===index?'active':'passive'}>
                                     <span
                                        onClick={()=>onSelectItem(index)}
                                        onMouseOver={()=>onItem(index)}
                                        className={activeItem===index?'activeSpan':'span2'}>{name}
                                     </span>
                                 </button>
                            </li>))}
                </ul>
            </nav>*/