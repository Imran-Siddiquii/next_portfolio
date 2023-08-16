import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { HexColorPicker } from 'react-colorful';
import { Box, Grid, Paper } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface ThemeModalProps {
  open: boolean;
  handleCloseButton: () => void;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function ThemeModal({
  open,
  handleCloseButton,
}: ThemeModalProps) {
  const [backgroundColor, setBackgroundColor] = React.useState('#aabbcc');

  const [textColor, setTextColor] = React.useState('#aa5412');

  const [headingColor, setHeadingColor] = React.useState('#a59999');

  function handleClose(): void {
    handleCloseButton();
  }
  const submitTheme = () => {
    const themeColor = { backgroundColor, textColor, headingColor };
    handleCloseButton();
    // eslint-disable-next-line no-console
    console.log(
      '🚀 ~ file: ThemeModal.tsx:81 ~ submitTheme ~ themeColor:',
      themeColor,
    );
  };
  return (
    <div>
      <BootstrapDialog
        onClose={() => handleClose()}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={() => handleClose()}
        >
          Customize Portfolio Theme
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={6} md={6}>
                <Item>
                  <Typography mb={2}>Background Color</Typography>
                  <HexColorPicker
                    style={{ margin: 'auto' }}
                    color={backgroundColor}
                    onChange={setBackgroundColor}
                  />
                </Item>
              </Grid>
              <Grid item xs={2} sm={6} md={6}>
                <Item>
                  <Typography mb={2}>Text Color</Typography>
                  <HexColorPicker
                    style={{ margin: 'auto' }}
                    color={textColor}
                    onChange={setTextColor}
                  />
                </Item>
              </Grid>
              <Grid item xs={2} sm={6} md={6}>
                <Item>
                  <Typography mb={2}>Heading Text Color</Typography>
                  <HexColorPicker
                    style={{ margin: 'auto' }}
                    color={headingColor}
                    onChange={setHeadingColor}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={submitTheme}>
            Save Theme
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
