import css from "./ListRecipes.module.css";


function ListRecipes({ recipes }) {
    return (

        <ul className={css.recipeList}>
            {recipes.map(recipe => {
                return (
                    <li key={recipe.key} className={css.recipeItem}>
                        <img src={recipe.img} className={css.recipeImg} />
                        <h2 className={css.recipeText}>{recipe.name}</h2>
                        <h2 className={css.recipeText}>ЧАС ПРИГОТУВАННЯ: {recipe.time}</h2>
                        <ul className={css.ingredientList}>
                            <h2 className={css.ingredientTitle}>ІГРІДІЄНТИ</h2>
                            {recipe.ingredients.map(ingredient => {
                                return (
                                    <li key={recipe.idIng} className={css.ingredientItem}>
                                        <p className={css.ingredientText}>{ingredient}</p>
                                    </li>
                                );
                            })}
                        </ul>

                    </li>
                );
            })}
        </ul>
    );
}

export default ListRecipes;