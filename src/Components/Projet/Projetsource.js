
import Projet from "./Projet"
const Projetsource = () => {
    const source = [
        {  
            nameofprojet: 'TO_DO_LIST',
            Date: '22_06_2021',
            Code: "react",
            imageURL: "https://res.cloudinary.com/dkcx8d2bi/image/upload/v1624823143/todolist_zxfax6.png",
            myPath: "/todolist"
        },
        {
            nameofprojet: 'STUDIO PHOTOGRAPHER',
            Date: '25_05_2021',
            Code: "html-css-bootstrap",
            imageURL: "https://res.cloudinary.com/dkcx8d2bi/image/upload/v1624823181/Screen_Shot_2021-06-24_at_13.14.37_hcyyo6.png",
            myPath: "/studiophoto"
        },
      /*   {
            nameofprojet: 'WORLD MAP',
            Date: '22_06_2021',
            Code: "javascrips",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/06/vietnamese-coffee-4189.webp"
        }, */
        {
            nameofprojet: 'CINEMA',
            Date: '22_06_2021',
            Code: "react-javascrips",
            imageURL: "https://res.cloudinary.com/dkcx8d2bi/image/upload/v1624826581/cinema_slbusv.png",
            myPath: "/Cinema",
            
        },
        {
            nameofprojet: 'FOOD BLOG',
            Date: '22_06_2021',
            Code: "react-javascrips",
            imageURL: "https://res.cloudinary.com/dkcx8d2bi/image/upload/v1624823128/foodblog_zzrzno.png",
            myPath: "/Foodblog"
        },
        {
            nameofprojet: 'GAME  CHIFOUMIE ',
            Date: '22_06_2021',
            Code: "react-javascrips",
            imageURL: "https://res.cloudinary.com/dkcx8d2bi/image/upload/v1624884488/Screen_Shot_2021-06-28_at_14.45.28_tzpiga.png",
            myPath: "/game"
        },
        {
            nameofprojet: 'MAGASIN SHOPING',
            Date: '22_06_2021',
            Code: "react-javascrips",
            imageURL: "https://res.cloudinary.com/dkcx8d2bi/image/upload/v1624883395/Screen_Shot_2021-06-28_at_14.25.06_mcsebg.png",
        },
       
    /*     {
            nameofprojet: 'game',
            Date: '22_06_2021',
            Code: "react-javascrips",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/06/vietnamese-coffee-4189.webp",
        },
      */
       
    ]
    return (
        <section className="Projet">
            <h1 className="style-generale">
                PROJET
            </h1>
            <div className="projet-content" id = "projet">
                {source.map((pro) => {
                    return <Projet imageAdress={pro.imageURL} name0fprojet={pro.nameofprojet} date={pro.Date} code={pro.Code} myPaths = {pro.myPath}/>
                })
                }
            </div>
        </section>
    )
}
export default Projetsource