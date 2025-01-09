import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Popular = () => {
    const { meals } = useContext(AppContext)
    const popularMeals = meals.filter(meal => meal.category === "popular")

    return (
        <div>
            <div className='mb-5'>
                <div className="text-center">
                    <i className='text-yellow-600 text-center'>---Check it out---</i>
                </div>

                <div className='flex justify-center'>
                    <p className='uppercase border-y-2 flex items-center justify-center h-10 md:h-20 md:w-1/2 text-center my-4 text-2xl w-full md:text-4xl'>From our menu</p>
                </div>
                <div className='grid grid-cols-2 gap-5 place-items-center'>
                    {popularMeals.map(meal => (<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full p-4 rounded-lg shadow-sm">
                        <div className="w-24 mx-auto h-24 overflow-hidden mb-4 sm:mb-0 flex-shrink-0">
                            <img
                                src={meal.image}
                                alt="Roast Duck"
                                className="w-full h-full object-cover rounded-[0_50%_50%_50%]"
                            />
                        </div>
                        <div className="flex-grow w-full">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-0">
                                <h3 className="text-lg font-medium mb-1 sm:mb-0">
                                    {meal.name} <span className='hidden sm:inline-block text-gray-400 font-light'>{'-'.repeat(30)}</span>
                                </h3>
                                <span className="text-amber-600 font-medium">${meal.price}</span>
                            </div>

                            <p className="text-gray-600 text-sm">
                                {meal.recipe}
                            </p>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default Popular