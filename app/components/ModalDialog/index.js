/*
*Componets modalDialog index.js
*/
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import '../ModalDialog/modalDialog.css';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h4">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

       /* inizio funzione ModalDialog  */

function ModalDialog(props) {

  const [close, setClose] = React.useState(false);
   const setStatus = close ? 'closeStatus' : 'openStatus';
  
 
  const closeDialog = () => {
  console.log('setStatus', setStatus);
    setClose(!close);

   
  }

 /* `` back tik di riserva  ..*/

 return (
   
   <div>
       <Dialog  aria-labelledby="customized-dialog-title" open={props.toogleDialog} onClose = { props.setButton } className = {setStatus}>
        <DialogTitle id="customized-dialog-title" onClose = { props.setButton }>
          { props.id } 
        </DialogTitle>
        <DialogContent dividers>
           { props.children }
        </DialogContent>
        <DialogActions>
          <Button autoFocus  color="primary" onClick = { props.setButton }>
            Chiudi
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ModalDialog.propTypes = {};

export default ModalDialog;
