import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles({
    headerBox:{
        background:"#fff421",
        padding:"15px 1px"
    },
  logo: {
    color: "red",
  },
  brandText:{
    color:"red",
    textDecoration:'line-through',
  },
  link: {
    "& a": {
      textDecoration: "none",
      color: "black",
      "&:hover": {
        color: "red",
        textDecoration: "underline",
        textUnderlineOffset: '10px',
      },
    },
  },
});
