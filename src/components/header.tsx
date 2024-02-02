import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
} from "@nextui-org/react";
import { auth } from "@/auth";

export default async function Header() {
  const session = await auth();
  let authContent: React.ReactNode;
  if (session?.user) {
    authContent = (
      <div>
        <Avatar src={session.user.image || ""} alt="User avatar" />
      </div>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <Button type="submit" color="secondary" variant="bordered">
            Sign in
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button type="submit" color="primary" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </>
    );
  }
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Input placeholder="Search" className="" />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem></NavbarItem>
        {authContent}
      </NavbarContent>
    </Navbar>
  );
}
