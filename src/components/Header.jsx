import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import ModalButton from "./design/ModalButton";


export default function Header() {
  return (
    <Navbar shouldHideOnScroll isBordered className="text-white border-b-1 border-n-1 py-2 bg-transparent">
      <NavbarBrand>
        <img src="/logo.png"/>
        <p className="font-bold pl-3 text-4xl text-inherit text-white">JetBolt</p>
      </NavbarBrand> 
      <NavbarContent justify="end">
        <NavbarItem>
          <ModalButton as={Link} buttonText="BUY NOW" buttonStyles="bg-color-1 text-white text-2xl font-bold py-7 px-5" href="#" />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
         <Button as={Link} href="#" className="bg-transparent text-white text-2xl font-bold border-color-6 w-36 h-14" variant="ghost">
            APP
          </Button> 
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
