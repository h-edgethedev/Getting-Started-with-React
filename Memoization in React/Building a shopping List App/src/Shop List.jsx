import { useState } from "react";
import { useCallback } from "react";

export const ShoppingList= ()=>{
    return(
        <div className="container">
            <h1>Shopping List</h1>
            <form>
                <label htmlFor="search">Search for an item:
                    <input type="search" name="" id="" />
                </label>
            </form>
        </div>
    )
}