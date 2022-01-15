import {React} from "react";
import { Box, Typography, Modal } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    color : 'gold',
    boxShadow: 24,
    p: 4,
  };

function ModalBuy({open,handleClose}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modalCongratulations"
        aria-describedby="modalCongratulations-Description"
      >
        <Box sx={style}>
          <Typography id="titleOfModal" variant="h6" component="h2">
            Congratulations
          </Typography>
          <Typography id="descriptionOfModal" sx={{ mt: 2 }}>
            Our elegance is now yours, our values are now your,
            Welcome to Kingsman, now you are a knight in modern times.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalBuy;
