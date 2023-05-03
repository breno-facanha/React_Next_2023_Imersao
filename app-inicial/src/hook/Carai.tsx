export default function Carai(){

    function renderizarBotao(){
        return (
            <button className={`bg-blue-500`}>
                Teste
            </button>
        )
    }

    return (
        <div>
            {renderizarBotao()}
        </div>
    )
}