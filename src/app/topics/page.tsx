
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
    console.log(topics)

    function handleSelectTopic(topic: string): void {
        switch(topic) {
            case 'sport':
                if (topics.includes("sport")) {
                    const removedTopic = topics.filter(item => item !== 'sport');
                    setTopics(removedTopic)
                } else {
                    setTopics([...topics, "sport"])
                }
                break;
            case 'foods':
                if (topics.includes("foods")) {
                    const removedTopic = topics.filter(item => item !== 'foods');
                    setTopics(removedTopic)
                } else {
                    setTopics([...topics, "foods"])
                }
                break;
            case 'nature':
                if (topics.includes("nature")) {
                    const removedTopic = topics.filter(item => item !== 'nature');
                    setTopics(removedTopic)
                } else {
                    setTopics([...topics, "nature"])
                }
                break;
            case 'programming':
                if (topics.includes("programming")) {
                    const removedTopic = topics.filter(item => item !== 'programming');
                    setTopics(removedTopic)
                } else {
                    setTopics([...topics, "programming"])
                }
                break;
            case 'technology':
                if (topics.includes("technology")) {
                    const removedTopic = topics.filter(item => item !== 'technology');
                    setTopics(removedTopic)
                } else {
                    setTopics([...topics, "technology"])
                }
                break;
            case 'networking':
                if (topics.includes("networking")) {
                    const removedTopic = topics.filter(item => item !== 'networking');
                    setTopics(removedTopic)
                } else {
                    setTopics([...topics, "networking"])
                }
                break;
            case 'art':
                if (topics.includes("art")) {
                    const removedTopic = topics.filter(item => item !== 'art');
                    setTopics(removedTopic)
                } else {
                    setTopics([...topics, "art"])
                }
                break;
            default:
                break;
        }
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
                    <Button onClick={() =>handleSelectTopic("sport")} className="bg-indigo-600 text-white w-xl p-2">
                        Sport
                    </Button>
                    <Button onClick={() => handleSelectTopic('foods')} className="bg-purple-200 text-slate-950 w-xl p-2">
                        Foods
                    </Button>
                    <Button onClick={() => handleSelectTopic("nature")} className="bg-indigo-600 text-white w-xl p-2">
                        Nature
                    </Button>
                    <Button onClick={() => handleSelectTopic("programming")} className="bg-indigo-600 text-white w-xl p-2 px-4 ">
                        Programming
                    </Button>
                    <Button onClick={() => handleSelectTopic("technology")} className="bg-indigo-600 text-white w-xl p-2">
                        Technology
                    </Button>
                    <Button onClick={() => handleSelectTopic("networking")} className="bg-purple-200 text-slate-950 w-xl p-2">
                        Networking
                    </Button>
                    <Button onClick={() => handleSelectTopic("art")} className="bg-purple-200 text-slate-950 w-xl p-2">
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