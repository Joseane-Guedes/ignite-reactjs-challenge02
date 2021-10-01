import { ButtonHTMLAttributes, memo } from "react";
import "../Button/button.scss";
import { Icon } from "../Icon/Icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  selected: boolean;
}

export function ButtonComponent({
  iconName,
  title,
  selected,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      {...(selected && { className: "selected" })}
      {...rest}
    >
      <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"} />
      {title}
    </button>
  );
}

export const Button = memo(ButtonComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.selected, nextProps.selected);
});


