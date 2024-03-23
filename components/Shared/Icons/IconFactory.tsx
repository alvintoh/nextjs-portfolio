import React, { SVGProps } from "react";
import { X } from "react-feather";

interface IconFactoryProps extends SVGProps<SVGSVGElement> {
  name: string;
}

const IconFactory = ({
  name,
  ...otherProps
}: IconFactoryProps): JSX.Element | null => {
  const [Component, setComponent] = React.useState<React.FC<
    SVGProps<SVGSVGElement>
  > | null>(null);

  React.useEffect(() => {
    import(`./${name}`)
      .then(module => {
        const IconComponent = module.default;
        setComponent(() => IconComponent);
      })
      .catch(error => {
        console.error(`Failed to load icon: ${name}`, error);
        setComponent(() => X);
      });
  }, [name, otherProps]);

  return Component ? <Component {...otherProps} /> : null;
};

export default IconFactory;
