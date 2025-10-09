import { useState } from "react";

type FaqProps = {
    question: string;
    answer: string;
    children?: React.ReactNode;
}
const Faq: React.FC<FaqProps> = ({
    question,
    answer,
    children
}) => {
    const [faq, setFaq] = useState(false);
    return (
        <>
            <a onClick={() => setFaq(!faq)}>
                <div className='flex gap-5 border-b border-gray-300 hover:border-gray-400 hover:cursor-pointer my-5'>
                    {faq ? <span className='text-2xl'>&#9650;</span> : <span className='text-2xl'>&#9660;</span>}
                    <h3 className='text-2xl font-semibold mb-2 text-gray-700'>{question}</h3>
                </div>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${faq ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}>
                    {children}
                    <p className={`text-lg font-thin`}>{answer}</p>
                </div>
            </a>
        </>
    )
}

export default Faq;