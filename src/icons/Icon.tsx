import s from "./icon.module.css"
import { IconMap } from "./icon-map.tsx"

// This project uses icons from Material Design.
//
// We are not using a cdn or local icon font because we won't be needing more than
// 200 icons and downloading all those icons in a font won't do the end user any good.
//
// We get the individual icons we need from https://icones.js.org/collection/tabler and
// extract the svg path and create a component out of them like the ones in ./svg
// folder.

export type Icons = keyof typeof IconMap

type props = {
  type: Icons
  size?: "small" | "medium" | "large"
}

export default function Icon({ type, size = "medium" }: props) {
  function getIconSVGPath(icon: Icons): React.ReactNode {
    return IconMap[icon]
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${s[size]} svg`}
    >
      {getIconSVGPath(type)}
    </svg>
  )
}
