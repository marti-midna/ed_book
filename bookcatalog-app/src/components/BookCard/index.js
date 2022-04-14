import './style.css';

export const BookCard = ({img, name , description}) => (
    <div className='bookcard'>
        <div className='card'>
            <div className='img_container'>
            <img alt="" src={img}></img> 
            </div>
            
            <div className='inner_container'>
                <h3>{name}</h3>
                <p>{description}</p>

                <div className='btn'>
                    <button className='btn_add'>
                        Aggiungi al carrello
                    </button>
                </div>
            </div>
        </div>
        
    </div>
);