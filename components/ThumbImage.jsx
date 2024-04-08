import Image, { StaticImageData } from "next/image"




export function ThumbImage({ srcImage , onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full h-full overflow-hidden rounded-md"
            
        >
        <Image           
            src={srcImage}
            width={350}
            height={200}
            alt="Image"
            className="hover:scale-110 transition-all ease-linear cursor-pointer" 
        />
        </button>
    )
}