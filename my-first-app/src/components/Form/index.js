import './style.css';

export const Form = () => (
        <form className='form_contattami'>
            <h3 className='title_components'>Contattami</h3>
            <label for="">Oggetto</label>
            <div className='oggetto'>
                <input type="text" id="obj"></input>
            </div>

            <label for="">Messaggio</label>
            <div className='messaggio'>
                <textarea></textarea>
            </div>
        </form>
);