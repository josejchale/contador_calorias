export type Category = {
    id: number;
    name: string;
}

export type FoodItem  = Category & {
    calories: number;
}

export type ExerciseItem = Category&{
    caloriesBurned: number;
}

export type opt ={
    category: string,
    foodItem: string,
    exerciseItem: string
}