import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { auth } from "@/auth";
import * as actions from "@/actions";

export default async function Header() {
  const session = await auth();
  let authContent: React.ReactNode;
  if (session?.user) {
    authContent = (
      <div>
        {" "}
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar
              src={session.user.image || ""}
              alt="User avatar"
              className="cursor-pointer"
            />
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <form action={actions.signOut}>
                <Button type="submit" color="primary" variant="flat">
                  Sign Out
                </Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign in
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signOut}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
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
