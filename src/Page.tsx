import { Button } from "@mui/material";
import Modal from "./Modal";
import Dialog from "./Dialog";

function Page() {
  return <Button onClick={() => Modal.open(Dialog)}>open</Button>;
}

export default Page;
