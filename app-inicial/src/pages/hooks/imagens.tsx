import Carai from "@/hook/Carai";
import ImagemAleatoria from "@/hook/Carai";

export default function PaginaImagens() {
    return (
        <div className={`
            flex justify-center items-center h-screen
            gap-5
            `}>
          <Carai />
          <Carai />
          <Carai />
        </div>
    )
}