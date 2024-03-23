import React, { SVGProps, Suspense } from "react";
import { X } from "react-feather";

interface IconFactoryProps extends SVGProps<SVGSVGElement> {
  name: string;
}

const IconFactory = ({
  name,
  ...otherProps
}: IconFactoryProps): JSX.Element | null => {
  const Component = React.lazy(() =>
    import(`./${name}`).catch(() => ({ default: X }))
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...otherProps} />
    </Suspense>
  );
};

export default IconFactory;
