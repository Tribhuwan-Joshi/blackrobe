"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Avatar,
  Button,
  Container,
  DropdownMenu,
  Flex,
} from "@radix-ui/themes";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 backdrop-blur-xl border-b-2 bg-bl sticky top-0">
      <Container>
        <Flex justify="between" align="center">
          <Flex direction="row" align="center" gap="3">
            <Image
              src="/icon.png"
              alt="icon"
              width={52}
              height={52}
              className="rounded-full"
            />
            <h1 className="h2 md:h1">Blackrobe</h1>
          </Flex>
          <AuthButtons />
        </Flex>
      </Container>
    </nav>
  );
};

const AuthButtons = () => {
  const { data: session, status } = useSession();
  if (status == "loading") return <Skeleton width="5rem" height="2rem" />;

  if (status === "unauthenticated")
    return (
      <Button
        size={{ initial: "2", md: "3" }}
        style={{ cursor: "pointer" }}
        variant="outline"
        onClick={() => signIn("google")}
      >
        Sign In
      </Button>
    );

  return (
    <Flex align="center" gap="3">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session?.user?.image!}
            fallback="?"
            radius="full"
            className="cursor-pointer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content variant="solid">
          <DropdownMenu.Item>{session?.user?.email}</DropdownMenu.Item>
          <DropdownMenu.Item>
            <a onClick={() => signOut()}>logout</a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <Button
        variant="outline"
        style={{ cursor: "pointer" }}
        onClick={() => signOut()}
      >
        Log out
      </Button>
    </Flex>
  );
};
export default Navbar;
