
import Foodbag from "./Foodbag"
const Asiafood = (props) => {
    const allfoodasia = [
        {
            name: 'Vietnamese Broccoli',
            time: "15 minus",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/04/chinese-broccoli-3258w-2048x1366.webp",
            cooking: "Make the sauce: In a small bowl, whisk together some soy sauce, corn starch, chicken stock (or water), toasted sesame oil, and shaoxing wine.Stir fry the garlic and ginger: Heat a bit of oil in a wok or large pan over medium heat. Add garlic and ginger and cook, stirring, until soft but not brown.Cook the gai lan: Add the gai lan to the pan and cook for 2-4 minutes, stirring occasionally, until bright green and tender., Sauce it up: Add the prepared sauce to the pan and cook, until the sauce thickens a bit. Remove from the pan and enjoy!",
        },
        {
            name: 'Pates mushroom',
            time: "20 minus",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2017/07/lo-mein-0982-Editw-2048x1366.webp",
            cooking: "American Chinese lo mein is a stir fry noodle dish: thick noodles mixed with a soy sauce based sauce and toppings like beef, pork, chicken, or vegetables.",
        },
        {
            name: 'Chicken Breast',
            time: "15 minus",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/06/instant-pot-chicken-breast-4362w-2048x1366.webp",
            cooking: "These chicken breasts are marinated in a sweet and spicy chili sauce that’s inspired by the BTS sweet chili sauce. I’m a low-key ARMY so when I saw that Mcdonald’s themed up with BTS for a chicken nuggget meal you bet I was there. I love nuggies! But most of all, I loved the sweet chili sauce! Because I suspected it was a classic Korean sweet and spicy sauce used with Korean fried chicken, I did a quick peep on the ingredients for the sweet chili sauce and it was almost exactly what you’d find in a Korean dakgangjeong sauce.",
        },
        {
            name: 'Korean BBQ ',
            time: "30 minus",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/11/korean-bbq-8064w.jpg",
            cooking: " After Brazil, Vietnam is the largest producer of coffee in the world and it’s no surprise that Vietnamese coffee culture is fierce. Cafes line the streets and morning, noon, and night, you’ll see people drinking coffee. It’s just a way of life. After pho and banh mi, I think Vietnamese coffee might be the most well known Vietnamese culinary export.",
        },
        {
            name: 'Air Fryer Mushrooms ',
            time: "30 minus",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/05/air-fryer-mushrooms-4042w-2048x1366.webp",
            cooking: "Using a mix of mushrooms is incredibly elegant and really makes air fried mushrooms feel fancy. Serve them up with some homemade sourdough, high quality butter, and flaky sea salt for an easy yet impressive appetizer.",
        },
        {
            name: 'Honeycomb Pasta',
            time: "15 minus",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/04/honeycomb-pasta-2741w-2048x1366.webp",
            cooking: "Make the sauce: In a small bowl, whisk together some soy sauce, corn starch, chicken stock (or water), toasted sesame oil, and shaoxing wine.Stir fry the garlic and ginger: Heat a bit of oil in a wok or large pan over medium heat. Add garlic and ginger and cook, stirring, until soft but not brown.Cook the gai lan: Add the gai lan to the pan and cook for 2-4 minutes, stirring occasionally, until bright green and tender., Sauce it up: Add the prepared sauce to the pan and cook, until the sauce thickens a bit. Remove from the pan and enjoy!",
        },
        {
            name: 'Twisted Bacon',
            time: "15 minus",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/04/twisted-bacon-3349w-2048x1366.webp",
            cooking: "Twisted bacon makes the perfect combination of crispy crunchy bacon and soft bacon because the twist creates a tunnel – the inside of the twist is soft and tender and the outside edges end up being crisp. Somehow eating bacon that isn’t in it’s regular form factor makes it even more delicious. It’s perfect for a keto snack – in fact the original viral hack were via @house.of.keto and @lowcarbstateofmind",
        },
        {
            name: 'Tiktok Pasta',
            time: "15 minus",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/03/baked-feta-pasta-0974w.jpg",
            cooking: "The tiktok pasta everyone is talking about: baked feta pasta has it all, big bold flavors, creamy comfort, and carbs!Baked feta pasta is taking the TikTok world by storm and it’s obvious why: it’s creamy, tomato-y, and SO damn delicious. It’s probably the simplest pasta dish you’ll make this month and the reward is so high for an incredibly low effort.",
        },
        {
            name: 'Chicken Rice',
            time: "15 minus",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/09/one-pot-hainanese-chicken-7107w.jpg",
            cooking: "Have you ever had Hainanese chicken rice before? Are you as obsessed with it as I am? I’m guessing the answer is no because I have a lifelong, deep obsession with chicken rice.It’s my ultimate comfort food, my all-time-favorite go to meal, my version of Anton Ego’s mom’s ratatouille. You know, the scene in in the Pixar movie where Anton is taken back to his mom’s kitchen and she serves him ratatouille and all is right with the world. That’s Hainanese chicken rice for me.",
        },
        {
            name: 'The Best Pho Recipe',
            time: "15 minus",
            imageURL: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/09/pho-6443w.jpg",
            cooking: "If you’ve had it – and I don’t think many people haven’t – you know it needs no introduction. That deeply spiced fragrant broth is the stuff dreams are made of. But did you know that you can make the best pho ever from scratch right in your own kitchen? It’s super easy and you will might even like it better than your local pho spot.",
        },
        
    ]
    return (
        <section id="Menuweek" >
            <div className="breakpage"></div>
            <div className="my-recipes">ASIA FOOD </div>
            <div   className="Carroussel">
            {allfoodasia.map((bag) => {
                return <Foodbag  compteurPlat = {props.compteurPlat} setcompteurPlat = {props.setcompteurPlat} imageAdress={bag.imageURL} name={bag.name} time ={bag.time} cooking ={bag.cooking}/>
            })
            }
            </div>
        </section>
    
    )
}
export default Asiafood