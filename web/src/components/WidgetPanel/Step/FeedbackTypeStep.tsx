import { feedbackobject, FeedbackType } from "..";
import CloseButton from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type:FeedbackType) => void;
}

export default function FeedbackTypeStep(props: FeedbackTypeStepProps){

    return (
        <>
            <header>
                    <span className="text-xl leading-6">Deixe seu feedback</span>
                    
                    <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                {
                    Object.entries(feedbackobject).map(([key, value], pos)=>(
                        <button key={pos} className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center
                        gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={()=>props.onFeedbackTypeChanged(key as FeedbackType)}>
        
                            <img src={value.icon.source} alt={value.icon.alt}/>
                            <p>{value.title}</p>
                        </button>
                    ))
                }
            </div>
        </>
    )
}