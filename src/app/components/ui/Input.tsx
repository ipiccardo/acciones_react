import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


interface Input {
    type: string,
    placeholder: string,
    value: string,
    onChange: any,
    props: any,
    onSubmit: any
}


export function InputWithButton({ type, placeholder, value, onChange, props, onSubmit }: any) {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type={type} placeholder={placeholder} onChange={onChange} value={value} />
            <Button onClick={onSubmit}>GO</Button>
        </div>
    )
}
