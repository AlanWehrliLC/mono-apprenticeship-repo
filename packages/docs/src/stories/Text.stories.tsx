import type { StoryObj, Meta} from "@storybook/react"
import { Text, TextProps } from "@awlc-dev/react"

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        size: "md",
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere laboriosam voluptas accusamus maiores sapiente laudantium quos veniam, commodi excepturi adipisci impedit pariatur earum. Est facere incidunt atque quaerat quod vel."
    },
    argTypes: {
        size: {
            options: ["xx","xs","sm","md","lg","xl","2x","4xl","5xl","6xl","7xl","8xl","9xl"],
            control: {
              type: "inline-radio"
            }
        },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: "Strong Text",
        as: "strong",
    }
}