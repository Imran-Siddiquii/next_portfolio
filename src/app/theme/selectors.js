import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function HeadingColor() {
  const { headingColor, backgroundColor, textColor } = useSelector(
    (state) => state?.theme,
  );
  useEffect(() => {}, [headingColor, backgroundColor, textColor]);
  return { headingColor, backgroundColor, textColor };
}
