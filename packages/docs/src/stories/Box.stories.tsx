import type { StoryObj, Meta} from "@storybook/react"
import { Box, BoxProps, Text } from "@awlc-dev/react"

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (<Text>Testing element box</Text>)
    },
    argTypes: {
        children: {
            control: {
                type: null
            }
        }
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}
