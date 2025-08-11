import React from 'react'
import Tony from '../../src/assets/images/tony.jpg'
import Steve from '../../src/assets/images/steve.jpg'
import Natasha from '../../src/assets/images/natasha.jpg'
import Slider from 'react-slick'

const TestimonialsData = [
    {
        id: 1,
        name: "Mr. Tony Stark",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure!",
        img: Tony
    },
    {
        id: 2,
        name: "Mr. Steve Rogers",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure!",
        img: Steve
    },
    {
        id: 3,
        name: "Miss. Natsha Romanoff",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure!",
        img: Natasha
    },
]
const Testimonial = () => {
    const setting = {
        dots: true,
        arrows: false,
        infinity: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    }
  return (
    <div className="mt-10 mb-15">
        <div className="container mx-auto">
            <div className="text-center mb-20 ">
                <h1 className='text-4xl font-bold text-primary underline'>
                    Testimonials
                </h1>
            </div>

            <div className="">
                {/* testimonial card */}
                <div>
                    {
                        TestimonialsData.map((data,index) => {
                            return(
                                <div className="my-6" key={data.id}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                                        <div className="mb-4">
                                            <img src={data.img} alt="" className='w-20 h-20 rounded-full' />
                                        </div>
                                        <div className="flex flex-col gap-4 ">
                                            <div className="space-y-3">
                                                <p className='text-xs text-gray-500'>{data.text}</p>
                                                <h1 className='text-xl font-bold text-black/80'>{data.name}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    </div>
  )
}

export default Testimonial