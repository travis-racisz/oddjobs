

interface initialProps { 
    number: string, 
    title: string, 
    body: string, 
    card?: React.ReactNode
}

const ContentCard = (props: initialProps) => { 
    return ( 
        <div className="flex flex-col w-80 justify-center items-center border-l pb-10">
            <div className="w-80 m-10 ml-0"> 
                <div className="flex gap-10 items-center justify-start">
                    <div className="rounded-full bg-white text-black flex justify-center items-center w-10 h-10 text-2xl text-bold"> 
                        <span>{props.number}</span>
                    </div>
                    <h1 className="text-6xl">{props.title}</h1>
                </div>
            </div>
            <div> 
                
            </div>
            <p className="text-lg font-mono ml-8 pb-6"> {props.body} </p>
            {props.card}
        </div> 
    )
}

export default ContentCard