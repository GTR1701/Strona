import React from 'react';
function Formularz(...props) {
    return (  
        <div>
        <center>
        <h1>Uzupełnij dane osobowe, aby kontynuować</h1> <br/>
        <form action="plik" method="get/post" >
            <label for="imie">Imię</label>
                <input type="text" name="imie"/>
        <br/>
            <label for="nazwisko">Nazwisko</label> 
                <input type="text" name="nazwisko"/>
         <br/>
            <label for="E-mail">E-mail</label> 
                <input type="text" name="E-mail"/>
        <br/>
            <label for="Firma">Nazwa Firmy</label> 
                <input type="text" name="Firma"/>
        <br/>
            <label for="poczta">Kod pocztowy</label> 
                <input type="text" name="poczta"/>
         <br/>
            <label for="ulica">Ulica</label> 
                <input type="text" name="Ulica"/>
        <br/>
            <label for="Miasto">Miasto</label> 
                <input type="text" name="Miasto"/>
        <br/>
            <label for="Tytuł">Tytuł zgłoszenia</label> 
                <input type="text" name="Tytuł"/>
        <br/>
            <label for="Krótki">Krótki opis</label> 
                <input type="text" name="Krótki opis"/>
         <br/>
            <label for="Opis">Opis</label> 
                <input type="text" name="Opis"/>
       <br/>
            <label for="wybor">Rodzaj zgłoszenia</label>
                <select id="wybor" name="usterka">
                    <option value="uszkodzenie">Uszkodzenie</option>
                    <option value="reklamacja">Reklamacja</option>
                    <option value="zażalenie">Zażalenie</option>
                    <option value="problem">Inny problem</option>
                </select>
                <br/>
                <input type="checkbox"/> Zaświadczam, że zapoznałem się z <a href="#">regulaminem</a> strony oraz wyrażam zgodę na przetwarzanie moich danych osobowych
         <br/>
                <input type="checkbox"/> Wyrażam zgodę na odbieranie newsletterów oraz powiadomień o akcjach organizowanych przez firmę
         <br/>
                <input type="submit" value="Prześlij zapytanie"/>
           
    
        </form>
        </center>
    </div>
    );
}

export default Formularz;