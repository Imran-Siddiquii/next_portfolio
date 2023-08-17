'use client';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTheme } from './theme';
import { AppDispatch } from './store';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getTheme());
  }, []);

  return <h2>Hello</h2>;
}
