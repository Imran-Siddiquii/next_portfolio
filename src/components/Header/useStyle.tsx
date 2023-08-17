import { makeStyles } from '@mui/styles';
// import HeadingColor from '@/app/theme/selectors';
// import themeLocal from '@/app/utils/themeLocal';

const useStyle = makeStyles(() => {
  // const { backgroundColor } = HeadingColor();
  return {
    headerBox: {
      background: 'green',
      padding: '15px 1px',
    },
    logo: {
      color: 'red',
    },
    brandText: {
      color: 'red',
      textDecoration: 'line-through',
    },
    link: {
      '& a': {
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
          color: 'red',
          textDecoration: 'underline',
          textUnderlineOffset: '10px',
        },
      },
    },
  };
});

export default useStyle;
