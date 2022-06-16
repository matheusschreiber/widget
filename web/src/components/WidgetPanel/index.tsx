import { useState } from "react";

import CloseButton from "../CloseButton";
import bug from '../../../assets/Bug.png'
import idea from '../../../assets/Idea.png'
import other from '../../../assets/Thought.png'

import FeedbackTypeStep from "./Step/FeedbackTypeStep";
import FeedbackContentStep from "./Step/FeedbackContentStep";
import FeedbackSuccessStep from "./Step/FeedbackSuccessStep";

export const feedbackobject = {
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

export type FeedbackType = keyof typeof feedbackobject;

export default function WidgetPanel(){
    const [ feedbackstate, setfeedbackstate ] = useState<FeedbackType | null>(null)
    const [ feedbacksent, setFeedbacksent ] = useState<boolean>(false)

    function restartWidget(){
        setFeedbacksent(false)
        setfeedbackstate(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col shadow-lg w-[calc(100vw-2rem)] md:w-auto text-center">
            {
                feedbacksent?
                <FeedbackSuccessStep restartWidget={restartWidget} /> :
                <>
                    {
                        !feedbackstate?(
                            <FeedbackTypeStep onFeedbackTypeChanged={setfeedbackstate}/>    
                        ):(
                            <FeedbackContentStep 
                                feedbackstate={feedbackstate}
                                onFeedbackTypeChanged={setfeedbackstate}
                                onFeedbackSent={()=>setFeedbacksent(true)}/>
                        )
                    }
                </>
            }

            <footer className="text-xs text-neutral-400">
                Feito por <span className="underline underline-offset-2">Matheus Schreiber</span>
            </footer>
        </div>
    )
}