import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";

export const CreateEventModal = ({ isOpen, onClose, createEvent }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const clearEvent = () => {
        setTitle('');
        setDescription('');
        setStartDate('');
        setEndDate('');
    };

    return(
        <Modal isOpen={isOpen} onClose={onClose} isCentered >
          <ModalOverlay />
            <ModalContent>
              <ModalHeader>イベントを追加</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight="bold">タイトル</Text>
                <Input
                  placeholder='タイトル'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  mb="16px"
                />
                <Text fontWeight="bold">説明</Text>
                <Input
                  placeholder='説明'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  mb="16px"
                />
                <Text fontWeight="bold">予定開始日</Text>
                <Input
                  type='date'
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  mb="16px"
                />
                <Text fontWeight="bold">予定終了日</Text>
                <Input
                  type='date'
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  mb="16px"
                />
              </ModalBody>

              <ModalFooter>
                <Button
                  colorShceme="blue"
                  onClick={()=> {
                    createEvent( {title, description, startDate, endDate} );
                    clearEvent();
                    onClose();
                  }}
                >
                  イベントを追加
                </Button>
              </ModalFooter>
            </ModalContent>
        </Modal>
    );
};