
'use client'

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
        <>
            <Navhead />
            <main className="flex justify-center items-center min-h-screen gap-x-70 w-full">
                {/* gambar */}
                <figure className="hidden sm:flex justify-center items-center w-1/2">
                    <Image 
                    style={
                        {
                            borderTopRightRadius: '40px'
                        }
                    }
                    src={"https://images.unsplash.com/photo-1565992441121-4367c2967103?auto=format&fit=crop&q=80&w=2023&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                    alt='ski' 
                    width={250}
                    height={200} />
                </figure>
                {/* cotainer */}
                <section className="flex flex-col max-w-2">
                {/* select topic */}
                <div 
                style={{maxWidth: 400}}
                className="flex flex-wrap gap-x-4 gap-y-3 max-w-3 w-full">
                    <Button variant={"topics"} onClick={() =>handleSelectTopic(0, "sport")} className={`text-white w-xl p-2 ${activeStates[0] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Sport
                    </Button>
                    <Button variant={"topics"} onClick={() => handleSelectTopic(1, 'foods')} className={`text-white w-xl p-2 ${activeStates[1] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Foods
                    </Button>
                    <Button variant={"topics"} onClick={() => handleSelectTopic(2, "nature")} className={`text-white w-xl p-2 ${activeStates[2] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Nature
                    </Button>
                    <Button variant={"topics"} onClick={() => handleSelectTopic(3, "programming")} className={`text-white w-xl p-2 ${activeStates[3] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Programming
                    </Button>
                    <Button variant={"topics"} onClick={() => handleSelectTopic(4, "technology")} className={`text-white w-xl p-2 ${activeStates[4] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Technology
                    </Button>
                    <Button variant={"topics"} onClick={() => handleSelectTopic(5, "networking")} className={`text-white w-xl p-2 ${activeStates[5] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Networking
                    </Button>
                    <Button variant={"topics"} onClick={() => handleSelectTopic(6, "art")} className={`text-white w-xl p-2 ${activeStates[6] ? 'bg-indigo-100 text-black': 'bg-indigo-600'}`}>
                        Art
                    </Button>
                </div>

                <div className="mt-28 space-x-28 flex">
                    <Button className="bg-purple-500">
                        <ArrowLeft />
                        Back
                    </Button>
                    <Button>
                        Next
                        <ArrowRight />
                    </Button>
                </div>
                </section>
            </main>
            <LicenseFooter />
        </>
    )
}

export default TopicPage