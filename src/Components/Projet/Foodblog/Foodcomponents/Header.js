

const Header = (props) => {

return (
    <body>
        <header>
            <div className="menuBar">
             
                    <div  className="logoWeb">
                        <span>Noémie Cooking House </span>
                    </div>
            
                    <div className="listMenu">
                        <span>HOME</span>
                        <span>ABOUT</span>
                        <span>RECIPES </span>
                        <span> SHOP</span>
                        <span> CONTACT</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none"
                            stroke="#50250c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="10" cy="20.5" r="1"></circle>
                            <circle cx="18" cy="20.5" r="1"></circle>
                            <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"></path>
                        </svg>
                      
                        <div className="Basket">{props.tata}</div>
                    </div>
            </div>

        </header>
        <section  className="background">
            <h1 className="text">Enjoy Your Meal </h1>
        </section>
        <section className="center">
        </section>
        
</body>
)
}

export default Header