 
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const ModalButton = ({
  buttonText = "Open Modal",
  buttonStyles = "bg-color-2 px-10 py-6 font-bold text-xl",
  modalTitle = "Modal Title",
  modalContent = "This is the default content for the modal. Replace it with your own text or elements.",
  modalFooterActionText = "Action",
  modalFooterCloseText = "Close",
  onAction = () => {},
  onClick = null,
  modalClassNames = {},
  buttonPosition = "",
}) => { 
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className={`${buttonStyles} ${buttonPosition}`}
        onClick={onClick || onOpen}
      >
        {buttonText}
      </Button>
      <Modal
        backdrop="blur"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
          ...modalClassNames,
        }}
        isOpen={isOpen}
        radius="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
              <ModalBody>
                {typeof modalContent === "string" ? (
                  <p>{modalContent}</p>
                ) : (
                  modalContent
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="foreground"
                  variant="light"
                  onPress={onClose}
                >
                  {modalFooterCloseText}
                </Button>
                <Button
                  className="bg-color-2 shadow-lg shadow-indigo-500/20"
                  onPress={() => {
                    onAction();
                    onClose();
                  }}
                >
                  {modalFooterActionText}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalButton;
