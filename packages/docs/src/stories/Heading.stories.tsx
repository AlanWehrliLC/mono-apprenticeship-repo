import type { StoryObj, Meta} from "@storybook/react"
import { Heading, HeadingProps } from "@awlc-dev/react"

export default {
    title: 'Typography/Heading',
    component: Heading,
    args: {
        children: "Custom title"
    },
    argTypes: {
        size: {
            options: ["sm","md","lg","2xl","4xl","5xl","6xl"],
            control: {
              type: "inline-radio"
            }
        },
    }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: "H1 Heading",
        as: "h1",
    },
    parameters: {
        docs: {
            description: {
                story: "By default, the title will always be an `h2`, but we can change it with the `as` property."
            }
        }
    }
}