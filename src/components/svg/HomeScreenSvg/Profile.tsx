import * as React from "react";
import Svg, { Mask, Path, G, SvgProps } from "react-native-svg";

const SvgComponent = (props:SvgProps) => (
  <Svg
    width={26}
    height={26}
    fill="none"
  >
    <Mask
      id="a"
      // style={{
      //   maskType: "alpha",
      // }}
      maskUnits="userSpaceOnUse"
      x={4}
      y={15}
      width={18}
      height={9}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.333 15.704h17.16v7.989H4.333v-7.989Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.914 17.33c-4.616 0-6.956.792-6.956 2.358 0 1.579 2.34 2.38 6.956 2.38 4.615 0 6.954-.793 6.954-2.359 0-1.58-2.339-2.38-6.954-2.38Zm0 6.363c-2.122 0-8.58 0-8.58-4.006 0-3.57 4.897-3.983 8.58-3.983 2.123 0 8.58 0 8.58 4.005 0 3.57-4.898 3.984-8.58 3.984Z"
        fill="#001833"
      />
    </G>
    <Mask
      id="b"
      // style={{
      //   maskType: "alpha",
      // }}
      maskUnits="userSpaceOnUse"
      x={7}
      y={2}
      width={12}
      height={12}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.16 2.167h11.506V13.67H7.16V2.167Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.914 3.713A4.21 4.21 0 0 0 8.708 7.92a4.195 4.195 0 0 0 4.175 4.205l.031.774v-.774A4.21 4.21 0 0 0 17.12 7.92a4.21 4.21 0 0 0-4.205-4.206Zm0 9.957h-.034a5.741 5.741 0 0 1-5.72-5.754c0-3.17 2.581-5.75 5.754-5.75a5.758 5.758 0 0 1 5.752 5.753 5.757 5.757 0 0 1-5.752 5.751Z"
        fill="#001833"
      />
    </G>
  </Svg>
);

export default SvgComponent;
