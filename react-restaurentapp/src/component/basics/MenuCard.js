import React from 'react'


const MenuCard = ({state}) => {
    // console.log(state);
    return (
        <>
        <section className="main-card--cointainer">
        {state.map((curentElement)=>{
            return(
                <>
                <div className="card-ontainer" key={curentElement.id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">{curentElement.id}</span>
                        <span className="card-author subtle">{curentElement.name}</span>
                        <span className="card-title">{curentElement.name}</span>
                        <span className="card-discripton subtle">
                        {curentElement.descripton}
                        </span>
                        <div className="card-read">Read</div>
                    </div>

                    <img src={curentElement.image} alt="images"  className="card-media"/>
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
            </>

            )
        })}
        </section>
       
            
        </>
    )
}

export default MenuCard
