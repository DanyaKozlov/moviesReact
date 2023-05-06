function Footer(){
    return <footer className = "footer">
        <div className="footerMovies">
            <div className="Content">
                {new Date().getFullYear()}
                <div className="footerText"> 
                    <p >Сайт сделан не фанатом человека-Паука Козловым Даниилом</p>
                    <p>Специально для предмета "Вёрстка и создание приложений"</p>
                </div>
            </div>
        </div>
    </footer>
}

export {Footer};