import { useState } from "react";

type FaqProps = {
    question: string;
    answer: string;
}
const Faq: React.FC<FaqProps> = ({
    question,
    answer
}) => {
    const [faq, setFaq] = useState(false);
    return (
        <>
            <a onClick={() => setFaq(!faq)}>
                <div className='flex gap-5 border-b border-gray-300 hover:border-gray-400 hover:cursor-pointer my-5'>
                    {faq ? <span className='text-2xl'>&#9650;</span> : <span className='text-2xl'>&#9660;</span>}
                    <h3 className='text-2xl font-semibold mb-2 text-gray-700'>{question}</h3>
                </div>
                <p className={`text-lg font-thin ${faq ? null : "hidden"}`}>{answer}</p>
            </a>
        </>
    )
}

export default Faq;