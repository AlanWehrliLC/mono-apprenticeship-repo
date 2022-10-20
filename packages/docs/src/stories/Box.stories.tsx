import type { StoryObj, Meta} from "@storybook/react"
import { Box, BoxProps } from "@awlc-dev/react"

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
        <>
            <span>Testing element box</span>
        </>)
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}
