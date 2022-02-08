import React, {FC, forwardRef, memo} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type MySnackbarType = {
    isModalShow: boolean
    toggleEditModal: (value: boolean) => void
}

export const MySnackbar: FC<MySnackbarType> = memo(({toggleEditModal, isModalShow}) => {
        /*   const [open, setOpen] = useState(false);*/

        const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
            if (reason === 'clickaway') {
                return;
            }
            toggleEditModal(false);
        };

        return (
            <Snackbar open={isModalShow} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    Your message was sent successfully!
                </Alert>
            </Snackbar>
        );
    }
)
