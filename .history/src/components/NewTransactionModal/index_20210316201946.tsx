import Modal from 'react-modal'
import { Container } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Container>
            <Modal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            >
                <h2>Cadastrar Transação</h2>
            </Modal>
        </Container>
    )
}