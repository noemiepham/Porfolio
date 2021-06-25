import Projet from "./Projet.js"
const Projetsource = () => {
    const source = [
        {
            nameofprojet: 'TO_DO_LIST',
            Date: '22_06_2021',
            Code: "react",
            imageURL: "https://https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/06/vietnamese-coffee-4189.webp.it/4L9abAQ",
        },
        {
            nameofprojet: 'Studio photographer',
            Date: '25_05_2021',
            Code: "html-css-bootstrap",
            imageURL: "https://https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/06/vietnamese-coffee-4189.webp.it/4L9abAQ",
        },
        {
            nameofprojet: 'World Map',
            Date: '22_06_2021',
            Code: "javascrips",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/06/vietnamese-coffee-4189.webp"
        },
        {
            nameofprojet: 'foot blog',
            Date: '22_06_2021',
            Code: "react-javascrips",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/06/vietnamese-coffee-4189.webp",
        },
        {
            nameofprojet: 'foot blog',
            Date: '22_06_2021',
            Code: "react-javascrips",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/06/vietnamese-coffee-4189.webp",
        },
        {
            nameofprojet: 'foot blog',
            Date: '22_06_2021',
            Code: "react-javascrips",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/06/vietnamese-coffee-4189.webp",
        },
        {
            nameofprojet: 'foot blog',
            Date: '22_06_2021',
            Code: "react-javascrips",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/06/vietnamese-coffee-4189.webp",
        },
       
        {
            nameofprojet: 'foot blog',
            Date: '22_06_2021',
            Code: "react-javascrips",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/06/vietnamese-coffee-4189.webp",
        },
     
       
    ]
    return (
        <section className="Projet">
            <h1 className="style-generale">
                PROJET
            </h1>
            <div className="projet-content">
                {source.map((pro) => {
                    return <Projet imageAdress={pro.imageURL} name0fprojet={pro.nameofprojet} date={pro.Date} code={pro.Code} />
                })
                }
            </div>
        </section>
    )
}
export default Projetsource