    import React from 'react'
import { FaMapLocation } from 'react-icons/fa6'

    const FeaturesData = [
        {
            id: 1,
        }
    ]

    const Features = () => {
    return (
        <section>
            <div className="container px-20 py-10 mx-auto">
                <div className="">
                    <h1 className='text-center text-4xl font-bold text-primary'>Features</h1>
                </div>

                <div className="">
                    {
                        FeaturesData.map((data, index) => {
                            return (
                                <div className="" key={index}>
                                    <div className="">
                                        <FaMapLocation />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
    }

    export default Features