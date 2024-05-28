import { useModalWindow } from "react-modal-global";
import Modal from "./Modal";
import { DialogTitle, Dialog as MuiDialog, Button } from "@mui/material";

function Dialog() {
  const modal = useModalWindow();

  return (
    <MuiDialog onClose={() => Modal.closeById(-1)} open={!modal.closed}>
      <DialogTitle>тест</DialogTitle>
      <Button onClick={() => Modal.closeById(-1)}>close</Button>
    </MuiDialog>
  );
}

export default Dialog;
