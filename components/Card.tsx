import Image, { StaticImageData } from "next/image"

interface initialProps{ 
    title:string, 
    body:string,
    pictureUrl?: StaticImageData, 
    phoneNumber?: string, 
    email?: string | null, 
    theme?: string | null,
    buttonText?: string,
}


const Card = (props: initialProps) => {
    return (
        <div className={props.theme === "dark" ? "  bg-slate-100 text-black w-80 ml-10 border-l rounded-lg p-6" : "border border-black bg-white-800"}>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                    {props.pictureUrl ?  <Image className="rounded-full" width={128} height={128} src={props.pictureUrl}></Image> : null}
                   
                </div>
                <div className="flex justify-center items-center pt-3">
                    <h1 className="text-2xl">{props.title}</h1>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-lg font-mono">{props.body}</p>
                </div>
                {/* <div className="flex justify-center items-center">
                    <p className="text-lg font-mono">{props.phoneNumber}</p>
                </div>

                <div className="flex justify-center items-center">
                    <p className="text-lg font-mono">{props.email}</p>
                </div> */}
                <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg p-2 mr-3 h-fit text-white">{props.buttonText}</button>
                
            </div>
        </div>
    )
}

export default Card