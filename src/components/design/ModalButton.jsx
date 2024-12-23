// import React from 'react'
// import {
//     Modal,
//     ModalContent,
//     ModalHeader,
//     ModalBody,
//     ModalFooter,
//     Button,
//     useDisclosure,
//   } from "@nextui-org/react";
// const ModalButton = () => {
//       // modal next ui
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   return (
//     <>'
    
//     <Button className="bg-yellow-300 -ml-28 -right-1/2 px-10 py-6 font-bold text-xl" onPress={onOpen}>
//           BUY ALPHA BOX 
//         </Button>
//         <Modal
//           backdrop="blur"
//           classNames={{
//             body: "py-6",
//             backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
//             base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
//             header: "border-b-[1px] border-[#292f46]",
//             footer: "border-t-[1px] border-[#292f46]",
//             closeButton: "hover:bg-white/5 active:bg-white/10",
//           }}
//           isOpen={isOpen}
//           radius="lg"
//           onOpenChange={onOpenChange}
//         >
//           <ModalContent>
//             {(onClose) => (
//               <>
//                 <ModalHeader className="flex flex-col gap-1">
//                   Modal Title
//                 </ModalHeader>
//                 <ModalBody>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Nullam pulvinar risus non risus hendrerit venenatis.
//                     Pellentesque sit amet hendrerit risus, sed porttitor quam.
//                   </p>
//                 </ModalBody>
//                 <ModalFooter>
//                   <Button
//                     color="foreground"
//                     variant="light"
//                     onPress={onClose}
//                   >
//                     Close
//                   </Button>
//                   <Button
//                     className="bg-yellow-300 shadow-lg shadow-indigo-500/20"
//                     onPress={onClose}
//                   >
//                     Action
//                   </Button>
//                 </ModalFooter>
//               </>
//             )}
//           </ModalContent>
//         </Modal>
//     </>
//   )
// }

// export default ModalButton


import React from "react";
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
        onClick={onClick || onOpen} // Use onClick if provided, otherwise open modal
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
                  className="bg-yellow-300 shadow-lg shadow-indigo-500/20"
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
