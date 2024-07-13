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

export type Options ={
    id: string,
    category: number,
    foodItem: number,
    exerciseItems: number
}