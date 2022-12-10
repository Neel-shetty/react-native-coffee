import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    {...props}
    width={26}
    height={26}
    fill="none"
  >
    <Path
      d="m2.98 3.52 2.253.39 1.043 12.43a1.95 1.95 0 0 0 1.95 1.79h11.818a1.95 1.95 0 0 0 1.934-1.674l1.028-7.105a1.453 1.453 0 0 0-1.23-1.645c-.07-.01-16.182-.016-16.182-.016M15.302 11.694h3.004"
      stroke="#001833"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.75 21.886a.59.59 0 1 1 0 1.179.59.59 0 0 1 0-1.179ZM19.97 21.886a.59.59 0 1 1 .001 1.18.59.59 0 0 1 0-1.18Z"
      fill="#001833"
      stroke="#001833"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgComponent
