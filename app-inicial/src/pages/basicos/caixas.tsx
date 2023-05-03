import Caixa from "@/components/basicos/Caixa";

export default function PaginaCaixa(){
    return(
        <div className='flex gap-7 p-7'>
            <Caixa>#1</Caixa>
            <Caixa>#2</Caixa>
            <Caixa>
                <ul className="list-disc">
                    <li>Item1</li>
                    <li>Item2</li>
                    <li>Item3</li>
                </ul>
            </Caixa>
        </div>
    )
}