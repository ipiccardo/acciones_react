import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton({ type, placeholder, value, onChange, onSubmit, props }: any) {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type={type} placeholder={placeholder} onChange={onChange} value={value} />
            <Button onClick={onSubmit}>GO</Button>
        </div>
    )
}
