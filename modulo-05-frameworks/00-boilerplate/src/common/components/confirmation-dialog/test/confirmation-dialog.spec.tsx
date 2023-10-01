import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ConfirmationDialogComponent } from '../confirmation-dialog.component';

describe('Confirmation Dialog Component', () => {
    test('verifies that the title, message and buttons are rendered, and that the onAccept and onClose functions are called when the buttons are clicked.', () => {
        //Arrange
        const isOpen = true;
        const onAccept = jest.fn();
        const onClose = jest.fn();
        const title = 'Diálogo de confirmación';
        const labels = {
            closeButton: 'Cerrar',
            acceptButton: 'Aceptar',
        };
        const children = <div>Mensaje de confirmación</div>;

        //Act
        const {getByText, asFragment } = render(<ConfirmationDialogComponent
            isOpen={isOpen}
            onAccept={onAccept}
            onClose={onClose}
            title={title}
            labels={labels}
            children={children}
        />)

        //Assert
        expect(getByText(title)).toBeInTheDocument();
        expect(getByText('Mensaje de confirmación')).toBeInTheDocument();

        fireEvent.click(getByText('Cerrar'));
        expect(onClose).toHaveBeenCalled();

        fireEvent.click(getByText('Aceptar'));
        expect(onAccept).toHaveBeenCalled();
        
    })

    test('snapshoot component', () => {
        //Arrange
        const isOpen = true;
        const onAccept = jest.fn();
        const onClose = jest.fn();
        const title = 'Diálogo de confirmación';
        const labels = {
            closeButton: 'Cerrar',
            acceptButton: 'Aceptar',
        };
        const children = <div>Mensaje de confirmación</div>;

        //Act
        const { asFragment } = render(<ConfirmationDialogComponent
            isOpen={isOpen}
            onAccept={onAccept}
            onClose={onClose}
            title={title}
            labels={labels}
            children={children}
        />)
        console.log(asFragment());
        //Assert
       expect(asFragment()).toMatchSnapshot();
        
    })
})
