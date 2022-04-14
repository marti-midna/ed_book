import './style.css'

export const Header = ({voce1, voce2, voce3, voce4}) => (
    <header>

        <h1>La Casa del Libro</h1>
        <nav>
            <ul>
                <li>{voce1}</li>
                <li>{voce2}</li>
                <li>{voce3}</li>
                <li>{voce4}</li>
            </ul>
        </nav>
        <div className='social_icons'>
            <i class="fa-brands fa-facebook fa-xl"></i>
            <i class="fa-brands fa-instagram fa-xl"></i>
            <i class="fa-brands fa-twitter fa-xl"></i>
        </div>
    </header>
);
