import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import {IngridientProps, RecipeProps, RecipesProps} from './App'
const APP_ID = "2e98ff78";
const APP_KEY = "5a141752ab6965459e484a19007b0f94";

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const food = useSelector((state: RecipesProps) => state.recipe.food);
      const response = await axios.get(
        `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить рецепты");
    }
  }
);

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    food: "",
    recipes: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    setFood: (state, action) => {
      state.food = action.payload;
    },
  },

  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.recipes = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setFood } = recipeSlice.actions;
export default recipeSlice.reducer;
