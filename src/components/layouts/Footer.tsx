import { CustomFlowbiteTheme, Flowbite, Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  footer: {
    root: {
      base: "w-full bg-gray-200 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between"
    }
  }
};

export default function FooterComponents() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Footer container>
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
    </Flowbite>
  );
}
