
'use client'

import topicImg from "public/ski.jpg"
import CardBanner from "@/components/card-banner";
import LandingHeader from "@/components/landing-header";
import LicenseFooter from "@/components/license-footer";
import Navhead from "@/components/navhead";
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import {ArrowRight, ArrowLeft} from 'lucide-react';
import { MouseEventHandler, useState } from "react";

type Topics = 'technology' | 'foods' | 'nature' | 'sport' | 'programming' | 'networking' | 'art';

function TopicPage() {
    const [topics, setTopics] = useState<Array<Topics>>([])
    const [activeStates, setActiveStates] = useState<Array<boolean>>([false])
    //const [isActive, setIsActive] = useState<boolean>(false)
    let isActive = false
    console.log(topics)
    console.log(activeStates)

    function handleSelectTopic(index: number, topic: string): void {
        //setIsActive(!isActive)
        const newActiveStates = [...activeStates]
        switch(topic) {
            case 'sport':
                if (topics.includes("sport")) {
                    const removedTopic = topics.filter(item => item !== 'sport');
                    setTopics(removedTopic)
                    newActiveStates[index] = false;
                    //setIsActive(false)
                } else {
                    setTopics([...topics, "sport"])
                    newActiveStates[index] = true;
                    //setIsActive(!isActive)
                }
                break;
            case 'foods':
                if (topics.includes("foods")) {
                    const removedTopic = topics.filter(item => item !== 'foods');
                    setTopics(removedTopic)
                    newActiveStates[index] = false;
                    //setIsActive(false)
                } else {
                    setTopics([...topics, "foods"])
                    newActiveStates[index] = true;
                    //setIsActive(!isActive)
                }
                break;
            case 'nature':
                if (topics.includes("nature")) {
                    const removedTopic = topics.filter(item => item !== 'nature');
                    setTopics(removedTopic)
                    newActiveStates[index] = false
                    //setIsActive(false)
                } else {
                    setTopics([...topics, "nature"])
                    newActiveStates[index] = true;
                    //setIsActive(true)
                }
                break;
            case 'programming':
                if (topics.includes("programming")) {
                    const removedTopic = topics.filter(item => item !== 'programming');
                    setTopics(removedTopic)
                    newActiveStates[index] = false
                    //setIsActive(false)
                } else {
                    setTopics([...topics, "programming"])
                    newActiveStates[index] = true
                    //setIsActive(true)
                }
                break;
            case 'technology':
                if (topics.includes("technology")) {
                    const removedTopic = topics.filter(item => item !== 'technology');
                    setTopics(removedTopic)
                    newActiveStates[index] = false
                    //setIsActive(false)
                } else {
                    setTopics([...topics, "technology"])
                    newActiveStates[index] = true
                    //setIsActive(true)
                }
                break;
            case 'networking':
                if (topics.includes("networking")) {
                    const removedTopic = topics.filter(item => item !== 'networking');
                    setTopics(removedTopic)
                    newActiveStates[index] = false
                    //setIsActive(false)
                } else {
                    setTopics([...topics, "networking"])
                    newActiveStates[index] = true
                    //setIsActive(true)
                }
                break;
            case 'art':
                if (topics.includes("art")) {
                    const removedTopic = topics.filter(item => item !== 'art');
                    setTopics(removedTopic)
                    newActiveStates[index] = false
                    //setIsActive(false)
                } else {
                    setTopics([...topics, "art"])
                    newActiveStates[index] = true
                    //setIsActive(true)
                }
                break;
            default:
                break;
        }

        setActiveStates(newActiveStates);
    }

    return (
            <main className="flex justify-center items-center min-h-screen gap-x-8 w-auto laptop:mx-10">
                
                <section className="grid laptop:grid-cols-2 mobile:grid-cols-1 laptop:gap-x-20 mobile:gap-x-10 justify-center gap-y-10">
                
                {/* gambar */}
                    <Image 
                    style={
                        {
                            borderTopRightRadius: '150px'
                        }
                    }
                    src={topicImg} 
                    alt='ski' 
                    width={350}
                    className="hidden laptop:mx-auto mobile:flex mobile:mx-auto justify-center items-center laptop:w-auto mobile: w-1/2"
                    />
                {/* cotainer */}
                <section className="flex flex-col justify-center laptop:gap-x-10 w-auto">
                <p className="my-4 laptop:text-3xl font-semibold mobile:text-lg">What makes you interested?</p>
                {/* select topic */}
                <div 
                style={{maxWidth: 1200}}
                className="grid mobile:grid-cols-2 laptop:grid-cols-3 laptop:mx-auto gap-x-4 laptop:text-2xl laptop:w-auto gap-y-3 mx-2">
                    <Button variant={"topics"} onClick={() =>handleSelectTopic(0, "sport")} className={`text-white w-xl p-2 laptop:py-6 laptop:px-2 ${activeStates[0] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Sport
                    </Button>
                    <Button variant={"topics"} onClick={() => handleSelectTopic(1, 'foods')} className={`text-white w-xl p-2 laptop:py-6 ${activeStates[1] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Foods
                    </Button>
                    <Button variant={"topics"} onClick={() => handleSelectTopic(2, "nature")} className={`text-white w-xl p-2 laptop:py-6 ${activeStates[2] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Nature
                    </Button>
                    <Button variant={"topics"} onClick={() => handleSelectTopic(3, "programming")} className={`text-white w-xl p-2 laptop:py-6 laptop:px-2 ${activeStates[3] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Programming
                    </Button>
                    <Button variant={"topics"} onClick={() => handleSelectTopic(4, "technology")} className={`text-white w-xl p-2 laptop:py-6 ${activeStates[4] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Technology
                    </Button>
                    <Button variant={"topics"} onClick={() => handleSelectTopic(5, "networking")} className={`text-white w-xl p-2 laptop:py-6 ${activeStates[5] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Networking
                    </Button>
                    <Button variant={"topics"} onClick={() => handleSelectTopic(6, "art")} className={`text-white w-m p-1 laptop:py-6 ${activeStates[6] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Art
                    </Button>
                </div>

                <div className="mt-20 space-x-28 flex justify-center laptop:text-2xl">
                    <Button className="bg-purple-500 laptop:py-6 ">
                        <ArrowLeft />
                        Back
                    </Button>
                    <Button className="laptop:py-6">
                        Next
                        <ArrowRight />
                    </Button>
                </div>
                </section>

                </section>
            </main>
    )
}

export default TopicPage