"use client";

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
import { useSession } from "next-auth/react";
import * as actions from "@/actions";

export default function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = <div>Loading...</div>;
  } else if (session.data?.user) {
    authContent = (
      <div>
        {" "}
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar
              src={session.data?.user.image || ""}
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
  return <>{authContent}</>;
}
