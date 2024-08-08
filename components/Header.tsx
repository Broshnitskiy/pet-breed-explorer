import { FC } from "react";
import Link from "next/link";
import { Container } from "./Container";

export const Header: FC = () => {
  return (
    <header className="w-full bg-gray-800 text-white">
      <Container>
        <nav className="flex justify-between items-center mx-auto pt-6 pb-6">
          <Link href="/" className="text-lg font-bold hover:text-gray-300">
            Pet Breed Explorer
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
