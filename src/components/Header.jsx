import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export const JetLogo = () => {
  return (
    <svg fill="none" height="72" viewBox="0 0 32 32" width="72">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  return (
    <Navbar shouldHideOnScroll isBordered className="bg-transparent text-white">
      <NavbarBrand>
        <JetLogo />
        <p className="font-bold text-2xl text-inherit text-white">JetBolt</p>
      </NavbarBrand> 
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="shadow">
            BUY NOW
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
         <Button as={Link} color="white" href="#" variant="ghost">
            APP
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
