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
import { usePathname } from "next/navigation";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white border-b-2 bg-bl sticky top-0">
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
            <h1 className="h2 md:h1">
              <Link href="/">Blackrobe</Link>{" "}
            </h1>
          </Flex>
          <AuthButtons />
        </Flex>
      </Container>
    </nav>
  );
};

const AuthButtons = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  if (status == "loading") return <Skeleton width="5rem" height="2rem" />;

  if (status === "unauthenticated")
    return (
      <>
        <Link href="/" className={pathname === "/" ? "underline" : ""}>
          Home
        </Link>
        <Button
          size={{ initial: "2", md: "3" }}
          style={{ cursor: "pointer" }}
          variant="outline"
          onClick={() => signIn("google")}
        >
          Sign In
        </Button>
      </>
    );

  return (
    <Flex align="center" gap="5">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session?.user?.image!}
            fallback="?"
            size="2"
            radius="full"
            className="cursor-pointer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content variant="solid">
          <DropdownMenu.Item>{session?.user?.email}</DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link
              href="/contracts"
              className={`${pathname === "/"}? underline : ''`}
            >
              Saved Contracts
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a onClick={() => signOut()}>logout</a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <Link href="/" className={pathname === "/" ? "underline" : ""}>
        Home
      </Link>

      <button
        className="cursor-pointer hidden border p-1 px-2 rounded-md border-blue-400 hover:bg-blue-100 text-blue-600 md:block"
        onClick={() => signOut()}
      >
        Log out
      </button>
    </Flex>
  );
};
export default Navbar;
