import { Button } from "../Buttom";
import { Text } from "../Text";

export function Form () {
    return (
        <form className="flex flex-col flex-1 mt-20 w-full justify-center text-center gap-7">
            <Text children="Entre em contato" size="titleContact" variant="default"/>
            <input type="" placeholder="nome / empresa" className="bg-neutral-50 border border-primary-800 py-4 px-6 placeholder-neutral-600"/>
            <textarea placeholder="mensagem" className="bg-neutral-50 min-h-[206px] border border-primary-800 py-4 px-6 placeholder-neutral-600"/>
            <Button size="large" children="enviar" className="h-12" />
        </form>
    )
}