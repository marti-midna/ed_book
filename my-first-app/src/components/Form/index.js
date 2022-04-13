import './style.css';

export const Form = () => (
        <form>
            <h3 className='title_components'>Contattami</h3>

            
            <div className='divcampi'>
                <label for="obj">Oggetto</label>
                <input type="text" id="obj"></input>

                <label for="testomess">Messaggio</label>
                <textarea id="testomess"></textarea>
            </div>
        </form>
);