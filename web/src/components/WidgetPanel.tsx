import { useState } from "react";

import CloseButton from "./CloseButton";
import bug from '../../assets/Bug.png'
import idea from '../../assets/Idea.png'
import other from '../../assets/Thought.png'

const feedbackobject = {
    BUG: {
        title: "Problema",
        icon: {
            source: bug,
            alt: 'Ícone de inseto'
        }
    },
    IDEA: {
        title: "Ideia",
        icon: {
            source: idea,
            alt: 'Ícone de lâmpada'
        }
    },
    OTHER: {
        title: "Outro",
        icon: {
            source: other,
            alt: 'Ícone de balão de pensamento'
        }
    },
}

type FeedbackType = keyof typeof feedbackobject;

export default function WidgetPanel(){
    const [ feedbackstate, setfeedbackstate ] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                
                <CloseButton />
            </header>

            {
                !feedbackstate?(
                    <div className="flex py-8 gap-2 w-full">
                        {
                            Object.entries(feedbackobject).map(([key, value], pos)=>(
                                <button key={pos} className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center
                                gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                    onClick={()=>setfeedbackstate(key as FeedbackType)}>

                                    <img src={value.icon.source} alt={value.icon.alt}/>
                                    <p>{value.title}</p>
                                </button>
                            ))
                        }
                    </div>
                ):(
                    <h1>SELECIONADO</h1>
                )
            }

            <footer className="text-xs text-neutral-400">
                Feito por <span className="underline underline-offset-2">Matheus Schreiber</span>
            </footer>
        </div>
    )
}