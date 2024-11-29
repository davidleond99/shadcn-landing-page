import FlipCard from '@/components/animata/card/flip-card'
import React from 'react'

export const GridCard = () => {
    return (

        <section id="features" className="container py-24 sm:py-32">
            <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                Features
            </h2>

            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                What Makes Us Different
            </h2>

            <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
                fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
                facere tenetur.
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
                {Array.from({ length: 3 }).map((_, index) => (
                    <FlipCard
                        key={index + 10}
                        description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
                        image="/premium_photo-1664303847960-586318f59035.jpeg"
                        rotate="y"
                        subtitle="What is programming?"
                        title="Programming"
                        />
                    ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer pt-8">
                {Array.from({ length: 3 }).map((_, index) => (
                    <FlipCard
                    key={index +1 }
                        description="I am a full-stack developer with a passion for building beautiful and functional applications."
                        image="/istockphoto-1493574434-612x612.jpeg"
                        rotate="x"
                        subtitle="Software Engineer"
                        title="Bibek Bhattarai"
                    />
                ))}
            </div>
        </section>

    )
}
