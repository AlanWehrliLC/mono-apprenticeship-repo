import { Check } from "phosphor-react"
import { ComponentProps } from "react"
import { CheckboxContainer, CheckboxIndicator } from "./styles"

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" style={{padding: "0"}} />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = "Checkbox"