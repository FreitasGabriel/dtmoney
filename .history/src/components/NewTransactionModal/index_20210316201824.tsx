import Modal from 'react-modal'
import { Container } from "./styles";

export function NewTransactionModal() {
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