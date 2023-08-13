"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import Link from "next/link";
import { DeveloperMode, ColorLensOutlined } from "@mui/icons-material";
import { useStyle } from "./useStyle";
import React from "react";
import { ThemeModal } from "../ThemeModal";
const Header = () => {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={classes.headerBox}>
        <Grid container>
          <Grid item xs={4} md={4}>
            <Stack
              spacing={{ xs: 2, sm: 2 }}
              alignItems={"center"}
              direction="row"
              justifyContent={"center"}
              flexWrap="wrap"
            >
              <DeveloperMode fontSize="large" className={classes.logo} />
              <h2 className={classes.brandText}>Developer Mode</h2>
            </Stack>
          </Grid>
          <Grid
            item
            xs={8}
            md={8}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack
              spacing={{ xs: 2, sm: 8 }}
              className={classes.link}
              direction="row"
              flexWrap="wrap"
            >
              <Link href={"/"}>Home</Link>
              <Link href={"/work"}>Work</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/blogs"}>Blog</Link>
              <Link href={"/contact"}>Contact</Link>
              <Stack
                spacing={{ xs: 1, sm: 1 }}
                direction="row"
                flexWrap="wrap"
                onClick={handleClickOpen}
              >
                <div>Theme</div>
                <ColorLensOutlined />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <ThemeModal open={open} handleCloseButton={handleClose} />
    </>
  );
};

export default Header;
